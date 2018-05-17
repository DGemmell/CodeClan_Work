import static spark.Spark.get;

public class sparkintro {

    public static void main(String[] args) {
        get("/hello", (req, res) -> {
            return "hello world!";
        });


        get("/hello/:name", (req, res) -> {
            return "Hello " + req.params(":name");

        });

        get ("/friends/:number", (req, res) ->{
            String [] friends = {"colin", "debbie"};
            int index = Integer.parseInt(req.params(":number")) - 1;
            return friends[index];
        });

        get ("/add/:num1/:num2", (req, res) ->{
            int num1 = Integer.parseInt(req.params(":num1"));
            int num2 = Integer.parseInt(req.params(":num2"));
            return num1 + num2;
        });

        get ("/subtract/:num1/:num2",(req, res) -> {
            int num1 = Integer.parseInt(req.params(":num1"));
            int num2 = Integer.parseInt(req.params(":num2"));
            return num1 - num2;
        });

        get ("/multiply/:num1/:num2", (req, res) -> {
            int num1 = Integer.parseInt(req.params(":num1"));
            int num2 = Integer.parseInt(req.params("num2"));
            return num1 * num2;
        });


    }

}
