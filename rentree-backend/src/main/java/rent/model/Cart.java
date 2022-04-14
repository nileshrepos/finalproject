package rent.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Cart {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int orderId;
	
	private int itemId;
	 private long userId;
	 
	 
	public Cart() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Cart(int orderId, int itemId, long userId) {
		super();
		this.orderId = orderId;
		this.itemId = itemId;
		this.userId = userId;
	}
	public int getOrderId() {
		return orderId;
	}
	public void setOrderId(int orderId) {
		this.orderId = orderId;
	}
	public int getItemId() {
		return itemId;
	}
	public void setItemId(int itemId) {
		this.itemId = itemId;
	}
	public long getUserId() {
		return userId;
	}
	public void setUserId(long userId) {
		this.userId = userId;
	}
	 
	 
}
