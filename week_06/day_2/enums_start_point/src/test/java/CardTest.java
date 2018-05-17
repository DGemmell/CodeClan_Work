import static org.junit.Assert.*;
import org.junit.*;

public class CardTest {

    Card card;

    @Before
    public void before(){
        card = new Card(SuitType.HEARTS);
    }

    @Test
    public void canGetSuit(){
        assertEquals(SuitType.HEARTS,card.getSuit());
    }

//    @Test
//    public void suitCanBeMispelt(){
//        card = new Card( "Hearrtts");
//        assertEquals( "hearrtts", card.getSuit());
//    }

    @Test
    public void queenHasValue10(){
        card = new Card(SuitType.HEARTS, ValueType.QUEEN);
        assertEquals(10, card.getValueFromEnum());
    }

//    this array can be used for looping over BUT it is a primative array.
    @Test
    public void canGetAllSuits(){
        SuitType[] expected = {SuitType.HEARTS, SuitType.DIAMONDS, SuitType.SPADES, SuitType.CLUBS};
        SuitType[] suits = SuitType.values();
        assertEquals(4, suits.length);
        assertArrayEquals(expected, suits);

    }
}