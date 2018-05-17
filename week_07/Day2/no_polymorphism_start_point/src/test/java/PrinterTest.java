import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class PrinterTest {
    Printer printer;

    @Before
    public void setUp() throws Exception {
        printer = new Printer();
    }

    @Test
    public void canPrint() {
        assertEquals("printing: hello world", printer.print("hello world"));
    }

    @Test
    public void canConnect() {
        assertEquals("Debbies Printer connected", printer.connect("Debbies"));
    }
}
