/**
 * 
 */
package com.ivystudents.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * @author vipul
 *
 */
@Configuration
public class ResourcesConfig implements WebMvcConfigurer{

	
	public void addResourceHandlers(ResourceHandlerRegistry registry) {
		registry.addResourceHandler("/resources/static/**")
				.addResourceLocations("classpath:/resources/","classpath:/resources/static/","/static/","/resources/static","classpath:/static/");
	}
}
