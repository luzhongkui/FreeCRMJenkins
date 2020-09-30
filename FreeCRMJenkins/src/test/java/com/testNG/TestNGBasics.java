package com.testNG;

import org.testng.annotations.AfterClass;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.AfterSuite;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.BeforeSuite;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

public class TestNGBasics {
	//Pre-conditions annotations  -- starting with @Before
	@BeforeSuite //1
	public void setUp() {
		System.out.println("Setup system property for chrome");
	}
	
	@BeforeTest //2
	public void launchBrower() {
		System.out.println("Launch Chrome Browser");
	}
	@BeforeClass //3	
	public void login() {
		System.out.println("login to app");
	}

	@BeforeMethod //4
	public void enterURL() {
		System.out.println("enter URL");
	}
	
	//Testcases - starting with @Test
	@Test //5
	public void googleTitleTest() {
		System.out.println("Launch Chrome Browser");
	}
	@AfterMethod //6
	public void logout() {
		System.out.println("Logout from app");
	}
	@AfterTest //7
	public void deleteAllCookies() {
		System.out.println("delete all Cookies");
	}
	
	@AfterClass //8
	public void closeBrowser() {
		System.out.println("close Browser");
	}
	
	
	@AfterSuite //9
	public void generateTestReport() {
		System.out.println("generate Test Report");
	}
	
	
}
