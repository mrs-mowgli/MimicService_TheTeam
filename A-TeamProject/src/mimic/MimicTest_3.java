package mimic;

import static org.junit.Assert.assertTrue;

import org.junit.Test;


public class MimicTest_3 {
	
	public void testUnlearn() {
		Mimic mimic = new Mimic();
		mimic.goToPage("http://localhost:8080/Number");
		mimic.learn("One");
		mimic.unlearn();
		mimic.goToPage("http://localhost:8080/Number");
		assertTrue(mimic.checkUnlearn("Paste or type")); //ej pass
		mimic.closeBrowser();
	}
	
	public void testPriceDollars() {
		Mimic mimic = new Mimic();
		mimic.goToPage("http://localhost:8080/LearnNextResponse?text=100$");
		mimic.learn("Price");
		mimic.goToPage("http://localhost:8080/Price");
		assertTrue(mimic.checkResponse("100$")); //Skall vara grönt
		mimic.closeBrowser();
	}

	public void testPriceSek() {
		Mimic mimic = new Mimic();
		mimic.goToPage("http://localhost:8080/LearnNextResponse?text=100:-");
		mimic.learn("Price sek");
		mimic.goToPage("http://localhost:8080/Price sek");
		assertTrue(mimic.checkResponse("100:-")); //Skall vara grönt
		mimic.closeBrowser();
	}
	
	public void testPercentage() {
		Mimic mimic = new Mimic();
		mimic.goToPage("http://localhost:8080/LearnNextResponse?text=50%");
		mimic.learn("Percentage");
		mimic.goToPage("http://localhost:8080/Percentage");
		assertTrue(mimic.checkResponse("50%")); //Det blir rött, den skriver "Provide text" i formuläret
		mimic.closeBrowser();
	}
	

	public void testPercentage2() {
		Mimic mimic = new Mimic();
		mimic.goToPage("http://localhost:8080/LearnNextResponse?text=%50");
		mimic.learn("Percentage");
		mimic.goToPage("http://localhost:8080/Percentage");
		assertTrue(mimic.checkResponse("%50")); //Det blir rött, den skriver "P" i formuläret
		mimic.closeBrowser();
	}


	@Test
	public void testOrder1() { testUnlearn(); testPriceDollars(); testPriceSek(); testPercentage(); testPercentage2();}

}

