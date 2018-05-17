require('pg')
require_relative("../db/sql_runner")

class Customer

  attr_reader :id, :name

  def initialize(options)
    @id = options['id'].to_i
    @name = options['name']
  end

  def save()
    sql = "INSERT INTO customers (name) VALUES ($1) RETURNING ID;"
    # db = PG.connect({dbname: "pizza_shop", host: "localhost"})
    values = [@name]
    @id = SQLRunner.run(sql, values)[0]['id'].to_i
    # db.prepare("save", sql)
    # @id = db.exec_prepared("save", values)[0]["id"].to_i
    # db.close()
  end

  def self.delete_all()
    sql = "DELETE FROM customers;"
    SQLRunner.run(sql)
    # db = PG.connect({dbname: "pizza_shop", host: "localhost"})
    # db.prepare("delete_all", sql)
    # @id = db.exec_prepared("delete_all")
    # db.close()
   end

   def self.all()
     sql = "SELECT * FROM customers"
     customers = SQLRunner.run(sql)
     return customers.map{|person| Customer.new(person)}
  end

  def pizza_orders()
    sql = "SELECT * pizza_orders WHERE customer_id = $1"
    values = [@id]
    orders = SQLRunner.run(sql, values)
    return orders.map{|order| PizzaOrder.new(order)}
  end

  # def data_all()
  #   sql = "SELECT customer_id FROM customers"
  #   customers = SQLRunner.run(sql)
  #   return customer_id.
  # end
end
