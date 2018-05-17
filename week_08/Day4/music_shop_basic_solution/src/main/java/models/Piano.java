package models;

import org.hibernate.annotations.Table;

import javax.persistence.Column;
import javax.persistence.Entity;

@Entity
@Table(name ="piano")
public class Piano extends Instrument {
    private String manufacturer;

    public Piano(String colour, String type, int buyPrice, int sellPrice, Shop shop, String manufacturer) {
        super(colour, type, buyPrice, sellPrice, shop);
        this.manufacturer = manufacturer;
    }

    @Column(name="manufacturer")
    public String getManufacturer() {
        return this.manufacturer;
    }

    public int calculateMarkup() {
        return this.sellPrice - this.buyPrice;
    }

    public String play() {
        return "Plink Plonk";
    }

}
