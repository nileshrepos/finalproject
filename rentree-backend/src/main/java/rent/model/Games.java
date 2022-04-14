package rent.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Games {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int gid;
	String name;
	float price;
	
	public Games() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Games(int gid, String name, float price) {
		super();
		this.gid = gid;
		this.name = name;
		this.price = price;
	}
	public int getGid() {
		return gid;
	}
	public void setGid(int gid) {
		this.gid = gid;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public float getPrice() {
		return price;
	}
	public void setPrice(float price) {
		this.price = price;
	}
	
}
