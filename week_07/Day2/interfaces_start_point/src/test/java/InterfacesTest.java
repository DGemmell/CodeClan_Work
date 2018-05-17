import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class InterfacesTest {

    Printer printer;
    Mouse mouse;

    @Before
    public void before() {
        printer = new Printer();
        mouse = new Mouse();
    }

    @Test
    public void canConnect() {
        assertEquals("connected", printer.connect());
    }

    @Test
    public void canConnectMouse(){
        assertEquals("mouse connected", mouse.connect());
    }

    @Test
    public void testCanPrint() {
        assertEquals("printing", printer.print("hello world"));
    }

    @Test
    public void canConnectAsPeripheral() {
        iPeripheral printer = new Printer();
        assertEquals("connected", printer.connect());

    }

//    @Test
//    public void canPrintAsPeripheral() {
//        iPeripheral printer = new Printer();
//        assertEquals("printing: hello world", printer.print);
//    }

}
