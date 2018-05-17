public class Printer implements iPeripheral, iPrint {
    //    implement for interface and extends for abstract class

//    we are overriding what is on the interface

    @Override
    public String connect() {
        return "connected";
    }


    @Override
    public String print(String data) {
        return "printing: " + data;
    }
}
