package rent.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long userId;
	
		
	private String firstName;
	private String lastName;
	private String address;
	private int pin;
	private Long contact;
	
	private String email;
	private String pass;
	
	
	
	
	public User() {
		super();
		// TODO Auto-generated constructor stub
	}




	public User(long userId, String firstName, String lastName,
			String address, int pin, Long contact, String email,String pass) {
		super();
		this.userId = userId;
	
		this.firstName = firstName;
		this.lastName = lastName;
		this.address = address;
		this.pin = pin;
		this.contact = contact;
		
		
		this.email = email;
		this.pass=pass;
	}




	public long getUserId() {
		return userId;
	}




	public void setUserId(long userId) {
		this.userId = userId;
	}





	public String getFirstName() {
		return firstName;
	}




	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}




	public String getLastName() {
		return lastName;
	}




	public void setLastName(String lastName) {
		this.lastName = lastName;
	}




	public String getAddress() {
		return address;
	}




	public void setAddress(String address) {
		this.address = address;
	}




	public int getPin() {
		return pin;
	}




	public void setPin(int pin) {
		this.pin = pin;
	}




	public Long getContact() {
		return contact;
	}




	public void setContact(Long contact) {
		this.contact = contact;
	}




	public String getEmail() {
		return email;
	}




	public void setEmail(String email) {
		this.email = email;
	}

	public String getPass() {
		return pass;
	}




	public void setPass(String pass) {
		this.pass = pass;
	}



	
	
	
}
