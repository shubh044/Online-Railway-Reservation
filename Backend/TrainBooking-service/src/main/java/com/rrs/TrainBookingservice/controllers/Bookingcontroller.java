package com.rrs.TrainBookingservice.controllers;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.rrs.TrainBookingservice.models.Booking;
import com.rrs.TrainBookingservice.models.BookingDetails;
import com.rrs.TrainBookingservice.repository.BookingDetailsRepo;
import com.rrs.TrainBookingservice.repository.BookingInfoRepo;
import com.rrs.TrainBookingservice.repository.BookingRepo;



@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("Booking")
public class Bookingcontroller {
	@Autowired
	private BookingRepo repository;
	
	@Autowired
	private BookingDetailsRepo repository1;
	
	@Autowired
	private BookingInfoRepo repository2;
	
	
	@PostMapping("/addBooking/")
	public String saveBooking(@RequestBody Booking book) {
		
		
	    repository2.save(book.getBookingDetails());
	    
	    for(BookingDetails i:book.getPassengerList()) {
	      repository1.save(i);
	    }
		repository.save(book);
		return "Added booking details";
	}
	
	@GetMapping("/allBookingsWithOfUsers/{id}")
	public List<Booking> getByUserId(@PathVariable("id") String id) {

		
		 List<Booking> book = repository.findByBooking(id);
		 return book ;
	}
	
	@GetMapping("/showTicket/{pnr}")
	public Booking getBookedTicket(@PathVariable("pnr") String pnr) {
		Booking book =repository.findPnr(pnr);
		return book;
	}
		
	

}
