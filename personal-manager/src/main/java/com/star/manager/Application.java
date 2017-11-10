package com.star.manager;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.RestController;


@RestController
@EnableAutoConfiguration
public class Application {
	private final static Logger logger = LoggerFactory.getLogger(Application.class);
	
	public static void main(String[] args) {
		logger.info("---Starting the application---");
		SpringApplication.run(Application.class,args);
		
	}

}
