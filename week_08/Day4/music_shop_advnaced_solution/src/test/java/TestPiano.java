import db.DBHelper;
import models.Piano;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class TestPiano {

    Piano piano;

    @Before
    public void before(){
        piano = new Piano("yamaha", "hot pink", 1000, 1500);
        DBHelper.saveOrUpdate(piano);
    }

    @Test
    public void canSave(){
        Piano found = DBHelper.find(Piano.class, piano.getId());
        assertEquals("yamaha", found.getManufacturer());
    }

    @Test
    public void canUpdate(){
        Piano found = DBHelper.find(Piano.class, piano.getId());
        found.setManufacturer("steinway");
        DBHelper.saveOrUpdate(found);
        found = DBHelper.find(Piano.class, found.getId());
        assertEquals("steinway", found.getManufacturer());

    }
}


