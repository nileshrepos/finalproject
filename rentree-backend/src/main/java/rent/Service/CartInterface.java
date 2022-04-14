package rent.Service;

import java.util.List;

import rent.model.Cart;

public interface CartInterface {

	List<Cart> addToCart(Cart c);
	List<Cart>  removeFromCart(int orderId);
	boolean placeOrder();
	List<Cart> viewCart();
}
