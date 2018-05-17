import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class ComputerTest {
    DesktopComputer desktop;
    LaptopComputer laptop;

    @Before
    public void before() {
        desktop = new DesktopComputer();
        laptop = new LaptopComputer();
    }

    @Test
    public void desktopCanRunApplication(){
        assertEquals("I am running IntelliJ", desktop.runApplication("IntelliJ"));
    }

    @Test
    public void laptopCanRunApplication(){
        assertEquals("I am also running intelliJ", laptop.runApplication("IntelliJ"));
    }
}
