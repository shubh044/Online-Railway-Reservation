package com.rrs.TrainBookingservice;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.mock;

import java.util.List;


import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import com.rrs.TrainBookingservice.controllers.Bookingcontroller;
import com.rrs.TrainBookingservice.models.Booking;
import com.rrs.TrainBookingservice.repository.BookingDetailsRepo;
import com.rrs.TrainBookingservice.repository.BookingInfoRepo;
import com.rrs.TrainBookingservice.repository.BookingRepo;

@SpringBootTest
class TrainBookingServiceApplicationTests {

	 BookingRepo bookingRepo = mock(BookingRepo.class);
     BookingDetailsRepo bookingDetailsRepo = mock(BookingDetailsRepo.class);
     BookingInfoRepo bookingInfoRepo = mock(BookingInfoRepo.class);
     Bookingcontroller bookingController = new Bookingcontroller();
	
	@Test
	void contextLoads() {
	}
	
	
	@Test
	public void testSaveBooking() {
	    Booking booking = new Booking();
	    // Set up your booking object here
	
	    String result = bookingController.saveBooking(booking);
	
	    // Verify that the booking is saved in the database
	    List<Booking> savedBookings = bookingRepo.findAll();
	    assertEquals(1, savedBookings.size());
	    assertEquals("Added booking details", result);
	}
	
	
}

	