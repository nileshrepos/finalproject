package rent.Service.Impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import rent.Service.UserServiceInterface;
import rent.dao.UserDao;
import rent.model.User;

@Service
public class UserService implements UserServiceInterface {
	@Autowired
		UserDao userDao;
	@Override
	public long addUser(User u) {
		// TODO Auto-generated method stub
		
		 User user1 = userDao.findByEmail(u.getEmail());
		 
		 if(user1!=null)
		 {
			 return 0;
		 }
		 else
		 {
			 userDao.save(u);
		 }
		
		return 1;
	}

	
	public List<User> getAll()
	{
		return userDao.findAll();
	}
	

	@Override
	public boolean deleteUser(long userId) {
		userDao.deleteById(userId);
		Optional<User> searchResult= userDao.findById(userId);
		if(searchResult.isPresent())
			return false;
		else
		return true;
	}

	


	@Override
	public boolean updateUser(User u) {
		// TODO Auto-generated method stub
		 Optional<User> searchResult= userDao.findById(u.getUserId());
		 if(searchResult.isPresent())
		 {
			 User foundUser=searchResult.get();
			 foundUser.setAddress(u.getAddress());
			 foundUser.setContact(u.getContact());
			 foundUser.setEmail(u.getEmail());
			 foundUser.setFirstName(u.getFirstName());
			 foundUser.setLastName(u.getLastName());
			 foundUser.setPin(u.getPin());
			 userDao.save(foundUser);
			 return true;
		 }
		return false;
	}



	@Override
	public User findByEmail(String email) {
		// TODO Auto-generated method stub
		return null;
	}



	


//	@Override
//	public List<User> findByEmail(String email) {
//		//finding user by email
//		 return userDao.findByEmail(email);
//		
//	}



	@Override
	public User validateUser(String email) {
		//validating user
		//boolean flag=false;
		User found=userDao.findByEmail(email);
		if(found !=null) {
			
				return found;
		}
		
		return null;
	}

}
