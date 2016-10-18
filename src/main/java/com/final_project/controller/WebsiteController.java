package com.final_project.controller;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import com.final_project.entity.User;
import com.final_project.entity.WholeUser;
import com.final_project.service.UserService;

import org.springframework.web.servlet.ModelAndView;


@Controller
@RequestMapping("/")
public class WebsiteController {
	
	@Autowired
	private UserService userService;
	
	@RequestMapping("")
    @ResponseBody
    public ModelAndView home(HttpSession sessionObj, ModelAndView mv){
            mv.setViewName("index");
            return mv;
    } 
	
	
	@RequestMapping("/profile")
    public ModelAndView profile(HttpSession sessionObj, ModelAndView mv)
    {       
        return mv;
    }
	
	@RequestMapping("/participatingrestaurants")
    public ModelAndView participatingrestaurants(HttpSession sessionObj, ModelAndView mv)
    {
        return mv;
    }
	
	@RequestMapping("/matchlist")
    public ModelAndView matchlist(HttpSession sessionObj, ModelAndView mv)
    {
        return mv;
    }
	
	@RequestMapping("/createuser")
	public ModelAndView createuser(HttpSession sessionObj, ModelAndView mv){
		return mv;
	}
	
	@RequestMapping(value = "/login", method = RequestMethod.POST)
    public ResponseEntity<Void> userLogin(@ModelAttribute User user, HttpSession sessionObj, ModelAndView mv) {
		User u = new User();
		
		try{
			u = userService.getUserByEmail(user.getEmail());
		System.out.println("User logging in is  " + u.getName());
		}catch(IndexOutOfBoundsException e){
			sessionObj.setAttribute("loginMessage", "Email or Password do not match");
		}
		if(userService.verification(user, u)){
			sessionObj.setAttribute("loginMessage", "");
			WholeUser wholeUser = WholeUser.makeWholeUser(u);
			sessionObj.setAttribute("user", wholeUser);
			sessionObj.setAttribute("loginMessage", wholeUser.getName() + " Successfully logged in");
			System.out.println("Success!");
			return new ResponseEntity<Void>(HttpStatus.OK);
		}else{
			sessionObj.setAttribute("loginMessage", "Email or Password do not match");
			mv.setViewName("redirect:/");
			return new ResponseEntity<Void>(HttpStatus.NOT_ACCEPTABLE);
		}
		
	}
	
	@RequestMapping("/logout")
	public ModelAndView logout(HttpSession sessionObj, ModelAndView mv){
		sessionObj.removeAttribute("user");
		sessionObj.setAttribute("loginMessage", "You have successfully logged out");
		System.out.println("session cleared");
		mv.setViewName("redirect:/");
		return mv;
	}
	
	@RequestMapping(value= "/session", method = RequestMethod.GET)
	public ResponseEntity<Object> getUserInSession(HttpSession sessionObj) {
		Object obj = sessionObj.getAttribute("user");
		return new ResponseEntity<Object>(obj, HttpStatus.OK);
	}
	
}
