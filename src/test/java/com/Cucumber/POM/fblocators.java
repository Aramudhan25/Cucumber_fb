package com.Cucumber.POM;

import java.sql.Driver;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.Cucumber.CommonFunction.CommonAction;

public class fblocators extends CommonAction{
	
	public fblocators() {
		PageFactory.initElements(driver, this);
	}
		@FindBy(xpath ="//a[text()='Create new account']")
		private WebElement userclick;
		@FindBy(xpath="//input[@name='firstname']")
		private WebElement fname;
		@FindBy(xpath="//input[@name='lastname']")
		private WebElement lname;
		@FindBy(xpath="//input[@name='reg_email__']")
		private WebElement regemail;
		@FindBy(xpath="//input[@name='reg_email_confirmation__']")
		private WebElement confirmemail;
		@FindBy(xpath="//input[@name='reg_passwd__']")
		private WebElement pass;
		@FindBy(xpath="//select[@id='day']")
		private WebElement day;
		@FindBy(xpath="//select[@id='month']")
		private WebElement month;
		@FindBy(xpath="//select[@id='year']")
		private WebElement year;
		@FindBy(xpath="(//input[@name='sex'])[2]")
		private WebElement gender;
		@FindBy(xpath="//button[text()='Sign Up']")
		private WebElement signup;
		public WebElement getUserclick() {
			return userclick;
		}
		public WebElement getFname() {
			return fname;
		}
		public WebElement getLname() {
			return lname;
		}
		public WebElement getRegemail() {
			return regemail;
		}
		public WebElement getConfirmemail() {
			return confirmemail;
		}
		public WebElement getPass() {
			return pass;
		}
		public WebElement getDay() {
			return day;
		}
		public WebElement getMonth() {
			return month;
		}
		public WebElement getYear() {
			return year;
		}
		public WebElement getGender() {
			return gender;
		}
		public WebElement getSignup() {
			return signup;
		}
		
		
	

}
