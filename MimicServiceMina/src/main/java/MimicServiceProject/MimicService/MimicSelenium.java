package MimicServiceProject.MimicService;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class MimicSelenium {

	private WebDriver webDriver;
	private final static String host="http://localhost:8080/"; 
	private HttpServiceCaller service=new HttpServiceCaller();
	
	public MimicSelenium() {
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
		element.click();
		element.clear();
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
	public boolean checkResponse_message(String expectedResponse) {	
		WebElement element = webDriver.findElement(By.tagName("body"));
		// WebElement element = webDriver.findElement(By.xpath("body:nth-child(3)"));
		String text=element.getText();
		return text.contains(expectedResponse);
	}
	
	public void relearnResponse(String text) {
		webDriver.get(host+"relearnResponse");
		delay(3000);
		WebElement element=webDriver.findElement(By.name("text"));
		element.click();
		element.clear();
		element.sendKeys(text);	
		WebElement button=webDriver.findElement(By.cssSelector(("#learn"))); 
		button.click();
		delay(3000);
	}
	
	public void unlearnResponse() {
		webDriver.get(host+"unlearnResponse");
		delay(3000);
		//closeBrowser();
	}
		
	public boolean checkUnlearn(String expectedUnlearnedResponse) {	
		WebElement element=webDriver.findElement(By.cssSelector("body"));
		String text=element.getText();
		return text.contains(expectedUnlearnedResponse);
	}
	
	public void resetState(){
		String requestToSend=host+"resetState";
		service.executeGetRequest(requestToSend);
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
	public void quitSelenium() {
		webDriver.quit();
	}
	// add testcase for a bug with addREsponses doesnt save in brain
	public String viewRequests() {
		WebElement element;
		goToPage(host+"viewRequests");
		element = webDriver.findElement(By.tagName("body"));
		return element.getText();
				
	}
	public void addResponse() {
		goToPage(host+"addResponse");
	}
	public void unlearnAllRequests() {
		goToPage(host+"unlearnAllResponses");
	}
	public void clickById(String id) {
		WebElement element;
		element = webDriver.findElement(By.id(id));
		element.click();
		delay(3000);
	}
}
