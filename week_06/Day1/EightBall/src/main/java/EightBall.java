import java.util.ArrayList;
import java.util.Collections;

//Defining my class EightBall
public class EightBall {

    //  Defining my array named arraylist with string
    private ArrayList<String> words;

    //    im not sure if i also needed this but i referred to allys notes and he had declared "this"
//  constructor
    public EightBall(ArrayList<String> words) {
        this.words = words;
    }

    //    adding a new word to the string array
    public void add(String word) {
        this.words.add(word);
    }

    //    getting random words using the shuffle method.
    public String getRandomWords() {
        Collections.shuffle(words);
        return words.get(0);

    }

    public int getSize(){
        return this.words.size();
    }
}








