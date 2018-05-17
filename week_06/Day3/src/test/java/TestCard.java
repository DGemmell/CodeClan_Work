import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertArrayEquals;
import static org.junit.Assert.assertEquals;

public class TestCard {

    Card card;

// set up new card

    @Before
    public void before(){
        card = new Card(Suit.DIAMONDS, Value.JACK);
    }
//Test to return the variable Suit
    @Test
    public void canGetSuit(){
        assertEquals(Suit.DIAMONDS, card.getSuit());
    }
//Test to return the variable value
    @Test
    public void canGetValue(){
        assertEquals(Value.JACK, card.getValue());
    }
//Test to check the value/suit method in Card class
    @Test
    public void jackHasAValue10(){
        card = new Card(Suit.DIAMONDS, Value.JACK);
        assertEquals(10, card.getValueFromEnum());
    }
//Test to check that the method return all suits.  This i hope will help when creating the Deck class.
    @Test
    public void canGetAllSuits(){
        Suit[] expected = {Suit.HEARTS, Suit.CLUBS, Suit.SPADES, Suit.DIAMONDS};
        Suit[] suits = Suit.values();
        assertEquals(4, suits.length);
        assertArrayEquals(expected, suits);


    }


}



