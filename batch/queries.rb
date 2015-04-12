#!/usr/bin/env ruby
# coding: utf-8

require 'mysql'

tables     = ["watches", "lightcurves"]
connection = Mysql::new("127.0.0.1", "root", "root", "space_app")
state      = connection.prepare("select * from watches");

begin
  tables.each do |tbl|
    result = state.execute()
    result.each do |tuple|
      p tuple
    end
  end
ensure
  state.close
end

connection.close()

