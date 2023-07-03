
Feature: Facebook
  
  
  Background: common function
   Given launch the url "https://www.facebook.com"
   
  
  
  Scenario Outline: Create new account
  Given User clicks on create account
 Given user enters the firstname with one dim map "<firstname>"
 Given user enters the surname with one dim map "<sname>"
 When user send email "<email>"
 When user send password "<pass>"
 And user send dropdown
 When user select gender
 Then user click sign up
 
      Examples:
 |firstname|sname|email|pass|
 |amudhan|m|amudhan@gmail.com|safhsasa67| 
 |aramudhan|a|aramudhan@gmail.com|amudhan123|
  
      