$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM2 Login Feature",
  "description": "",
  "id": "free-crm2-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 13,
  "name": "Free CRM3 Login Test Scenario",
  "description": "",
  "id": "free-crm2-login-feature;free-crm3-login-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "on login page \"\u003cborswser\u003e\" and \"\u003cdriver\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "title of the page",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "home page validate",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "logout home page",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "free-crm2-login-feature;free-crm3-login-test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "borswser",
        "driver"
      ],
      "line": 21,
      "id": "free-crm2-login-feature;free-crm3-login-test-scenario;;1"
    },
    {
      "cells": [
        "will1",
        "will",
        "webdriver.chrome.driver",
        "C:\\Users\\luzhongk\\Selenium\\WebDriver\\chromedriver.exe"
      ],
      "line": 22,
      "id": "free-crm2-login-feature;free-crm3-login-test-scenario;;2"
    },
    {
      "cells": [
        "will1",
        "will",
        "webdriver.gecko.driver",
        "C:\\Users\\luzhongk\\Selenium\\WebDriver\\geckodriver.exe"
      ],
      "line": 23,
      "id": "free-crm2-login-feature;free-crm3-login-test-scenario;;3"
    },
    {
      "cells": [
        "will",
        "will",
        "webdriver.edge.driver",
        "C:\\Users\\luzhongk\\Selenium\\WebDriver\\msedgedriver.exe"
      ],
      "line": 24,
      "id": "free-crm2-login-feature;free-crm3-login-test-scenario;;4"
    },
    {
      "cells": [
        "will",
        "will",
        "webdriver.ie.driver",
        "C:\\Users\\luzhongk\\Selenium\\WebDriver\\IEDriverServer64.exe"
      ],
      "line": 25,
      "id": "free-crm2-login-feature;free-crm3-login-test-scenario;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 22,
  "name": "Free CRM3 Login Test Scenario",
  "description": "",
  "id": "free-crm2-login-feature;free-crm3-login-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "on login page \"webdriver.chrome.driver\" and \"C:\\Users\\luzhongk\\Selenium\\WebDriver\\chromedriver.exe\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "title of the page",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "enter \"will1\" and \"will\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "home page validate",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "logout home page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "webdriver.chrome.driver",
      "offset": 15
    },
    {
      "val": "C:\\Users\\luzhongk\\Selenium\\WebDriver\\chromedriver.exe",
      "offset": 45
    }
  ],
  "location": "LoginSteps.on_login_page(String,String)"
});
formatter.result({
  "duration": 10485216900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.title_of_the_page()"
});
formatter.result({
  "duration": 13944300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "will1",
      "offset": 7
    },
    {
      "val": "will",
      "offset": 19
    }
  ],
  "location": "LoginSteps.enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 3678831600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.home_page_validate()"
});
formatter.result({
  "duration": 100076400,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat LoginSteps_Outline.LoginSteps.home_page_validate(LoginSteps.java:56)\r\n\tat ✽.Then home page validate(login.feature:17)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginSteps.logout_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 23,
  "name": "Free CRM3 Login Test Scenario",
  "description": "",
  "id": "free-crm2-login-feature;free-crm3-login-test-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "on login page \"webdriver.gecko.driver\" and \"C:\\Users\\luzhongk\\Selenium\\WebDriver\\geckodriver.exe\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "title of the page",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "enter \"will1\" and \"will\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "home page validate",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "logout home page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "webdriver.gecko.driver",
      "offset": 15
    },
    {
      "val": "C:\\Users\\luzhongk\\Selenium\\WebDriver\\geckodriver.exe",
      "offset": 44
    }
  ],
  "location": "LoginSteps.on_login_page(String,String)"
});
formatter.result({
  "duration": 10872631900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.title_of_the_page()"
});
formatter.result({
  "duration": 24160300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "will1",
      "offset": 7
    },
    {
      "val": "will",
      "offset": 19
    }
  ],
  "location": "LoginSteps.enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 3932940700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.home_page_validate()"
});
formatter.result({
  "duration": 34066200,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat LoginSteps_Outline.LoginSteps.home_page_validate(LoginSteps.java:56)\r\n\tat ✽.Then home page validate(login.feature:17)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginSteps.logout_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 24,
  "name": "Free CRM3 Login Test Scenario",
  "description": "",
  "id": "free-crm2-login-feature;free-crm3-login-test-scenario;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "on login page \"webdriver.edge.driver\" and \"C:\\Users\\luzhongk\\Selenium\\WebDriver\\msedgedriver.exe\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "title of the page",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "enter \"will\" and \"will\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "home page validate",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "logout home page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "webdriver.edge.driver",
      "offset": 15
    },
    {
      "val": "C:\\Users\\luzhongk\\Selenium\\WebDriver\\msedgedriver.exe",
      "offset": 43
    }
  ],
  "location": "LoginSteps.on_login_page(String,String)"
});
formatter.result({
  "duration": 10779206700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.title_of_the_page()"
});
formatter.result({
  "duration": 117604700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "will",
      "offset": 7
    },
    {
      "val": "will",
      "offset": 18
    }
  ],
  "location": "LoginSteps.enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 4872960700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.home_page_validate()"
});
formatter.result({
  "duration": 25855900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.logout_home_page()"
});
formatter.result({
  "duration": 13151695200,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Free CRM3 Login Test Scenario",
  "description": "",
  "id": "free-crm2-login-feature;free-crm3-login-test-scenario;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "on login page \"webdriver.ie.driver\" and \"C:\\Users\\luzhongk\\Selenium\\WebDriver\\IEDriverServer64.exe\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "title of the page",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "enter \"will\" and \"will\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "home page validate",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "logout home page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "webdriver.ie.driver",
      "offset": 15
    },
    {
      "val": "C:\\Users\\luzhongk\\Selenium\\WebDriver\\IEDriverServer64.exe",
      "offset": 41
    }
  ],
  "location": "LoginSteps.on_login_page(String,String)"
});
formatter.result({
  "duration": 7598038800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.title_of_the_page()"
});
formatter.result({
  "duration": 25844100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "will",
      "offset": 7
    },
    {
      "val": "will",
      "offset": 18
    }
  ],
  "location": "LoginSteps.enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 50301071700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.home_page_validate()"
});
formatter.result({
  "duration": 222712400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.logout_home_page()"
});
formatter.result({
  "duration": 12932915700,
  "status": "passed"
});
});