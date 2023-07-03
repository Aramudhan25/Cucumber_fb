$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/aramudhan/eclipse-workspace/Cucumber_fb/src/test/resources/fbcreate.feature");
formatter.feature({
  "name": "Facebook",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Create new account",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User clicks on create account",
  "keyword": "Given "
});
formatter.step({
  "name": "user enters the firstname with one dim map \"\u003cfirstname\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "user enters the surname with one dim map \"\u003csname\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "user send email \"\u003cemail\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user send password \"\u003cpass\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user send dropdown",
  "keyword": "And "
});
formatter.step({
  "name": "user select gender",
  "keyword": "When "
});
formatter.step({
  "name": "user click sign up",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "firstname",
        "sname",
        "email",
        "pass"
      ]
    },
    {
      "cells": [
        "amudhan",
        "m",
        "amudhan@gmail.com",
        "safhsasa67"
      ]
    },
    {
      "cells": [
        "aramudhan",
        "a",
        "aramudhan@gmail.com",
        "amudhan123"
      ]
    }
  ]
});
formatter.background({
  "name": "common function",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "launch the url \"https://www.facebook.com\"",
  "keyword": "Given "
});
formatter.match({
  "location": "BaseClass.launch_the_url(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Create new account",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User clicks on create account",
  "keyword": "Given "
});
formatter.match({
  "location": "BaseClass.user_clicks_on_create_account()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the firstname with one dim map \"amudhan\"",
  "keyword": "Given "
});
formatter.match({
  "location": "BaseClass.user_enters_the_firstname_with_one_dim_map(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the surname with one dim map \"m\"",
  "keyword": "Given "
});
formatter.match({
  "location": "BaseClass.user_enters_the_surname_with_one_dim_map(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user send email \"amudhan@gmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "BaseClass.user_send_email(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user send password \"safhsasa67\"",
  "keyword": "When "
});
formatter.match({
  "location": "BaseClass.user_send_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user send dropdown",
  "keyword": "And "
});
formatter.match({
  "location": "BaseClass.user_send_dropdown()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select gender",
  "keyword": "When "
});
formatter.match({
  "location": "BaseClass.user_select_gender()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click sign up",
  "keyword": "Then "
});
formatter.match({
  "location": "BaseClass.user_click_sign_up()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "common function",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "launch the url \"https://www.facebook.com\"",
  "keyword": "Given "
});
formatter.match({
  "location": "BaseClass.launch_the_url(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Create new account",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User clicks on create account",
  "keyword": "Given "
});
formatter.match({
  "location": "BaseClass.user_clicks_on_create_account()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the firstname with one dim map \"aramudhan\"",
  "keyword": "Given "
});
formatter.match({
  "location": "BaseClass.user_enters_the_firstname_with_one_dim_map(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the surname with one dim map \"a\"",
  "keyword": "Given "
});
formatter.match({
  "location": "BaseClass.user_enters_the_surname_with_one_dim_map(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user send email \"aramudhan@gmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "BaseClass.user_send_email(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user send password \"amudhan123\"",
  "keyword": "When "
});
formatter.match({
  "location": "BaseClass.user_send_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user send dropdown",
  "keyword": "And "
});
formatter.match({
  "location": "BaseClass.user_send_dropdown()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select gender",
  "keyword": "When "
});
formatter.match({
  "location": "BaseClass.user_select_gender()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click sign up",
  "keyword": "Then "
});
formatter.match({
  "location": "BaseClass.user_click_sign_up()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});