import org.junit.Before;
import org.junit.Test;

import java.lang.reflect.Array;
import java.util.ArrayList;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotEquals;
import static org.junit.Assert.assertTrue;

public class TestRandomiser {

    private Randomiser randomiser;
    private ArrayList<String> acceptedValues;

    @Before
    public void before(){
        randomiser = new Randomiser();
        acceptedValues = new ArrayList<String>();
        acceptedValues.add("Debbie");
        acceptedValues.add("Colin");
        acceptedValues.add("John");
        acceptedValues.add("Louise");
        acceptedValues.add("Ally");
        acceptedValues.add("Alan");
    }

    @Test
    public void canGetRandomName(){
        String name = randomiser.getName();
        assertTrue(acceptedValues.contains(name));
    }

    @Test
    public void canGetPair(){
        ArrayList<String> pair = randomiser.getGroup(2);
        assertEquals(2, pair.size());
    }

    @Test
    public void canGetAcceptableGroup() throws Exception {
        ArrayList<String> group = randomiser.getGroup(3);
        String name1 = group.get(0);
        String name2 = group.get(1);
        String name3 = group.get(2);
        assertTrue(acceptedValues.contains(name1));
        assertTrue(acceptedValues.contains(name2));
        assertTrue(acceptedValues.contains(name3));
    }

    @Test
    public void groupsAreUnmatched(){
        ArrayList<String> group = randomiser.getGroup(3);
        assertNotEquals(group.get(0), group.get(1));
        assertNotEquals(group.get(1), group.get(2));
        assertNotEquals(group.get(0), group.get(2));
    }

    @Test
    public void doesntBreakIfGroupRequestedExceedsNames() throws Exception {
        ArrayList<String> group = randomiser.getGroup(7);
        assertEquals(6, group.size());
    }
}
