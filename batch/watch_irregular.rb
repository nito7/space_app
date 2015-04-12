#!/usr/bin/env ruby
# coding : utf-8

require 'mysql'
require 'date'
require 'bigdecimal'

threshold  = 1
err_rate   = 1

summary    = {}
since_mjd  = (Date.today - 7).mjd;
today_mjd  = (Date.today - 1).mjd;
connection = Mysql::new("127.0.0.1", "root", "root", "space_app")

st_delete = connection.prepare("DELETE FROM watches");
st_select = connection.prepare("SELECT * FROM lightcurves WHERE mjd > ? ORDER BY mjd DESC")
st_insert = connection.prepare("INSERT INTO watches (mjd, astro_obj_id, flux_rate) VALUES (?, ?, ?)")

## テーブルをクリアする
begin
  result = st_delete.execute()
ensure
  st_delete.close
end

## 光度曲線データを取り出す
begin
  result = st_select.execute(since_mjd)

  result.each do |tuple|
    key   = [tuple[1], tuple[2], tuple[3]].join(":")
    value = [tuple[4], tuple[5], tuple[6]]
    if summary.has_key?(key) then
      summary[key].push(value) 
    else
      summary[key] = [].push(value)
    end
  end
ensure
  st_select.close
end

## ウォッチ対象をDBに入れる
begin
  summary.each do |k, v|
    mjd       = v[0][0]
    flx       = v[0][1]
    err       = v[0][2]
    flx_mean  = 0
  
    if mjd > today_mjd then
      next
    end
    
    v.each do |list|
      if list[1] > 0 then
        flx_mean += list[1]
      end
    end

    flx_mean = flx_mean / v.length.to_f
    if flx_mean == 0 then
      next
    end

    flx_rate = flx / flx_mean.to_f * 100
    astro_id = k.split(":")[0].to_i

    puts " ---- "
    p astro_id
    p flx_rate
    p flx
    p flx_mean

    flx_rate = BigDecimal(flx_rate.to_s).floor(2).to_f
     
    if threshold * flx_mean + err_rate * err < flx then 
      st_insert.execute(mjd, astro_id, flx_rate)
    end
  end
ensure
  st_insert.close
end

connection.close

