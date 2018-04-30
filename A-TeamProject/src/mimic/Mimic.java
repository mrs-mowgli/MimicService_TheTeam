package mimic;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class Mimic {

	private WebDriver webDriver;
	
	public Mimic() {
		System.setProperty("webdriver.chrome.driver", "bin/chromedriver.exe");
		webDriver=new ChromeDriver();
		webDriver.manage().timeouts().implicitlyWait(20,TimeUnit.SECONDS);
	}
	
	public void goToPage(String url){
		webDriver.get(url);
		delay(3000);
	}
	
	public void learn(String text) {
		WebElement element=webDriver.findElement(By.name("text"));
		element.clear();
		element.click();
		element.sendKeys(text);	
		WebElement button=webDriver.findElement(By.cssSelector(("#learn"))); 
		button.click();
		delay(3000);
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
	
	public void closeBrowser() {
		webDriver.close();
		delay(3000);
	}
}
