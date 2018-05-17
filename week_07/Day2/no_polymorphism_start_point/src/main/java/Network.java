import java.util.*;

public class Network {
    private String name;
    private ArrayList<IConnect>devices;
    private int capacity;


    public Network(String name){
        this.devices = new ArrayList<IConnect>();
        this.name = name;
        this.capacity = capacity;
    }

    public String getName(){

        return name;
    }

    public int getCapacity(){
        return capacity;
    }

    public int deviceCount(){

        return devices.size();
    }

    public void connect(IConnect device){

        devices.add(device);
    }


    public void disconnectAll(){

        devices.clear();
    }

    public int freeslots(){
        return capacity - deviceCount();
    }
}