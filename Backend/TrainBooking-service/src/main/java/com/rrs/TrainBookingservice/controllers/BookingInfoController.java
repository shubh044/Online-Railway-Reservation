package com.rrs.TrainBookingservice.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rrs.TrainBookingservice.models.BookingInfo;
import com.rrs.TrainBookingservice.repository.BookingInfoRepo;



@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("Booking-info")

public class BookingInfoController {
	
	@Autowired
	private BookingInfoRepo repository;
	
	
	
	@PostMapping("/addBooking-info/")
	public String saveBooking(@RequestBody BookingInfo book) {
	   
		repository.save(book);
		return "Added booking info";
	}


}
