package rent.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import rent.Service.Impl.CartService;
import rent.model.Cart;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class CartController {
	
	@Autowired
	private CartService cartService;
	
	@PostMapping("/addToCart")
	public List<Cart> addToCard(@RequestBody Cart c) {
		return cartService.addToCart(c);
	}
	
	@DeleteMapping("/deleteItem")
	public List<Cart> removeFromCart(int orderId){
		return cartService.removeFromCart(orderId);
	}
	
	@GetMapping("/viewCart")
	public List<Cart> viewCart(){
		return cartService.viewCart();
	}
}
