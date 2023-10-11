package com.micros.trains.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.micros.trains.document.Train;
import com.micros.trains.repo.TrainRepo;
import com.micros.trains.service.TrainService;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/trainSearch")
public class trainControl {

	@Autowired
	private TrainService tservice;
	
	@Autowired
	private TrainRepo trainRepo;

	@PostMapping("/saveTrain")
	public Train saveTrain(@RequestBody Train train) {
		Train train1 = tservice.saveTrain(train);
		return train1;
	}
	
	@GetMapping("/getById/{id}")
	public Train gettrain(@PathVariable("id") int id)
	{
		return tservice.findbytrainId(id).get();
	}

	@GetMapping("/getTrainByStations/{from}/{to}")
	public List<Train> getTrains(@PathVariable("from") String from, @PathVariable("to") String to) {
		try {
			List<Train> list = tservice.trainsBetweenStations(from, to);
			return list;
		} catch (NullPointerException Ex) {
			System.out.println(Ex.getMessage());
		}
		return null;
	}
	
	@GetMapping("/findByTrainName/{name}")
	public List<Train> getName(@PathVariable("name") String name)
	{
		try {
			List<Train> list = tservice.findTrainByName(name);
			return list;
		} catch (NullPointerException Ex)
		{
			System.out.println(Ex.getMessage());
		}
		return null;
	}
	
	@PutMapping("updateById/{id}")
	public Train updateTrain(@PathVariable("id") int id, @RequestBody Train train0)
	{
		Train oldTr = tservice.findbytrainId(id).get();
		oldTr.setFrom_station(train0.getFrom_station());
		oldTr.setTo_station(train0.getTo_station());
		oldTr.setTotal_Seat_ac1(train0.getTotal_Seat_ac1());
		oldTr.setTotal_Seat_ac2(train0.getTotal_Seat_ac2());
		oldTr.setTotal_Seat_ac3(train0.getTotal_Seat_ac3());
		oldTr.setPrice_sleeper(train0.getPrice_sleeper());
		oldTr.setPrice_ac3(train0.getPrice_ac3());
		oldTr.setPrice_ac2(train0.getPrice_ac2());
		oldTr.setPrice_ac1(train0.getPrice_ac1());
		oldTr.setTotal_Seat_sleeper(train0.getTotal_Seat_sleeper());
		oldTr.setTrain_name(train0.getTrain_name());
		tservice.saveTrain(oldTr);
		return oldTr;
	}
	
	@DeleteMapping("/delete/{id}")
	public String deletebyid(@PathVariable("id") int id)
	{
		String srt = tservice.deleteTrainbyId(id);
		return srt;
	}
     
	@GetMapping("/ViewAllTrain")
	public ResponseEntity<List<Train>> viewAllTrains(){
		List<Train> trainList = trainRepo.findAll();
		ResponseEntity<List<Train>> response = new ResponseEntity<>(trainList,  HttpStatus.OK);
		return response;
		
	}
	
}
