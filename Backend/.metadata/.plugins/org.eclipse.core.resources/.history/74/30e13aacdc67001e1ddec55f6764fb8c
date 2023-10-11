package com.micros.trains;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.junit.jupiter.api.Assertions.assertFalse;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.micros.trains.document.Train;
import com.micros.trains.service.TrainService;

@SpringBootTest
class TrainServiceMdb1ApplicationTests {

	@Autowired
	private TrainService tservice;

	@Test
	void contextLoads() {
		Optional<Train> train = tservice.findbytrainId(26839);
		System.out.println(train.get().getTrain_id() + " " + train.get().getTrain_name());
		assertEquals(train.get().getTrain_id(), 26839);
		System.out.println("Train 26839 present, Test Case 1 passed");
	}

	@Test
	void checkStations() {
		List<Train> lst = tservice.trainsBetweenStations("station1", "station2");
		for (Train train : lst) {
			assertTrue(train.getFrom_station().equals("station1") && train.getTo_station().equals("station2"));
		}
		System.out.println("Test Case 2 - station1 to station2 Passed");
	}

	@Test
	void checkNotThere() {
		Optional<Train> train = tservice.findbytrainId(12345);
		//System.out.println(train.isPresent());
		assertTrue(train.isPresent());
		System.out.println("Test Case present check passed");

	}
	
	@Test
	void checkbyTrainName() {
		List<Train> trains = tservice.findTrainByName("Express1");
		//System.out.println(trains);
		for(Train train:trains)
		{
			assertTrue(train.getTrain_name().contains("Express1"));
			//System.out.println(train);
		}
		System.out.println("Test Case passed - Express1 present");
	}
	
	

}
