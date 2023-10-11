package com.rrs.TrainBookingservice.repotests;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.mock;

import java.util.List;


import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.rrs.TrainBookingservice.controllers.Bookingcontroller;
import com.rrs.TrainBookingservice.models.Booking;
import com.rrs.TrainBookingservice.repository.BookingDetailsRepo;
import com.rrs.TrainBookingservice.repository.BookingInfoRepo;
import com.rrs.TrainBookingservice.repository.BookingRepo;

@SpringBootTest
class TrainBookingServiceRepoTests {

	@Autowired
	 private BookingRepo bookingRepo;
     BookingDetailsRepo bookingDetailsRepo = mock(BookingDetailsRepo.class);
     BookingInfoRepo bookingInfoRepo = mock(BookingInfoRepo.class);
     Bookingcontroller bookingController = new Bookingcontroller();
	
	@Test
	void contextLoads() {
	}
	
	
	@Test
    void getBookingByUserIdTest() {
        List<Booking> booking = bookingRepo.findByBooking("user");
        assertNotNull(booking);
        System.out.println("Test Case Passed");
    }
   
    @Test
    void getBookingByPnrTest() {
        Booking ticket = bookingRepo.findPnr("1696983367834");
        assertNotNull(ticket);
        System.out.println("Test Case Passed");
    }
	
	
}

	
