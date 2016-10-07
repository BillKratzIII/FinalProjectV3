package com.final_project.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/*
 * 12 Week Team A, Group 2
 * User class holds the constructor to make a new user object. Variables along with their
 * getters and setters are used to make matches with other users.
 */

@Entity
@Table(name="user")
public class User implements Serializable{
	
private static final long serialVersionUID = 1L;
	
	@Id
	@Column(name="user_id")
	private int userId;
	
	@Column(name="name")
	private String name;
	
	@Column (name="age_range_id")
	private int ageRangeId;

	//private int ageRange;
	
	@Column (name="gender")
	private String gender;
	
	@Column (name="street_address")
	private String streetAddress;
	
	@Column (name="city")
	private String city;
	
	@Column (name="state")
	private String state;
	
	@Column (name="zip")
	private String zip;
	
	@Column (name="about_me")
	private String aboutMe;
	
	@Column (name="email")
	private String email;
	
	@Column (name="password")
	private String password;
	
	@Column (name="first_language_id")
	private String firstLanguageId;
	
	//private String firstLanguage;
	
	@Column (name="learning_language_id")
	private String learningLanguageId;
	
	//private String learningLanguage;
	
	@Column (name="skill_level_id")
	private String skillLevelId;
	
	//private String skillLevel;

	/*getters and setters below- */
	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getAgeRangeId() {
		return ageRangeId;
	}

	public void setAgeRangeId(int ageRangeId) {
		this.ageRangeId = ageRangeId;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getStreetAddress() {
		return streetAddress;
	}

	public void setStreetAddress(String streetAddress) {
		this.streetAddress = streetAddress;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getZip() {
		return zip;
	}

	public void setZip(String zip) {
		this.zip = zip;
	}

	public String getAboutMe() {
		return aboutMe;
	}

	public void setAboutMe(String aboutMe) {
		this.aboutMe = aboutMe;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getFirstLanguageId() {
		return firstLanguageId;
	}

	public void setFirstLanguageId(String firstLanguageId) {
		this.firstLanguageId = firstLanguageId;
	}

	public String getLearningLanguageId() {
		return learningLanguageId;
	}

	public void setLearningLanguageId(String learningLanguageId) {
		this.learningLanguageId = learningLanguageId;
	}

	public String getSkillLevelId() {
		return skillLevelId;
	}

	public void setSkillLevelId(String skillLevelId) {
		this.skillLevelId = skillLevelId;
	}
	
	
	
}//class
