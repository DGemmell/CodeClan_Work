require('pry-byebug')
require_relative('model/bounty')

cowboy1 = Bounty.new({
  'cowboy_name' => 'Big John',
  'bounty_value' => '30',
  'danger_level' => '7',
  'favourite_weapon' => 'lightning McQueen'})

cowboy2 = Bounty.new({
    'cowboy_name' => 'holy joe',
    'bounty_value' => '40',
    'danger_level' => '3',
    'favourite_weapon' => 'Mash Bear'})

cowboy3 = Bounty.new({
    'cowboy_name' => 'Black Betty',
    'bounty_value' => '100',
    'danger_level' => '10',
    'favourite_weapon' => 'Baby Annabell'})

cowboy1.save()
cowboy2.save()
cowboy3.save()

cowboy2.danger_level = "5"
cowboy2.update()

cowboy1.delete()

# binding.pry
# nil
