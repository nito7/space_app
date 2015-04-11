#!/usr/bin/env ruby
# coding : utf-8

require 'mysql'

connection = Mysql::new("127.0.0.1", "root", "root", "space_app")

statement = connection.prepare("SELECT * FROM lightcurves ORDER BY mjd DESC");
begin
  result = statement.execute()
  result.each do |tuple|
    puts tuple[0]
  end
ensure
  statement.close
end

connection.close
