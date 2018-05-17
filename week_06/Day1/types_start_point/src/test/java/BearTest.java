import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

public class BearTest {

//    instance variable bear
    private Bear bear;


//    rather than typing bear in each test we can define in the @before
    @Before
    public void before(){
        bear = new Bear("Baloo", 25, 95.62);
    }

    @Test
    public void hasName(){
        assertEquals("Baloo", bear.getName());

    }

    @Test
    public void hasAge(){
        assertEquals(25, bear.getAge());

    }

    @Test
    public void hasWeight() {
        assertEquals(95.62, bear.getWeight(), 0.01);
    }

    @Test
    public void readyToHibernate(){
        assertTrue (bear.readyToHibernate());
    }

    @Test
    public void notReadyToHibernate(){
        Bear bear2 = new Bear("yogi", 23, 79.99);
        assertFalse(bear2.readyToHibernate());
    }
}
