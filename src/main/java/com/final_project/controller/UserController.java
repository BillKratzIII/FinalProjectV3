  package com.final_project.controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.util.UriComponentsBuilder;

import com.final_project.entity.User;
import com.final_project.entity.WholeUser;
import com.final_project.service.UserService;

@Controller
public class UserController {

	@Autowired
	private UserService userService;
	
	@RequestMapping(value="/user/{id}", method = RequestMethod.GET )
	public ResponseEntity<User> getUserById(@PathVariable("id") Integer id) {
		User user = userService.getUserById(id);
		return new ResponseEntity<User>(user, HttpStatus.OK);
	}
	
	
	@RequestMapping(value= "/user", method = RequestMethod.GET)
	public ResponseEntity<List<User>> getAllUsers() {
		List<User> users = userService.getAllUsers();
		return new ResponseEntity<List<User>>(users, HttpStatus.OK);
	}
	
	@RequestMapping(value= "/usermatches", method = RequestMethod.GET)
	public ResponseEntity<ArrayList<WholeUser>> getUserMatches(HttpSession sessionObj) {
		List<User> users = userService.getAllUsers();
		ArrayList<WholeUser> wholeUsers = new ArrayList<WholeUser>();
		WholeUser userLoggedIn = (WholeUser) sessionObj.getAttribute("user");
		
		
		for (User user : users) {
			
			if (user.getFirstLanguageId().equalsIgnoreCase(userLoggedIn.getFirstLanguageId()) && user.getLearningLanguageId().equalsIgnoreCase(userLoggedIn.getLearningLanguageId())){
				wholeUsers.add(WholeUser.makeWholeUser(user));
			}
		}
		
		return new ResponseEntity<ArrayList<WholeUser>>(wholeUsers, HttpStatus.OK);
	}
	
	@RequestMapping(value= "/user", method = RequestMethod.POST)
	public ResponseEntity<Void> userPerson(@ModelAttribute User user, UriComponentsBuilder builder, HttpSession sessionObj) {
        System.out.println("Creating " + user.getName());
		
		boolean flag = userService.addUser(user);
        if (flag == false) {
        	return new ResponseEntity<Void>(HttpStatus.CONFLICT);
        }
        HttpHeaders headers = new HttpHeaders();
        headers.setLocation(builder.path("/user/{id}").buildAndExpand(user.getUserId()).toUri());
        WholeUser w = WholeUser.makeWholeUser(user);
        sessionObj.setAttribute("user", w);
        return new ResponseEntity<Void>(headers, HttpStatus.CREATED);
	}
	
	@RequestMapping(value="/user/{id}", method = RequestMethod.PUT )
	public ResponseEntity<User> updateUser(@RequestBody User user) {
		userService.updateUser(user);
		return new ResponseEntity<User>(user, HttpStatus.OK);
	}
	
	@RequestMapping(value="/user/{id}", method = RequestMethod.DELETE )
	public ResponseEntity<Void> User(@PathVariable("id") Integer userId) {
		userService.deleteUser(userId);
		return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
	}
}
