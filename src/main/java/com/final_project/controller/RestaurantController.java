package com.final_project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.util.UriComponentsBuilder;

import com.final_project.entity.Restaurant;
import com.final_project.service.RestaurantService;

@Controller
public class RestaurantController {

	@Autowired
	private RestaurantService restaurantService;

	@RequestMapping(value="/restaurant/{id}", method = RequestMethod.GET )
	public ResponseEntity<Restaurant> getRestaurantById(@PathVariable("id") Integer id) {
		Restaurant restaurant = restaurantService.getRestaurantById(id);
		return new ResponseEntity<Restaurant>(restaurant, HttpStatus.OK);
	}

	@RequestMapping(value= "/restaurant", method = RequestMethod.GET)
	public ResponseEntity<List<Restaurant>> getAllRestaurants() {
		List<Restaurant> restaurants = restaurantService.getAllRestaurants();
		return new ResponseEntity<List<Restaurant>>(restaurants, HttpStatus.OK);
	}

	@RequestMapping(value= "/restaurant", method = RequestMethod.POST)
	public ResponseEntity<Void> restaurantMeetup(@ModelAttribute Restaurant restaurant, UriComponentsBuilder builder) {
        boolean flag = restaurantService.addRestaurant(restaurant);
        if (flag == false) {
        	return new ResponseEntity<Void>(HttpStatus.CONFLICT);
        }
        HttpHeaders headers = new HttpHeaders();
        headers.setLocation(builder.path("/restaurant/{id}").buildAndExpand(restaurant.getRestaurantId()).toUri());
        return new ResponseEntity<Void>(headers, HttpStatus.CREATED);
	}
	
	@RequestMapping(value="/restaurant/{id}", method = RequestMethod.PUT )
	public ResponseEntity<Restaurant> updateRestaurant(@RequestBody Restaurant restaurant) {
		restaurantService.updateRestaurant(restaurant);
		return new ResponseEntity<Restaurant>(restaurant, HttpStatus.OK);
	}
	
	@RequestMapping(value="/restaurant/{id}", method = RequestMethod.DELETE )
	public ResponseEntity<Void> Restaurant(@PathVariable("id") Integer restaurantId) {
		restaurantService.deleteRestaurant(restaurantId);
		return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
	}	
}