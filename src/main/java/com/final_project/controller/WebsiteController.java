package com.final_project.controller;


import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.View;
import org.springframework.web.servlet.view.InternalResourceView;
import org.springframework.web.util.UriComponentsBuilder;

import com.final_project.entity.User;


@Controller
@RequestMapping("/")
public class WebsiteController {
	
	
	
	@RequestMapping("")
	@ResponseBody
	public View home(HttpSession sessionObj){
		sessionObj.setAttribute("message" , "This is something in the session");
		return new InternalResourceView("html/index.html");
	}
	
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
        return new InternalResourceView("html/MatchList.html");
    }
	
	@RequestMapping(value = "/sendmessage")
    public View sendMessage()
    {
        return new InternalResourceView("html/sendmessage.html");
    }
	
	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public ResponseEntity<Void> userLogin(@RequestBody User user, HttpSession sessionObj) {
        
        sessionObj.setAttribute("user", user);
        return new ResponseEntity<Void>(HttpStatus.OK);
	}
}
