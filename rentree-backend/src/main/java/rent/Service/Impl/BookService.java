package rent.Service.Impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import rent.Service.BooksInterface;
import rent.dao.BooksDao;
import rent.model.Books;

@Service
public class BookService implements BooksInterface {
	
	@Autowired
	private BooksDao bkDao;

	public boolean addBook(Books b) {
		//Books bk=new Books(001,"Atomic Habits",250,"james Clear");
		Books b1=bkDao.save(b);
		if(b1 != null)
		return true;
		else 
			return false;
	}

	
	public Books updateBook(Books b) {
		
		Books tmpBk=null;
		Books finalBook=null;
		try {
		Optional<Books> temp=bkDao.findById(b.getBookid());
		if(temp != null) {
			tmpBk=temp.get();
			tmpBk.setAuthor(b.getAuthor());
			tmpBk.setBookid(b.getBookid());
			tmpBk.setName(b.getName());
			finalBook=bkDao.save(tmpBk);
			
		}}catch(Exception e) {
			e.printStackTrace();
		}
		return finalBook;
	}

	
	public boolean deleteBook(int id) {
		boolean flag=false;
		try {
		bkDao.deleteById(id);
		flag=true;
		}catch(Exception e) {
			e.printStackTrace();
		}
		return flag;
	}

	
	public Books findById(int bookId) {
		Books gotBook;
		Optional<Books> foundBook= bkDao.findById(bookId);
		if(foundBook.isPresent()) {
			gotBook=foundBook.get();
			return gotBook;
		}
		return null;
	}


	@Override
	public List<Books> getList() {
		return bkDao.findAll();
		
	}
	
	

}
