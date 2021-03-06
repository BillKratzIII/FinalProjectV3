package com.final_project.service;

import java.util.List;
import com.final_project.entity.User;

public interface UserService {
	List<User> getAllUsers();
	User getUserById(int user_id);
	User getUserByEmail(String email);
	boolean addUser(User user);
	void updateUser(User user);
	void deleteUser(int user_id);
	boolean verification(User userFromDb, User userLoggingIn);
	
}

