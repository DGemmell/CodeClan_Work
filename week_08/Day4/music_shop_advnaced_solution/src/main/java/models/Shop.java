package models;

import behaviours.StockItem;

import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.ArrayList;

@Entity
@Table(name="shop")
public class Shop {
    private String name;
    private ArrayList<StockItem> stock;

    public Shop(String name) {
        this.name = name;
        this.stock = new ArrayList<StockItem>();
    }

    public String getName() {
        return this.name;
    }

    public int stockCount() {
        return this.stock.size();
    }

    public void addToStock(StockItem item) {
        this.stock.add(item);
    }

    public void removeFromStock(StockItem item) {
        this.stock.remove(item);
    }

    public int totalPotentialProfit() {
        int total = 0;
        for (StockItem item : stock) {
            total += item.calculateMarkup();
        }
        return total;
    }
}
