package com.rrs.TrainBookingservice.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.rrs.TrainBookingservice.models.BookingInfo;

public interface BookingInfoRepo extends MongoRepository<BookingInfo, String> {

}
