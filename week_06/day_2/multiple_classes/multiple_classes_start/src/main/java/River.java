import java.util.ArrayList;

public class River {
    private ArrayList<Salmon> stock;

    public River(){
        this.stock = new ArrayList<>();
    }

    public void addFish(Salmon salmon){
        this.stock.add(salmon);
    }

    public int getFishCount(){
        return this.stock.size();
    }
//    the river owns the salmon so needs to pass the salmon to the bear rather than
//    the bear getting or calling the method
    public Salmon removeFish(){
        return this.stock.remove(0);
    }
}
