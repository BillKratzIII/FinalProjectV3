package com.final_project.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.View;
import org.springframework.web.servlet.view.InternalResourceView;
//import org.springframework.web.servlet.ModelAndView;
//import javax.servlet.http.HttpServletRequest;

@Controller
@RequestMapping("/")
public class WebsiteController {
	
	/*
	@RequestMapping("/")
	public ModelAndView index(HttpServletRequest request, ModelAndView mv){
		
		mv.setViewName("index");
		return mv;
	}
	*/
	
	@RequestMapping("")
	@ResponseBody
	public View home(){
		return new InternalResourceView("html/index.html");
	}
}
