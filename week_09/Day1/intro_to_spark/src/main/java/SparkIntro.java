import java.util.ArrayList;
import java.util.Collections;

import static spark.Spark.get;

public class SparkIntro {

    public static void main(String[] args) {
        get("/random_game", (req, res) -> {
            ArrayList<String> games = new ArrayList<>();
            games.add("snakes and ladders");
            games.add("monopoly");
            games.add("hungry hippos");
            games.add("operation");
            games.add("frustration");
            games.add("family fortunes-my favourite");

            Collections.shuffle(games);
            return games.get(0);
        });

    }
}
