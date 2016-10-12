package com.final_project.controller;

import javax.mail.MessagingException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.final_project.config.SmtpMailSender;

@RestController
public class MailController {
	
	@Autowired
	private SmtpMailSender smtpMailSender;
	
	
	@RequestMapping("/send-mail")
	public void sendMail() throws MessagingException{
		
		smtpMailSender.send("bkrone1@gmail.com", "Test email", "YOUR MY BEST FRIEND!!!");
		
	}

}
