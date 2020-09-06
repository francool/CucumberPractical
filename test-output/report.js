$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./src/test/java/features/setcolor.feature");
formatter.feature({
  "line": 1,
  "name": "As a user I want to click on set skyBlue background button",
  "description": "so that the background color change to skyBlue;",
  "id": "as-a-user-i-want-to-click-on-set-skyblue-background-button",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Valid user should be able to set skyBlue backgroung",
  "description": "",
  "id": "as-a-user-i-want-to-click-on-set-skyblue-background-button;valid-user-should-be-able-to-set-skyblue-backgroung",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am on techfios.com/test website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on Set SkyBlue Background button;",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the background color will change to sky blue;",
  "keyword": "Then "
});
formatter.match({
  "location": "SetColorSteps.i_am_on_techfios_com_test_website()"
});
formatter.result({
  "duration": 6722620400,
  "status": "passed"
});
formatter.match({
  "location": "SetColorSteps.i_click_on_Set_SkyBlue_Background_button()"
});
formatter.result({
  "duration": 77450700,
  "status": "passed"
});
formatter.match({
  "location": "SetColorSteps.the_background_color_will_change_to_sky_blue()"
});
formatter.result({
  "duration": 35885800,
  "status": "passed"
});
formatter.after({
  "duration": 614062600,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Valid user should be able to set white backgroung",
  "description": "",
  "id": "as-a-user-i-want-to-click-on-set-skyblue-background-button;valid-user-should-be-able-to-set-white-backgroung",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "I am on techfios.com/test website",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click on white Background button;",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "the background color will change to white;",
  "keyword": "Then "
});
formatter.match({
  "location": "SetColorSteps.i_am_on_techfios_com_test_website()"
});
formatter.result({
  "duration": 5692791700,
  "status": "passed"
});
formatter.match({
  "location": "SetColorSteps.i_click_on_white_Background_button()"
});
formatter.result({
  "duration": 95849300,
  "status": "passed"
});
formatter.match({
  "location": "SetColorSteps.the_background_color_will_change_to_white()"
});
formatter.result({
  "duration": 29406700,
  "status": "passed"
});
formatter.after({
  "duration": 624657300,
  "status": "passed"
});
});