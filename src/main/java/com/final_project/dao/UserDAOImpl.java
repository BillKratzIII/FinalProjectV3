package com.final_project.dao;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate5.HibernateTemplate;
import org.springframework.stereotype.Repository;
import com.final_project.entity.User;

@Repository
public class UserDAOImpl implements UserDAO{
	
	@Autowired
	private HibernateTemplate  hibernateTemplate;

	@Override
	public User getUserById(int userId) {
		return hibernateTemplate.get(User.class, userId);
	}
	
	@SuppressWarnings("unchecked")
	@Override
	public List<User> getAllUsers() {
		String hql = "FROM User as u ORDER BY u.userId";
		return (List<User>) hibernateTemplate.find(hql);
	}
	
	@Override
	public boolean addUser(User user) {
		hibernateTemplate.save(user);
		return true;
	}
	
	@Override
	public void updateUser(User user) {
		User record = getUserById(user.getUserId());

		record.setName(user.getName());
		record.setAgeRangeId(user.getAgeRangeId());
		record.setGender(user.getGender());
		record.setStreetAddress(user.getStreetAddress());
		record.setCity(user.getCity());
		record.setState(user.getState());
		record.setZip(user.getZip());
		record.setAboutMe(user.getAboutMe());
		record.setEmail(user.getEmail());
		record.setPassword(user.getPassword());
		record.setFirstLanguageId(user.getFirstLanguageId());
		record.setLearningLanguageId(user.getLearningLanguageId());
		record.setSkillLevelId(user.getSkillLevelId());

		hibernateTemplate.update(record);
	}
	
	@Override
	public void deleteUser(int userId) {
		hibernateTemplate.delete(getUserById(userId));
	}
}
