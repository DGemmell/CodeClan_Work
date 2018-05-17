import db.DBHelper;
import models.Guitar;
import models.Piano;

public class Runner {

    public static void main(String[] args) {

        Guitar guitar = new Guitar("Brown", "Ians", 500, 1000, "Ians Shop","ians", 6);
        Piano piano = new Piano();
        DBHelper.saveOrUpdate(guitar);
        DBHelper.saveOrUpdate(piano);


    }
}






