require("minitest/autorun")
require("minitest/rg")

require_relative("../river")

class RiverTest <MiniTest::Test

  def setup
    @river = River.new("Clyde")
    @fish = Fish.new("Fingers")
  end

  def test_it_has_name
    assert_equal("Clyde", @river.new)
  end

  def test_can_add_fish
    fish = Fish.new("Fingers")
    @river.add_fish(fish)
    assert_equal(1, @river.fish_count)
  end

  def test_can_remove_fish
    fish = Fish.new("Pie")
    @river.add_fish(fish)
    @river.remove_fish()
    assert_equal(0, @river.fish_count)
    assert_equal("Pie", fish_to_be_eaten.name)
  end
end
