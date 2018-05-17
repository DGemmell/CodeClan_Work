import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class BearTest {

//    name of the class we would be using first then what we would name it ie little bear.
    Bear bear;
    Salmon  salmon;
    River river;

//to test we need instances of them.  So need to declare them.
    @Before
    public void before(){
        bear = new Bear("Baloo");
        salmon = new Salmon();
        river = new River();
        river.addFish(salmon);
    }

//    need to write a method because bellysize is not a method.  Bear array list is private so we need a getter.
//    In ruby we would have used attr accessor or getter setter.

    @Test
    public void bellyStartsEmpty(){
        assertEquals(0, bear.bellySize());
    }

    @Test
    public void canEatSalmon(){
        bear.eat(river);
        assertEquals(1, bear.bellySize());
    }

    @Test
    public void canShitInTheWoods(){
        bear.eat(river);
        assertEquals(1, bear.bellySize());
        bear.shitInTheWoods();
        assertEquals(0, bear.bellySize());
    }


}
