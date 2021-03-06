package LoginSteps;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import Component.Component;

public class LoginSteps {
	WebDriver driver ;
	Component HomePage = new Component();
	@Given("on login page")
    public void on_login_page() throws InterruptedException {
          //Component obj1 = new Component();
		HomePage.broswerDriver = "C:\\Users\\luzhongk\\Selenium\\WebDriver\\IEDriverServer64.exe" ;
		HomePage.broswerName   = "webdriver.ie.driver" ;
    	  driver  = HomePage.openPageIE(HomePage.broswerName, HomePage.broswerDriver) ;
    	  driver.manage().window().maximize();
    }
	@When("title of the page")
	public void title_of_the_page() throws InterruptedException {
		String title = driver.getTitle();
		Assert.assertEquals("SuiteCRM Demo", title);		
	}
	@Then("enter username and password")
	public void enter_username_and_password() throws InterruptedException {
		WebElement username =  HomePage.username(driver);
		WebElement password =  HomePage.password(driver);
		WebElement submit   =  HomePage.submit(driver);
		username.sendKeys("will");
  	    password.sendKeys("will");
  	    Thread.sleep(3000);
  	    submit.click();
	}
	@Then("home page validate")
	public void home_page_validate() throws InterruptedException {
		Boolean HomePageExist ;
		
		try {
			driver.findElement(By.xpath("//ul[@class='nav nav-tabs nav-dashboard']"));
			HomePageExist = true;
		    }
		catch(NoSuchElementException e) {
			HomePageExist = false;}
		    Assert.assertTrue(HomePageExist);
	    }
	@Then("logout home page")
	public void logout_home_page() throws InterruptedException,Exception {
		HomePage.closepage(driver);
	}
	
 
		 
	}
 