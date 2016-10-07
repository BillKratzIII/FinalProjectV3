package com.final_project.service;

import java.util.List;
import com.final_project.entity.Restaurant;

public interface RestaurantService {
	List<Restaurant> getAllRestaurants();
	Restaurant getRestaurantById(int restaurant_id);
	boolean addRestaurant(Restaurant restaurant);
	void updateRestaurant(Restaurant restaurant);
	void deleteRestaurant(int restaurant_id);
}