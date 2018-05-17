package models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name ="guitar")
public class Guitar extends Instrument  {
    private String model;
    private int numberOfStrings;


    public Guitar(String colour, String type, int buyPrice, int sellPrice, Shop shop, String model, int numberOfStrings) {
        super(colour, type, buyPrice, sellPrice, shop);
        this.model = model;
        this.numberOfStrings = numberOfStrings;
    }

    @Column(name="model")
    public String getModel() {
        return this.model;
    }
    @Column(name="numberofstrings")
    public int getNumberOfStrings() {
        return this.numberOfStrings;
    }

    public String play() {
        return "Kerrang!!!";
    }

    public int calculateMarkup() {
        return this.sellPrice - this.buyPrice;
    }



}
