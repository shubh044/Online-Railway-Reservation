package com.rrs.TrainBookingservice.models;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "Booking")
public class Booking {
	@Id
	private String bookingId;
	private List<BookingDetails>passengerList;
	private  BookingInfo bookingDetails;
	private User user;
	private String price;
	private String userId;
	private String pnr;
    private String status;


	public Booking() {
		
	}
	public Booking(String bookingId, List<BookingDetails> passengerList, BookingInfo bookingDetails, User user,
			String price, String userId, String pnr, String status) {
		super();
		this.passengerList = passengerList;
		this.bookingDetails = bookingDetails;
		this.user = user;
		this.price = price;
		this.setUserId(userId);
		this.setPnr(pnr);
		this.status = status;
	}
	
	public String getBookingId() {
		return bookingId;
	}


	public void setBookingId(String bookingId) {
		this.bookingId = bookingId;
	}


	public List<BookingDetails> getPassengerList() {
		return passengerList;
	}


	public void setPassengerList(List<BookingDetails> passengerList) {
		this.passengerList = passengerList;
	}


	public BookingInfo getBookingDetails() {
		return bookingDetails;
	}


	public void setBookingDetails(BookingInfo bookingDetails) {
		this.bookingDetails = bookingDetails;
	}


	public User getUser() {
		return user;
	}


	public void setUser(User user) {
		this.user = user;
	}


	public String getPrice() {
		return price;
	}


	public void setPrice(String price) {
		this.price = price;
	}


	public String getStatus() {
		return status;
	}


	public void setStatus(String status) {
		this.status = status;
	}





	public String getUserId() {
		return userId;
	}





	public void setUserId(String userId) {
		this.userId = userId;
	}





	public String getPnr() {
		return pnr;
	}





	public void setPnr(String pnr) {
		this.pnr = pnr;
	}


	

	
}