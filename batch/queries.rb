#!/usr/bin/env ruby
# coding: utf-8

require 'mysql'

tables     = ["watches", "lightcurves"]
connection = Mysql::new("127.0.0.1", "root", "root", "space_app")

tables.each do |tbl|
  p tbl
  begin
    result = state.execute(tbl)
    result.each do |tuple|
      p tuple
    end
  ensure
    state.close
  end
end

connection.close()

