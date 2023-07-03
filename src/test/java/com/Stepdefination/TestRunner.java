package com.Stepdefination;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="C:\\Users\\aramudhan\\eclipse-workspace\\Cucumber_fb\\src\\test\\resources\\fbcreate.feature",glue="com.Stepdefination",dryRun=false,
plugin={"html:target/one7.html","json:target/report.json"},

monochrome =false)
public class TestRunner {

}
