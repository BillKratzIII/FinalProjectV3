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

@Controller
@RequestMapping("/")
public class WebsiteController {
	
	
	@RequestMapping("")
    @ResponseBody
    public ModelAndView home(HttpSession sessionObj, ModelAndView mv){
            sessionObj.setAttribute("message" , "This is something in the session");
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
	
	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public ResponseEntity<Void> userLogin(@RequestBody User user, HttpSession sessionObj) {
        
        sessionObj.setAttribute("user", user);
        return new ResponseEntity<Void>(HttpStatus.OK);
	}
	
	@RequestMapping("/logout")
	public ModelAndView logout(HttpSession sessionObj, ModelAndView mv){
		sessionObj.invalidate();
		System.out.println("session cleared");
		mv.setViewName("index");
		return mv;
	}
	
	/*@RequestMapping("/error")
	public ModelAndView error(ModelAndView mv){
		mv.setViewName("index");
		return mv;
	}*/
	
}
