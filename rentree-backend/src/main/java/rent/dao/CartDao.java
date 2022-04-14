package rent.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import rent.model.Cart;

@Repository
public interface CartDao extends JpaRepository<Cart, Integer> {

}
