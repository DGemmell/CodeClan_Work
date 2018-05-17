import java.util.HashMap;

public class HashmapDemo {
    public static void main(String[] args) {
        System.out.println("Hello World!");

        HashMap<String, String> favouriteFruits = new HashMap<>();
        favouriteFruits.put("Debbie", "Apple");
        favouriteFruits.put("Emma", "Banana");
        favouriteFruits.put("Ellie", "Blueberry");

        System.out.println(favouriteFruits.get("Emma"));

        HashMap<String, Integer> personAge = new HashMap<>();
        personAge.put("ed", 100);

        System.out.println(personAge.get("Ed"));
    }


}
