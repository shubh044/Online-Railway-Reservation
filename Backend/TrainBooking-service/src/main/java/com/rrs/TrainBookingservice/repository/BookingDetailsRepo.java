package com.rrs.TrainBookingservice.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.rrs.TrainBookingservice.models.BookingDetails;

public interface BookingDetailsRepo extends MongoRepository<BookingDetails, String> {

}
