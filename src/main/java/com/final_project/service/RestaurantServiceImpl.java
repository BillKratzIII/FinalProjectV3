package com.final_project.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.final_project.dao.RestaurantDAO;
import com.final_project.entity.Restaurant;

@Service
@Transactional
public class RestaurantServiceImpl implements RestaurantService {

	@Autowired
	private RestaurantDAO RestaurantDAO;

	@Override
	public Restaurant getRestaurantById(int restaurantId) {
		Restaurant obj = RestaurantDAO.getRestaurantById(restaurantId);
		return obj;
	}	

	@Override
	public List<Restaurant> getAllRestaurants(){
		return RestaurantDAO.getAllRestaurants();
	}

	@Override
	public synchronized boolean addRestaurant(Restaurant restaurant){
    	   RestaurantDAO.addRestaurant(restaurant);
    	   return true;
	}

	@Override
	public void updateRestaurant(Restaurant restaurant) {
		RestaurantDAO.updateRestaurant(restaurant);
	}

	@Override
	public void deleteRestaurant(int restaurantId) {
		RestaurantDAO.deleteRestaurant(restaurantId);
	}
}