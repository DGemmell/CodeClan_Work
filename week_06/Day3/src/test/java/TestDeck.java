import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

//This is my class Deck with
public class TestDeck {

    Deck cards;
    Deck INT;


    @Before
    public void before(){
        cards = new Deck(Suit.CLUBS, Value.ACE);

    }

    @Test
    public void DeckHas52Cards(){
        assertEquals(52, cards.checkDeckSize());

    }

//    @Test
//    public void shuffleDeck(){
//        assertEquals(cards.shuffleDeck());
//    }

}
