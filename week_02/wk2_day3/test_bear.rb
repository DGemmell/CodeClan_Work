require("minitest/autorun")
require("minitest/rg")

require_relative("../bear")

class BearTest < MiniTest::Test

  def setup
    @bear = Bear.new("Huggy")
  end

  def test_bear_can_eat_fish
    fish = Fish.new("Lunch")
    @bear.catch_fish(fish)
    assert_equal(1, @bear.food_count)
  end

  def test_bear_can_eat_fish
    river = River.new("Clyde")
    fish = Fish.new("Dinner")
    river.add_fish(fish)

    @bear.catch_fish(river.remove_fish())

    assert_equal(1, @bear.food_count())
    assert_equal(0, river.fish_count())


  end

end
