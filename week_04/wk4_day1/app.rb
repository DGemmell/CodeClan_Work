require ('sinatra')
require ('sinatra/contrib/all')


get '/hi' do
   "howdy"
end

get "/roll-die" do
   "rolling the die ...#{rand(1...7).to_s}"
end

get "/name/:first/:last" do
  return "your name is #{params[:first]} #{params[:last]}"
end

get "/friends/:number" do
  friends = ["joey", "pheobe","monica", "chandler"]
  index = params[:number].to_i - 1
  return friends[index]
end

get "/square/:num" do
  num = params[:num].to_i
 return "number squared = #{num * num}"
end

get "pet/:hello" do
  "Hello pet"
end

get "/pet/:name" do
 "Hello #{params[:name]}"
end
