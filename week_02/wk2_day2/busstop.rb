class BusStop
  attr_accessor :name

  def initialize(name)
    @name = name
    @queue = []

  def add_person(person)
    @queue << person
  end

  def get_queue_copy()
    copy = @queue
    return copy
    
