package com.final_project.dao;

import java.util.List;
import com.final_project.entity.User;

public interface UserDAO {
	List<User> getAllUsers();
	User getUserById(int userId);
	boolean addUser(User user);
	void updateUser(User user);
	void deleteUser(int userId);
}
