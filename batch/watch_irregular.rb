#!/usr/bin/env ruby
# coding : utf-8

require 'mysql'
require 'date'

threshold  = 3
summary    = {}
since_mjd   = (Date.today - 7).mjd;
today_mjd   = (Date.today - 1).mjd;
connection = Mysql::new("127.0.0.1", "root", "root", "space_app")

st_select = connection.prepare("SELECT * FROM lightcurves WHERE mjd > ? ORDER BY mjd DESC")
st_insert = connection.prepare("INSERT INTO watches (mjd, astro_obj_id, flux_rate) VALUES ('?', '?', '?')")
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

summary.each do |k, v|
  mjd       = v[0][0]
  flx       = v[0][1]
  err       = v[0][2]
  flx_mean  = 0

  if mjd > today_mjd then
    next
  end
  
  v.each do |list|
    flx_mean += list[1]
  end
  flx_mean = flx_mean / v.length
  flx_rate = flx / flx_mean.to_f
  astro_id = k.split(":")[0].to_i
  
  if threshold * flx_mean + err < flx then
    begin
      st_insert.execute(mjd, astro_id, flx_rate)
    ensure
      st_insert.close
      break
    end
  end
end

connection.close

