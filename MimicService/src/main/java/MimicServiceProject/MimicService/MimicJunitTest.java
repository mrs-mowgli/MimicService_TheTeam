package MimicServiceProject.MimicService;

import static org.junit.Assert.*;

import org.junit.Test;

public class MimicJunitTest {

	//@Test
	public void testResetStateParalellSequences() {
		MimicSelenium mimic = new MimicSelenium();
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
		MimicSelenium mimic = new MimicSelenium();
		mimic.goToPage("http://localhost:8080/Number");
		assertTrue(mimic.checkResponse("2")); //Det ska bli grönt
		mimic.goToPage("http://localhost:8080/Month");
		assertTrue(mimic.checkResponse("February")); //Det ska bli grönt
		mimic.closeBrowser();
	}
	
	//@Test
	public void testParalellSequencesUnlearn() {
		MimicSelenium mimic = new MimicSelenium();
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
		MimicSelenium mimic = new MimicSelenium();
		mimic.goToPage("http://localhost:8080/Number");
		mimic.learn("One");
		mimic.relearn("2");
		mimic.goToPage("http://localhost:8080/relearn");
		mimic.goToPage("http://localhost:8080/Number");
		assertTrue(mimic.checkUnlearn("Paste or type json"));
		mimic.closeBrowser();
	}
	
	@Test
	//public void testOrder1() { testRelearn();}
	//public void testOrder2() { testResetStateParalellSequences(); testMoveStatesMultSeq();} 
	public void testOrder3() { testParalellSequencesUnlearn();}
}