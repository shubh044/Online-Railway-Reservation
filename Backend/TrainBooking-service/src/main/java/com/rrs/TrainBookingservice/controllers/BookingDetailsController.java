package com.rrs.TrainBookingservice.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rrs.TrainBookingservice.models.BookingDetails;
import com.rrs.TrainBookingservice.repository.BookingDetailsRepo;



@CrossOrigin(origins = "*", maxAge = 3600)
@RestController

@RequestMapping("Booking-details")
public class BookingDetailsController {
	@Autowired
	private BookingDetailsRepo repository;
	
	
	@PostMapping("/addBooking-details/")
	public String saveBooking(@RequestBody BookingDetails book) {
	   
		repository.save(book);
		return "Added booking details";
	}
	
	
	
	
	
}