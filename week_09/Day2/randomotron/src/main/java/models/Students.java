package models;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class Students {
    public static List<String> getNames(int amount){
        ArrayList<String> names = new ArrayList<>();
        names.add("Victor");
        names.add("Jean");
        names.add("Chris");
        names.add("Ellie");

        Collections.shuffle(names);

        if(amount > names.size() || amount < 0){
            return names;
        }else{
            return names.subList(0, amount);
        }
    }
}
