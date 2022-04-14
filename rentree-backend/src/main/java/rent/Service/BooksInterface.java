package rent.Service;

import java.util.List;

import rent.model.Books;

public interface BooksInterface {
	
	public boolean addBook(Books b);
	public Books updateBook(Books b);
	public boolean deleteBook(int id);
	public Books findById(int bookId);
	public List<Books> getList();

}
