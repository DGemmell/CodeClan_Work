import org.junit.Before;
import org.junit.Test;

import javax.print.attribute.standard.Destination;

import static org.junit.Assert.assertEquals;

public class BusTest {

    Bus bus;
    Person person;

    @Before
    public void before(){
        bus = new Bus("Muirend", 50);
    }

    @Test
    public void canGetDestination(){
        assertEquals("Muirend", bus.getDestination());
    }

    @Test
    public void canGetCapacity(){
        assertEquals(50, bus.getCapacity());
    }

}
