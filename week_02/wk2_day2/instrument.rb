class Instrument

attr_reader :name, :type

  def initialize(name, type)
    @name = name
    @type = type
  end

  def make_sound(title)
    if @type == "piano"
     return "Plink plonk .... im playing #{title}!"
    else
      return "im playing #{title}!"
    end
  end


end
