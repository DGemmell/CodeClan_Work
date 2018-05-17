import java.util.ArrayList;

public class Bear {
    private String name;
    private ArrayList<Salmon> belly;

//   salmon is the other class and variables of that class is in ()
    public Bear(String name){
        this.name = name;
        this.belly = new ArrayList<Salmon>();
    }

    public int bellySize(){
        return belly.size();
    }

    public void eat(River river){
        this.belly.add(river.removeFish());
    }

    public void shitInTheWoods(){
        this.belly.clear();
    }
}