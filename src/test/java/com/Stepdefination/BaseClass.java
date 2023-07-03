package com.Stepdefination;

import org.openqa.selenium.WebElement;

import com.Cucumber.CommonFunction.CommonAction;
import com.Cucumber.POM.fblocators;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class BaseClass extends CommonAction {
	CommonAction co = new CommonAction();
	fblocators loc = new fblocators();
	@Given("launch the url {string}")
	public void launch_the_url(String string) {
		//co.browserlaunch(string);
	    
	}

	@Given("User clicks on create account")
	public void user_clicks_on_create_account() {
	  WebElement e = loc.getUserclick();
	  co.clicked(e);
	
	}

	@Given("user enters the firstname with one dim map {string}")
	public void user_enters_the_firstname_with_one_dim_map(String string) {
		WebElement fname = loc.getFname();
	 co.sendkeys(fname, string);  
	}
	
	

	@Given("user enters the surname with one dim map {string}")
	public void user_enters_the_surname_with_one_dim_map(String string) {
	   
		WebElement lname = loc.getLname();
		co.sendkeys(lname, string);
	}

	@When("user send email {string}")
	public void user_send_email(String string) throws InterruptedException {
		
		WebElement regemail = loc.getRegemail();
		co.sendkeys(regemail, string);
	    Thread.sleep(2000);
		WebElement confirmemail = loc.getConfirmemail();
		co.sendkeys(confirmemail, string);
	    
	}

	@When("user send password {string}")
	public void user_send_password(String string) {
		WebElement pass = loc.getPass();
		co.sendkeys(pass, string);
	   
	    
	}

	@And("user send dropdown")
	public void user_send_dropdown() {
		WebElement day = loc.getDay();
		day.sendKeys("25");
		WebElement mon = loc.getMonth();
		mon.sendKeys("march");
		
		WebElement year = loc.getDay();
		year.sendKeys("1999");
		
	   
	}

	@When("user select gender")
	public void user_select_gender() {
		WebElement gen =loc.getGender();
		co.clicked(gen);
	   
	}

	@Then("user click sign up")
	public void user_click_sign_up() {
	   WebElement signup = loc.getSignup();
	   co.clicked(signup);
	
	}



}
