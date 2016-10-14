package com.final_project.controller;

import javax.servlet.http.HttpServletRequest;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class WebsiteController {
	
	@RequestMapping("/")
	public ModelAndView home(HttpServletRequest request, ModelAndView mv){
		
		mv.setViewName("index");
		return mv;
	}

	
	
}
