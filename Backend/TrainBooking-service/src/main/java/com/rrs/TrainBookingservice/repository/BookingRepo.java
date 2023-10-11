package com.rrs.TrainBookingservice.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

import com.rrs.TrainBookingservice.models.Booking;
@EnableMongoRepositories
public interface BookingRepo extends MongoRepository<Booking, String> {
	@Query("{userId: ?0}")
	List<Booking> findByBooking(String userId);
	
	@Query("{pnr: ?0}")
	Booking findPnr(String pnr);
}
