package rent.Service;

import java.util.List;

import rent.model.User;

public interface UserServiceInterface {
	
	long addUser(User u);
	boolean updateUser(User u);
	boolean deleteUser(long userId);
	User findByEmail(String email);
	User validateUser(String email);
	public List<User> getAll();
	
}
