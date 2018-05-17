import static spark.Spark.get;

import com.sun.scenario.effect.Blend;
import spark.ModelAndView;
import spark.template.velocity.VelocityTemplateEngine;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Vector;


public class Controller {

    public static void main(String[] args) {

        VelocityTemplateEngine velocityTemplateEngine = new VelocityTemplateEngine();
        final Randomiser randomiser = new Randomiser();

        get("/randomname", (req, res) -> {
           String result = randomiser.getName();
           HashMap<String, Object> model = new HashMap<String, Object>();
           model.put("result", result);
           return new ModelAndView(model, "result.vtl");
        }, velocityTemplateEngine);

        get("randomname/:number", (req, res) -> {
            int groupsize = Integer.parseInt(req.params(":number"));
            ArrayList<String> result = randomiser.getGroup(groupsize);
            HashMap<String, Object> model = new HashMap<>();
            model.put("result", result);
            return new ModelAndView(model, "result.vtl");
        }, velocityTemplateEngine);

    }
}


