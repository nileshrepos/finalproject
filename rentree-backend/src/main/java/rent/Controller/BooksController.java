package rent.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import rent.Service.BooksInterface;
import rent.model.Books;
//Access-Control-Allow-Origin: *;
@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/book")
public class BooksController {
	
	@Autowired
	private BooksInterface bkInterface;
	
	@PostMapping("/add")
	public boolean addBook(@RequestBody Books b) {
		return bkInterface.addBook(b);
	}
	@PutMapping("/update")
	public Books updateBook(@RequestBody Books b) {
		return bkInterface.updateBook(b);
	}
	
	@DeleteMapping("/delete")
	public boolean deleteBook(@RequestParam("bookId") int bookId) {
		return bkInterface.deleteBook(bookId);
	}
	
	@GetMapping("/find")
	public Books findById(@RequestParam("id") int bookId) {
		return bkInterface.findById(bookId);
	}
	
	@GetMapping("/list")
	public List<Books> getList(){
		return bkInterface.getList();
	}
	
}
