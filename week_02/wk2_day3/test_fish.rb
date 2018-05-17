require("minitest/autorun")
require("minitest/rg")

require_relative("../fish")

class FishTest < MiniTest::Test

  def setup
    @fish1 = Fish.new("Wanda")

  end

  def test_fish_name
    assert_equal("Wanda", @fish1.name)
  end



end
