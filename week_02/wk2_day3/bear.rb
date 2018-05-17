class Bear

  attr_reader :name

  def initialize(name)
    @name = name
    @belly = []
  end

  def food_count()
    return @belly.count()
  end

  def catch_fish(fish)
    @belly << fish
  end

  end
