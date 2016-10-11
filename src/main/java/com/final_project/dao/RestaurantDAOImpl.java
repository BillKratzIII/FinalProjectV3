package com.final_project.dao;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate5.HibernateTemplate;
import org.springframework.stereotype.Repository;
import com.final_project.entity.Restaurant;

@Repository
public class RestaurantDAOImpl implements IRestaurantDAO {

	@Autowired
	private HibernateTemplate  hibernateTemplate;

	@Override
	public Restaurant getRestaurantById(int restaurantId) {
		return hibernateTemplate.get(Restaurant.class, restaurantId);
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Restaurant> getAllRestaurants() {
		String hql = "FROM Restaurant as r ORDER BY r.restaurantId";
		return (List<Restaurant>) hibernateTemplate.find(hql);
	}	

	@Override
	public boolean addRestaurant(Restaurant restaurant) {
		hibernateTemplate.save(restaurant);
		return true;
	}

	@Override
	public void updateRestaurant(Restaurant restaurant) {
		Restaurant record = getRestaurantById(restaurant.getRestaurantId());

		record.setName(restaurant.getName());
		record.setStreetAddress(restaurant.getStreetAddress());
		record.setCity(restaurant.getCity());
		record.setState(restaurant.getState());
		record.setZip(restaurant.getZip());
		record.setLanguageId(restaurant.getLanguageId());
		record.setEmail(restaurant.getEmail());
		record.setPassword(restaurant.getPassword());

		hibernateTemplate.update(record);
	}
	
	@Override
	public void deleteRestaurant(int restaurantId) {
		hibernateTemplate.delete(getRestaurantById(restaurantId));
	}
}
