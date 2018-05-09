package MimicServiceProject.MimicService;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class MimicSelenium {

	private WebDriver webDriver;
	
	public MimicSelenium() {
		System.setProperty("webdriver.chrome.driver", "bin/chromedriver.exe");
	}
	public void startDriver() {
		webDriver=new ChromeDriver();
		webDriver.manage().timeouts().implicitlyWait(20,TimeUnit.SECONDS);
	}
	public void goToPage(String url){
		webDriver.get(url);
		delay(3000);
	}
	
	public void learn(String text) {
		giveResponse(text);
		clickLearnButton();
	}
	
	public boolean checkResponse(String expectedResponse) {	
		WebElement element=webDriver.findElement(By.cssSelector("pre"));
		String text=element.getText();
		return text.contains(expectedResponse);
	}
	
	public void unlearn() {
		//webDriver=new ChromeDriver();
		webDriver.manage().timeouts().implicitlyWait(20,TimeUnit.SECONDS);	
		webDriver.get("http://localhost:8080/unlearn");
		delay(3000);
		//closeBrowser();
	}
		
	public boolean checkUnlearn(String expectedUnlearnedResponse) {	
		WebElement element=webDriver.findElement(By.cssSelector("body"));
		String text=element.getText();
		return text.contains(expectedUnlearnedResponse);
	}
	
	public void delay (int milliseconds) {
		
		try {
			Thread.sleep(milliseconds);
		} catch (InterruptedException e) {
		}

	}
	public void giveResponse(String text) {
		WebElement element=webDriver.findElement(By.tagName("textarea"));
		element.clear();
		element.click();
		element.sendKeys(text);
	}
	public void clickLearnButton() {
		WebElement button=webDriver.findElement(By.id(("learn"))); 
		button.click();
		delay(3000);
	}
	
	public void closeBrowser() {
		webDriver.close();
		delay(3000);
	}
}
