public class Stereo implements iPlay {

    String name;
    double volume;

    @Override
    public String play() {
        return "playing";
    }

    public String getStereoName() {
        return "name";
    }

    public double getVolume() {
        return volume;
    }

    public void raiseVolume(double volume) {
        if (volume >= 0) {
            this.volume += volume;
        }
    }
}
