import java.util.ArrayList;

//this is my class
public class Library {

    private ArrayList<Book> books;
    private int stockCapacity;
    private String name;

//this is my constructor with array list for array books and in calculate stock capacity
    public Library (int stockCapacity, String name){
        this.books = new ArrayList<>();
        this.stockCapacity = stockCapacity;
        this.name = name;
}
//Method to measure stock capacity 1002

    public int getStockCapacity(){
        return stockCapacity;
    }
//Method to measure how many books at the moment its 1000
    public int getNumberOfBooks(){
        return books.size();
    }
//Method to check current capacity then  add a new book to the book list if its less than capacity.

    public void addBook(Book book){
        if (getNumberOfBooks() < this.stockCapacity) {
            books.add(book);
        }
    }


//   questions to ask instructors
//    1.why cant method stockcapacity be found in line 26 when it is declared at the top? Answer:  I had declared
//    Library.getStockCapacity but as i am referring to the library instance within the class this needs to be lower case.
//    3.Non static method for stock capacity, what is a static method?  I tried changing but still didnt work.
//    4.Daft question does the stock capacity = number of books or is stock capacity the number it CAN hold but i need to add more books?

}
