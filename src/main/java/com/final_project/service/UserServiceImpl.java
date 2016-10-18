package com.final_project.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.final_project.dao.IUserDAO;
import com.final_project.entity.User;

@Service
@Transactional
public class UserServiceImpl implements UserService{
	
	@Autowired
	private IUserDAO userDAO;
	
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

	@Override
	public User getUserByEmail(String email){
		User obj = userDAO.getUserByEmail(email);
		return obj;
	}
	
	@Override
	public boolean verification(User userFromDB, User userLoggingIn){
		boolean passOrFail=false;
		if (userFromDB.getPassword().equals(userLoggingIn.getPassword())){
			passOrFail = true;
		}
		return passOrFail;
	}
	
	
}


