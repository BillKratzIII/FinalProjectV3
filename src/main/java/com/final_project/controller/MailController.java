package com.final_project.controller;

import javax.mail.MessagingException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.final_project.config.SmtpMailSender;
import com.final_project.entity.Email;

@RestController
public class MailController {
	
	@Autowired
	private SmtpMailSender smtpMailSender;
	
	
	@RequestMapping(value="/send-mail", method = RequestMethod.POST)
	public void sendMail(@RequestBody Email email) throws MessagingException{
		System.out.println("Inside sendEmail()");
		smtpMailSender.send(email.getAddress(), email.getSubject(), email.getMessage());
		
	}

}
  