package com.final_project.entity;

/*
 * 12 Week Team A, Group 2
 * User class holds the constructor to make a new user object. Variables along with their
 * getters and setters are used to make matches with other users.
 */


public class WholeUser{
	
	private int userId;
	private String name;
	private int ageRangeId;
	private String gender;
	private String streetAddress;
	private String city;
	private String state;
	private String zip;
	private String aboutMe;
	private String email;
	private String password;
	private String firstLanguageId;
	private String learningLanguageId;
	private String skillLevelId;
	private String avitar;
	private String ageRange = null;
	private String firstLanguage = null;
	private String learningLanguage = null;
	private String skillLevel = null;
	private String lat = null;
	private String lng = null;
	
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
	 
	public void setAgeRange(int ageRangeId){
		
		switch(ageRangeId){
		case 1: 
			this.ageRange = "18-22";
			break;
		case 2: 
			this.ageRange = "23-30";
			break;
		case 3:
			this.ageRange = "31-40";
			break;
		case 4:
			this.ageRange = "41-50";
			break;
		case 5: 
			this.ageRange = "51=65";
			break;
		case 6:
			this.ageRange = "65+";
			break;
		default:
			this.ageRange = "null";
			break;
		}
	}
	
	public String getAgeRange(){
		return ageRange;
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
	
	public String getFirstLanguage(){
		return firstLanguage;
	}
	
	public void setFirstLanguage(String firstLangaugeId){
		switch(firstLanguageId){
		case "1": 
			this.firstLanguage = "English";
			break;
		case "2": 
			this.firstLanguage = "Spanish";
			break;
		case "3":
			this.firstLanguage = "French";
			break;
		case "4":
			this.firstLanguage = "Italian";
			break;
		case "5": 
			this.firstLanguage = "German";
			break;
		case "6":
			this.firstLanguage = "Japanese";
			break;
		default:
			this.firstLanguage = "null";
			break;
		}
	}

	public String getLearningLanguageId() {
		return learningLanguageId;
	}

	public void setLearningLanguageId(String learningLanguageId) {
		this.learningLanguageId = learningLanguageId;
	}
	
	public String getLearningLanguage(){
		return learningLanguage;
	}
	
	public void setLearningLanguage(String learningLanguageId){
		switch(learningLanguageId){
		case "1": 
			this.learningLanguage = "English";
			break;
		case "2": 
			this.learningLanguage = "Spanish";
			break;
		case "3":
			this.learningLanguage = "French";
			break;
		case "4":
			this.learningLanguage = "Italian";
			break;
		case "5": 
			this.learningLanguage = "German";
			break;
		case "6":
			this.learningLanguage = "Japanese";
			break;
		default:
			this.learningLanguage = "null";
		}
	}

	public String getSkillLevelId() {
		return skillLevelId;
	}

	public void setSkillLevelId(String skillLevelId) {
		this.skillLevelId = skillLevelId;
	}
	
	public String getSkillLevel(){
		return skillLevel;
	}
	
	public void setSkillLevel(String skillLevelId){
		switch(skillLevelId){
		case "1":
			this.skillLevel = "Beginner";
			break;
		case "2":
			this.skillLevel = "Intermediate";
			break;
		case "3":
			this.skillLevel = "Advanced";
			break;
		default:
			this.skillLevel = "null";
			break;
		}
	}
	
	public String getAvitar() {
		return avitar;
	}

	public void setAvitar(String avitar) {
		this.avitar = avitar;
	}
	
	
	public String getLat() {
		return lat;
	}

	public void setLat(String lat) {
		this.lat = lat;
	}

	public String getLng() {
		return lng;
	}

	public void setLng(String lng) {
		this.lng = lng;
	}

	public static WholeUser makeWholeUser(User user){
		WholeUser newUser = new WholeUser();
		newUser.setUserId(user.getUserId());
		newUser.setName(user.getName());
		newUser.setAgeRangeId(user.getAgeRangeId());
		newUser.setGender(user.getGender());
		newUser.setStreetAddress(user.getStreetAddress());
		newUser.setCity(user.getCity());
		newUser.setState(user.getState());
		newUser.setZip(user.getZip());
		newUser.setAboutMe(user.getAboutMe());
		newUser.setEmail(user.getEmail());
		newUser.setPassword(user.getPassword());
		newUser.setFirstLanguageId(user.getFirstLanguageId());
		newUser.setLearningLanguageId(user.getLearningLanguageId());
		newUser.setSkillLevelId(user.getSkillLevelId());
		newUser.setAgeRange(user.getAgeRangeId());
		newUser.setFirstLanguage(user.getFirstLanguageId());
		newUser.setLearningLanguage(user.getLearningLanguageId());
		newUser.setSkillLevel(user.getSkillLevelId());
		newUser.setAvitar(user.getAvitar());
		newUser.setLat(user.getLat());
		newUser.setLng(user.getLng());
		return newUser;
	}
	
	
	
}//class
