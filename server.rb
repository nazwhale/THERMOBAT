require 'sinatra'
require 'json'

get '/thermostat.json' do
  headers 'Access-Control-Allow-Origin' => '*'
  send_file 'index.html'
end
