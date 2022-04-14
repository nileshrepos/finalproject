package rent.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import rent.model.Books;

@Repository
public interface BooksDao extends JpaRepository<Books, Integer> {

}
