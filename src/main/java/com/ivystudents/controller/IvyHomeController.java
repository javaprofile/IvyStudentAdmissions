/**
 * 
 */
package com.ivystudents.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @author vipul
 *
 */
@Controller
public class IvyHomeController {

	@RequestMapping("/welcome")
	   public String index() {
	      return "index";
	   }
}
