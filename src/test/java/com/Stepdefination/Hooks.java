package com.Stepdefination;

import com.Cucumber.CommonFunction.CommonAction;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks extends CommonAction {

	CommonAction co = new CommonAction();
	
	@Before
	public void blaunch() {
		co.browserlaunch("https://www.facebook.com");
	}
	
	@After
	public void bclose() {
		System.out.println("close");
	}
}
