import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Collections;

public class Randomiser {

    private ArrayList<String> names;

    public Randomiser() {
        this.names = new ArrayList<String>();
        this.names.add("Debbie");
        this.names.add("Colin");
        this.names.add("John");
        this.names.add("Louise");
        this.names.add("Ally");
        this.names.add("Alan");
        this.names.add("Colin");
    }

    public String getName() {
        Collections.shuffle(this.names);
        String name = this.names.get(0);
        return name;
    };

    public ArrayList<String> getGroup(int groupSize){
        if(groupSize > this.names.size()){
            groupSize = this.names.size();
        }
        ArrayList<String> group = new ArrayList<String>();
        for(int i = 0; i < groupSize; i++){
            String name = getName();
            while(group.contains(name)){
                name = getName();
            }
            group.add(name);
        };
        return group;
    }

    public int countNames() {
        return this.names.size();
    }
}
