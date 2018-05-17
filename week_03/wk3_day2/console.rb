require('pry-byebug')
require_relative('model/pizza_order')

order1 = PizzaOrder.new({
  'first_name' => 'Luke',
  'last_name' => 'Skywalker',
  'quantity' => '1',
  'topping' => 'Ewok, extra Ewok'})


order2 = PizzaOrder.new({
  'first_name' => 'Darth',
  'last_name' => 'Vader',
  'quantity' => '1',
  'topping' => 'Hawaiian'
  })



  order1.save()
  order2.save()

  order1.first_name = "Charlie"
  order1.update()

  order = PizzaOrder.all()

  binding.pry
  nil
