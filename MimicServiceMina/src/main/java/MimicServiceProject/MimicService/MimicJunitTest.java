package MimicServiceProject.MimicService;

import static org.junit.Assert.*;

import org.junit.Test;

public class MimicJunitTest {
	MimicSelenium mimic = new MimicSelenium();
	
	//@Test
	public void testRequestWithoutResponse() {
		mimic.goToPage("http://localhost:8080/request_without_response");
		mimic.learn("");
		mimic.goToPage("http://localhost:8080/request_without_response");
		assertTrue(mimic.checkResponse("")); //Det ska bli grönt
		mimic.closeBrowser();
	}


	//@Test
	public void testResponseWithoutRequest() {
		mimic.goToPage("http://localhost:8080/unlearnAllResponses");
		mimic.goToPage("http://localhost:8080");
		mimic.learn("Resp_utan_Req");
		mimic.goToPage("http://localhost:8080");
		assertTrue(mimic.checkResponse("Resp_utan_Req")); //Det ska bli grönt
		mimic.closeBrowser();
	}	
	
	//@Test
	public void testResetStateParalellSequences() {
		mimic.goToPage("http://localhost:8080/unlearnAll");
		mimic.goToPage("http://localhost:8080/Number");
		mimic.learn("1");
		mimic.goToPage("http://localhost:8080/LearnNextResponse?text=2");
		mimic.goToPage("http://localhost:8080/Number");
		
		mimic.goToPage("http://localhost:8080/LearnNextResponse?text=3");
		mimic.goToPage("http://localhost:8080/Number");
		
		mimic.goToPage("http://localhost:8080/Number");
		mimic.goToPage("http://localhost:8080/Number");
		mimic.goToPage("http://localhost:8080/Number");
		mimic.goToPage("http://localhost:8080/Month");
		mimic.learn("January");
		mimic.goToPage("http://localhost:8080/LearnNextResponse?text=February");
		mimic.goToPage("http://localhost:8080/Month");
		mimic.goToPage("http://localhost:8080/Month");
		mimic.goToPage("http://localhost:8080/Month");
		
		mimic.goToPage("http://localhost:8080/Number");
		
		mimic.resetState();
		mimic.goToPage("http://localhost:8080/Number");
		assertTrue(mimic.checkResponse("1")); //Det ska bli grönt
		mimic.goToPage("http://localhost:8080/Month");
		assertTrue(mimic.checkResponse("January")); //Det ska bli grönt
		mimic.closeBrowser();
	}
	
	//@Test
	public void testMoveStatesMultSeq() {
		mimic.goToPage("http://localhost:8080/Number");
		assertTrue(mimic.checkResponse("2")); //Det ska bli grönt
		mimic.goToPage("http://localhost:8080/Month");
		assertTrue(mimic.checkResponse("February")); //Det ska bli grönt
		mimic.closeBrowser();
	}
	
	//@Test
	public void testParalellSequencesUnlearn() {
		mimic.goToPage("http://localhost:8080/unlearnAll");
		mimic.goToPage("http://localhost:8080/Number");
		mimic.learn("1");
		mimic.goToPage("http://localhost:8080/LearnNextResponse?text=2");
		mimic.goToPage("http://localhost:8080/Number");
		
		mimic.goToPage("http://localhost:8080/LearnNextResponse?text=3");
		mimic.goToPage("http://localhost:8080/Number");
		
		mimic.goToPage("http://localhost:8080/Number");
		mimic.goToPage("http://localhost:8080/Number");
		mimic.goToPage("http://localhost:8080/Number"); //Number är på state 3 nu
		
		mimic.goToPage("http://localhost:8080/Month");
		mimic.learn("January");
		mimic.goToPage("http://localhost:8080/LearnNextResponse?text=February");
		mimic.goToPage("http://localhost:8080/Month");
		mimic.goToPage("http://localhost:8080/Month");
		mimic.goToPage("http://localhost:8080/Month"); // Month är på state 2 (February) nu
		
		mimic.goToPage("http://localhost:8080/Number");
		
		mimic.unlearn();
		mimic.goToPage("http://localhost:8080/Number");
		assertTrue(mimic.checkResponse("2")); //Fel! den visar "3"
		mimic.goToPage("http://localhost:8080/Month");
		assertTrue(mimic.checkResponse("February")); //Förmodligen fel men kommer inte dit.
		mimic.closeBrowser();
	}
	
	//@Test
	public void testRelearn() {
		mimic.goToPage("http://localhost:8080/Number");
		mimic.learn("One");
		mimic.relearn("2");
		mimic.goToPage("http://localhost:8080/relearn");
		mimic.goToPage("http://localhost:8080/Number");
		assertTrue(mimic.checkUnlearn("Paste or type json"));
		mimic.closeBrowser();
	}
	public void testViewRequest() {
		mimic.unlearnAllRequests();
		mimic.goToPage("http://localhost:8080/Number");
		mimic.learn("One");
		mimic.addRequest();
		mimic.learn("Two");
		mimic.addRequest();
		mimic.learn("Three");
		System.out.println(mimic.viewRequests());
		assertTrue(mimic.viewRequests().equals("GET /Number HTTP/1.1\n" + 
				"GET /Number HTTP/1.1\n" + 
				"GET /Number HTTP/1.1"));
	}
	public void testLinksToRequests() {
		mimic.unlearnAllRequests();
		mimic.goToPage("http://localhost:8080/Links");
		mimic.learn("<html>\n" + 
				"<body>\n" + 
				"<a id=\"hey\" href=\"Hey\">Say Hey!</a><br> \n" + 
				"<a id=\"you\" href=\"Youtube\">RickRoll</a><br>\n" + 
				"</body>\n" + 
				"</html>");
		mimic.goToPage("http://localhost:8080/Hey");
		mimic.learn("<html>\n" + 
				"<body>\n" + 
				"<h1> HEEEEEY! </h1>" + 
				"<a id=\"links\" href=\"Links\">Back to Links</a><br>\n" + 
				"</body>\n" + 
				"</html>");
		mimic.goToPage("http://localhost:8080/Youtube");
		mimic.learn("<html>\n" + 
				"<body>\n" + 
				"<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/dQw4w9WgXcQ\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n" + 
				"<a id=\"links\" href=\"Links\">Back to Links</a><br>\n" + 
				"</body>\n" + 
				"</html>");
		mimic.goToPage("http://localhost:8080/Links");
		mimic.clickById("hey");
		mimic.clickById("links");
		mimic.clickById("you");
		mimic.clickById("links");
	}
	
	@Test
	public void testOrder1() { testRelearn();}
	public void testOrder2() { testResetStateParalellSequences(); testMoveStatesMultSeq();} 
	public void testOrder3() { testParalellSequencesUnlearn();}
	public void testOrder4() { testViewRequest(); testLinksToRequests(); mimic.quitSelenium();}
}
