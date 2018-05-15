package selenium;

import static org.junit.Assert.*;

import org.junit.Test;

public class MimicTest_5 {

	@Test
	public void testMultipleUnlearn() {
		Mimic mimic = new Mimic();
		mimic.goToPage("http://localhost:8080/unlearnAllResponses");
		mimic.goToPage("http://localhost:8080/Number");
		mimic.learn("1");
		mimic.goToPage("http://localhost:8080/addResponse");
		mimic.learn("2");
		mimic.goToPage("http://localhost:8080/addResponse");
		mimic.learn("3");
		mimic.goToPage("http://localhost:8080/Number");
		mimic.goToPage("http://localhost:8080/Number");
		mimic.goToPage("http://localhost:8080/Number");
		mimic.unlearn();
		mimic.unlearn();
		assertTrue(mimic.checkUnlearn("1")); // blir rött, får "2"
		mimic.closeBrowser();
	}

	@Test
	public void testRelearnNoButton() {
		Mimic mimic = new Mimic();
		mimic.goToPage("http://localhost:8080/unlearnAllResponses");
		mimic.goToPage("http://localhost:8080/Number");
		mimic.learn("1");
		mimic.goToPage("http://localhost:8080/relearnResponse");
		mimic.learn("2");
		mimic.goToPage("http://localhost:8080/relearnResponse");
		mimic.learn("3");
		mimic.goToPage("http://localhost:8080/relearnResponse");
		mimic.goToPage("http://localhost:8080/Number");
		
		assertTrue(mimic.checkUnlearn("3")); // blir rött, får tom formulär
		mimic.closeBrowser();
	}
	
}
