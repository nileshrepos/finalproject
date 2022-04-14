package rent.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import rent.Service.UserServiceInterface;
import rent.model.User;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/user")
public class UserController {
	
	@Autowired
	UserServiceInterface userService;
	
	@PostMapping("/add")
	public long addUser(@RequestBody User u) {
		return userService.addUser(u);
	}
	
	@PutMapping("/update")
	public boolean updateUser(@RequestBody User u) {
		return userService.updateUser(u);
	}
	
	@DeleteMapping("/delete")
	public boolean deleteUser(@RequestParam("id") long userId) {
		return userService.deleteUser(userId);
	}
	@GetMapping("/bymail")
	public User findByEmail(@RequestParam("email") String email)
	{
	return userService.findByEmail(email);	
	}
	
	@GetMapping("/validate")
	public User validateUser(@RequestParam("email")String  email) {
		return userService.validateUser(email);
	}

	@GetMapping("/Hello")
	public List<User> hello()
	{
		return userService.getAll();
	}
}
