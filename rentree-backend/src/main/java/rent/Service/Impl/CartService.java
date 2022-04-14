package rent.Service.Impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import rent.Service.CartInterface;
import rent.dao.CartDao;
import rent.model.Cart;

@Service
public class CartService implements CartInterface {
	
	List<Cart> cartList=new ArrayList<Cart>();

	@Autowired
	private CartDao cardDao;
	
	
	@Override
	public List<Cart>  addToCart(Cart c) {
		if(c != null) {
			cartList.add(c);
			cardDao.save(c);
			return cartList;
		}
		else 
			return null;
	}

	@Override
	public List<Cart>  removeFromCart(int orderId) {
		// TODO Auto-generated method stub
		Cart c;
		int index;
		for(Cart o : cartList) {
			if(o.getOrderId() == orderId) {
				index=cartList.indexOf(o);
				c=cartList.get(index);
				cardDao.deleteById(c.getOrderId());
				c=null;
			}
		}
		return cartList;
	}

	@Override
	public boolean placeOrder() {
		// T
		
		return true;
	}

	@Override
	public List<Cart> viewCart() {
		// return List
		return cartList;
	}

	

}
