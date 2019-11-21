package com.ivystudents;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

/**
 *
 *
 */
@SpringBootApplication// wraps @EnableAutoConfiguration, @ComponentScan, @Configration.
public class IvyStudentsApplication 
		extends SpringBootServletInitializer
{
	
	@Override
	protected SpringApplicationBuilder configure(
			SpringApplicationBuilder application) {
		return application.sources( IvyStudentsApplication.class );
	}
	
	/*
	 * Embedded server mode, need main method to start it. 
	 * External server mode, pack project into war file, main method is not required.
	 */
    public static void main( String[] args )
    {
        SpringApplication.run(IvyStudentsApplication.class, args);
    }
}
