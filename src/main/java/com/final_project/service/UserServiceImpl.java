package com.final_project.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.final_project.dao.UserDAO;
import com.final_project.entity.User;

@Service
@Transactional
public class UserServiceImpl implements UserService{
	
	@Autowired
	private UserDAO userDAO;
	
	@Override
	public User getUserById(int userId) {
		User obj = userDAO.getUserById(userId);
		return obj;
	}
	
	@Override
	public List<User> getAllUsers(){
		return userDAO.getAllUsers();
	}
	
	@Override
	public synchronized boolean addUser(User user){
    	   userDAO.addUser(user);
    	   return true;
	}
	
	@Override
	public void updateUser(User user) {
		userDAO.updateUser(user);
	}
	
	@Override
	public void deleteUser(int userId) {
		userDAO.deleteUser(userId);
	}
}

