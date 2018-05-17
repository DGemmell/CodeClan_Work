
class Bus
  def initialize(route_number, destination, passengers)
    @route = route_number
    @destination = destination
    @passengers = []
  end

  def drive
    if @route == 22
      return "Brum Brum!"
    end
  end

  def no_of_passengers
    for person in @passengers
      return @passengers.count()
    end
  end

  def bus_pick_up(person)
      @passenger << 1
    end
  end

  def bus_drop_off(person)
        @passenger.delete(person)
      end
  end

  def bus_drop_off()
    @passengers = []
      end
  end

  def bus_pick_up_from_stop(stop)
    for person in stop.get_queue_copy()
    pick_up(person)
  end

  stop.clear_queue()
  copy = @get_queue_copy
  return copy
end
end
