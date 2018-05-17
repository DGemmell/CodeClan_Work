import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class NetworkTest {

    Network network;
    Desktop desktop;
    Printer printer;
    Radio radio;

    @Before
    public void before() {
//        network = new Network("", 2);
        desktop = new Desktop("Keith's Desktop", "Apple", "Macbook Pro");
        printer = new Printer();
        radio = new Radio("Radio 2");
    }


    @Test
    public void testCannotAddMoreThanCapacity(){
        network.connect(printer);
        network.connect(radio);
        network.connect(desktop);

        assertEquals(3, network.deviceCount());
    }

    @Test
    public void canConnectToPrinterDesktopRadio() {
        network.connect(printer);
        network.connect(radio);
        network.connect(desktop);
        assertEquals(3, network.deviceCount());

    }
    @Test
    public void hasName(){
        assertEquals("CodeClan", network.getName());
    }

    @Test
    public void deviceListStartsEmpty() {
        assertEquals(0, network.deviceCount());
    }

    @Test
    public void canConnectDesktop() {
        network.connect(desktop);
        assertEquals(1, network.deviceCount());
    }

    @Test
    public void shouldEmptyDeviceListAfterDisconnectingAll() {
        network.connect(desktop);
        network.disconnectAll();
        assertEquals(0, network.deviceCount());
    }

    @Test
    public void canAddRadioToNetwork(){
        network.connect(radio);
        assertEquals(1, network.deviceCount());

    }

//    @Test
//    public void noFreeSlots() {
//        network = new Network("CodeClan", 1);
//        network.connect(printer);
//        network.connect(printer);
//        assertEquals(0, network.freeslots());
//        assertEquals(1, network.deviceCount());
//
//    }
}
