public class Radio implements IConnect {

    private String station;

    public Radio(String station) {
        this.station = station;
    }

    public String getStation(){
        return station;
    }

    public String connect(String data) {
        return "radio connected";
    }







}
