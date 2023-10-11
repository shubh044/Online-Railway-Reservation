package com.micros.trains.document;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Train")
public class Train {

	
	@Id
	private int train_id;
	private int total_Seat_sleeper;
	private int total_Seat_ac3;
	private int total_Seat_ac2;
	private int total_Seat_ac1;
	private int price_sleeper;
	private int price_ac3;
	private int price_ac2;
	private int price_ac1;
	private String train_name;
	private String from_station;
	private String to_station;
	private List<String> runs_on;

	
	public Train(int train_id, int total_Seat_sleeper, int total_Seat_ac3, int total_Seat_ac2, int total_Seat_ac1,
			int price_sleeper, int price_ac3, int price_ac2, int price_ac1, String train_name, String from_station,
			String to_station, List<String> runs_on) {
		super();
		this.train_id = train_id;
		this.total_Seat_sleeper = total_Seat_sleeper;
		this.total_Seat_ac3 = total_Seat_ac3;
		this.total_Seat_ac2 = total_Seat_ac2;
		this.total_Seat_ac1 = total_Seat_ac1;
		this.price_sleeper = price_sleeper;
		this.price_ac3 = price_ac3;
		this.price_ac2 = price_ac2;
		this.price_ac1 = price_ac1;
		this.train_name = train_name;
		this.from_station = from_station;
		this.to_station = to_station;
		this.runs_on = runs_on;
	}

	public Train() {
	}

	public int getTrain_id() {
		return train_id;
	}

	public void setTrain_id(int train_id) {
		this.train_id = train_id;
	}

	public int getTotal_Seat_sleeper() {
		return total_Seat_sleeper;
	}

	public void setTotal_Seat_sleeper(int total_Seat_sleeper) {
		this.total_Seat_sleeper = total_Seat_sleeper;
	}

	public int getTotal_Seat_ac3() {
		return total_Seat_ac3;
	}

	public void setTotal_Seat_ac3(int total_Seat_ac3) {
		this.total_Seat_ac3 = total_Seat_ac3;
	}

	public int getTotal_Seat_ac2() {
		return total_Seat_ac2;
	}

	public void setTotal_Seat_ac2(int total_Seat_ac2) {
		this.total_Seat_ac2 = total_Seat_ac2;
	}

	public int getTotal_Seat_ac1() {
		return total_Seat_ac1;
	}

	public void setTotal_Seat_ac1(int total_Seat_ac1) {
		this.total_Seat_ac1 = total_Seat_ac1;
	}

	public String getTrain_name() {
		return train_name;
	}

	public void setTrain_name(String train_name) {
		this.train_name = train_name;
	}

	public String getFrom_station() {
		return from_station;
	}

	public void setFrom_station(String from_station) {
		this.from_station = from_station;
	}

	public String getTo_station() {
		return to_station;
	}

	public void setTo_station(String to_station) {
		this.to_station = to_station;
	}

	public List<String> getRuns_on() {
		return runs_on;
	}

	public void setRuns_on(List<String> runs_on) {
		this.runs_on = runs_on;
	}

	@Override
	public String toString() {
		return "Train [train_id=" + train_id + ", total_Seat_sleeper=" + total_Seat_sleeper + ", total_Seat_ac3="
				+ total_Seat_ac3 + ", total_Seat_ac2=" + total_Seat_ac2 + ", total_Seat_ac1=" + total_Seat_ac1
				+ ", price_sleeper=" + price_sleeper + ", price_ac3=" + price_ac3 + ", price_ac2=" + price_ac2
				+ ", price_ac1=" + price_ac1 + ", train_name=" + train_name + ", from_station=" + from_station
				+ ", to_station=" + to_station + ", runs_on=" + runs_on + "]";
	}

	public int getPrice_sleeper() {
		return price_sleeper;
	}

	public void setPrice_sleeper(int price_sleeper) {
		this.price_sleeper = price_sleeper;
	}

	public int getPrice_ac3() {
		return price_ac3;
	}

	public void setPrice_ac3(int price_ac3) {
		this.price_ac3 = price_ac3;
	}

	public int getPrice_ac2() {
		return price_ac2;
	}

	public void setPrice_ac2(int price_ac2) {
		this.price_ac2 = price_ac2;
	}

	public int getPrice_ac1() {
		return price_ac1;
	}

	public void setPrice_ac1(int price_ac1) {
		this.price_ac1 = price_ac1;
	}

	
}