package com.final_project.controller;

import javax.servlet.http.HttpSession;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.View;
import org.springframework.web.servlet.view.InternalResourceView;

import com.final_project.entity.User;
import org.springframework.web.servlet.ModelAndView;
import javax.servlet.http.HttpServletRequest;

@Controller
public class WebsiteController {
	
	
	@RequestMapping("/")
	public ModelAndView index(HttpServletRequest request, ModelAndView mv){
		
		mv.setViewName("index");
		return mv;
	}
	
	/*
	@RequestMapping("")
	@ResponseBody
	public View home(HttpSession sessionObj){
		System.out.println("Inside home view");
		sessionObj.setAttribute("message" , "Session started.");
		System.out.println(sessionObj.getAttribute("message") + " : " + sessionObj.getId());
		return new InternalResourceView("html/index.html");
	}*/
	
	@RequestMapping(value = "/profile")
    public View profile()
    {
        return new InternalResourceView("html/profile.html");
    }
	
	@RequestMapping(value = "/participatingrestaurants")
    public View participatingRestaurants()
    {
        return new InternalResourceView("html/participatingrestaurants.html");
    }
	
	@RequestMapping(value = "/matchlist")
    public View matchList()
    {
        return new InternalResourceView("html/matchlist.html");
    }
	
	@RequestMapping(value = "/sendmessage")
    public View sendMessage()
    {
        return new InternalResourceView("html/sendmessage.html");
    }
	
	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public ResponseEntity<Void> userLogin(@RequestBody User user, HttpSession sessionObj) {
        
        sessionObj.setAttribute("userName", user.getName());
        System.out.println(sessionObj.getAttribute("userName"));
        return new ResponseEntity<Void>(HttpStatus.OK);
	}
	
	@RequestMapping(value = "/logout")
	public View logout(HttpSession sessionObj){
		sessionObj.invalidate();
		System.out.println("session cleared");
		return new InternalResourceView("html/index.html");
	}
	
}
