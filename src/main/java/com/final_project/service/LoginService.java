package com.final_project.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.final_project.entity.User;

@Service
@Transactional
public class LoginService {
	private User activeUser;
	
	public void userLogin(User user){
		setActiveUser(user);
	}
	
	public void userLogout(){
		activeUser.setUserId(0);
		activeUser.setName(null);
		activeUser.setAgeRangeId(0);
		activeUser.setStreetAddress(null);
		activeUser.setCity(null);
		activeUser.setState(null);
		activeUser.setZip(null);
		activeUser.setAboutMe(null);
		activeUser.setEmail(null);
		activeUser.setPassword(null);
		activeUser.setFirstLanguageId(null);
		activeUser.setLearningLanguageId(null);
		activeUser.setSkillLevelId(null);
		activeUser.setGender(null);
	}

	public User getActiveUser() {
		return activeUser;
	}

	public void setActiveUser(User activeUser) {
		this.activeUser = activeUser;
	}
	
	
}
