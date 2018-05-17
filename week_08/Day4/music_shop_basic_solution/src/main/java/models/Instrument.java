package models;

import behaviours.IPlay;
import behaviours.ISell;

import javax.persistence.*;


@Entity
@Inheritance(strategy = InheritanceType.JOINED)
public abstract class Instrument implements IPlay, ISell {
    private int id;
    private String colour;
    private String type;
    protected int buyPrice;
    protected int sellPrice;
    private Shop shop;

    public Instrument() {
    }

    public Instrument(String colour, String type, int buyPrice, int sellPrice, Shop shop) {
        this.colour = colour;
        this.type = type;
        this.buyPrice = buyPrice;
        this.sellPrice = sellPrice;
        this.shop = shop;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Column(name ="colour")
    public String getColour() {
        return this.colour;
    }

    @Column(name ="type")
    public String getType() {
        return this.type;
    }

    @Column(name = "buyprice")
    public int getBuyPrice() {
        return this.buyPrice;
    }

    @Column(name ="sellprice")
    public int getSellPrice() {
        return this.sellPrice;
    }

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "instrument_id", nullable = false)

    public Shop getShop() {
        return shop;
    }

    public void setShop(Shop shop) {
        this.shop = shop;
    }
}
