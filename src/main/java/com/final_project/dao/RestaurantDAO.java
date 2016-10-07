package com.final_project.dao;

import java.util.List;
import com.final_project.entity.Restaurant;

public interface RestaurantDAO {
	List<Restaurant> getAllRestaurants();
	Restaurant getRestaurantById(int restaurantId);
	boolean addRestaurant(Restaurant restaurant);
	void updateRestaurant(Restaurant restaurant);
	void deleteRestaurant(int restaurantId);
}

