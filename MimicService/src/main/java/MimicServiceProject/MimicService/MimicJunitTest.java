package MimicServiceProject.MimicService;

import static org.junit.Assert.assertTrue;

import org.junit.Test;


public class MimicJunitTest {

	public void testLearn() {
		MimicSelenium mimic = new MimicSelenium();
		mimic.startDriver();
		mimic.goToPage("http://localhost:8080/Number");
		mimic.learn("One");
		mimic.goToPage("http://localhost:8080/Number");
		assertTrue(mimic.checkResponse("One"));
		mimic.closeBrowser();
	}
	

	public void testUnlearn() {
		MimicSelenium mimic = new MimicSelenium();
		mimic.unlearn();
		mimic.goToPage("http://localhost:8080/Number");
		assertTrue(mimic.checkUnlearn("Paste or type"));
		mimic.closeBrowser();
	}

	
	public void testMultipleReqResponse() {
		MimicSelenium mimic = new MimicSelenium();
		mimic.goToPage("http://localhost:8080/Banana");
		mimic.learn("Skids");
		mimic.goToPage("http://localhost:8080/Laurel");
		mimic.learn("Hardy");
		mimic.goToPage("http://localhost:8080/Ful");
		mimic.learn("Bil");
		mimic.goToPage("http://localhost:8080/Laurel");
		assertTrue(mimic.checkResponse("Hardy"));
		mimic.closeBrowser();
	}

	public void testMultipleResponses() {
		MimicSelenium mimic = new MimicSelenium();
		mimic.goToPage("http://localhost:8080/Number");
		mimic.learn("One");
		mimic.goToPage("http://localhost:8080/LearnNextResponse?text=Two");
		mimic.goToPage("http://localhost:8080/Number");
		mimic.goToPage("http://localhost:8080/LearnNextResponse?text=Three");
		mimic.goToPage("http://localhost:8080/Number");
		mimic.goToPage("http://localhost:8080/Number");
		assertTrue(mimic.checkResponse("Three"));
		mimic.closeBrowser();
	}

	@Test
	public void testOrder1() { testLearn(); testUnlearn(); testMultipleReqResponse(); testMultipleResponses();}
}

