import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class RadioTest {

    Radio radio;

    @Before
    public void before(){
        radio = new Radio("Radio 2");
    }

    @Test
    public void canConnect(){
        assertEquals("radio connected: CodeClan", radio.connect("CodeClan"));

    }

    @Test
    public void canTuneToAStation(){
        assertEquals("Radio 2", radio.getStation());

    }




}
