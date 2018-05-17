class river

  attr_reader :name

  def initialize(name)
    @name = name
    @fish_population = []
  end

  def fish_count()
    return @fishes.fish_count
  end

  def add_fish(fish)
    @fishes << fish
  end

  def remove_fish()
    @fishes.delete()
  end 
end
