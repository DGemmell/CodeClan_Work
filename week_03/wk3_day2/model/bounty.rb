require("pg")

class Bounty
attr_accessor :cowboy_name, :bounty_value, :danger_level, :favourite_weapon

def initialize( options )
  @cowboy_name = options['cowboy_name']
  @bounty_value = options['bounty_value'].to_i
  @danger_level = options['danger_level'].to_i
  @favourite_weapon= options['favourite_weapon']
end

def save()
  db = PG.connect( {dbname: 'bounty', host: 'localhost' })
  sql = "INSERT INTO bounties (cowboy_name, bounty_value, danger_level, favourite_weapon)
  VALUES
  ($1, $2, $3, $4)
  RETURNING *;"
values = [@cowboy_name, @bounty_value, @danger_level, @favourite_weapon]
db.prepare("save", sql)
@id = db.exec_prepared("save", values)[0]['id'].to_i

db.close()
end

def update()
  db = PG.connect({dbname: 'bounty', host: 'localhost'})
  sql = "UPDATE bounties SET (cowboy_name, bounty_value, danger_level, favourite_weapon) = ($1, $2, $3, $4)
  WHERE id = $3"
  values = [@cowboy_name, @bounty_value, @danger_level, @favourite_weapon]
  db.prepare("update", sql)
  db.exec_prepared("update", values)
  db.close()
end

def delete()
  db = PG.connect({dbname: 'bounty', host: 'localhost'})
  sql = "DELETE FROM bounties WHERE id = $1"
  values = [@id]
  db.prepare("delete_one", sql)
  db.exec_prepared("delete_one", values)
  db.close
end


end
