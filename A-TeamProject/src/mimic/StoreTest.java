package mimic;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

class StoreTest {

	Store e = new Store();
	
	/**Learn a response and assert that it remembers it correctly.
	 TF:1.01*/	
	@Test
	public void learnResponse() {
		e.learnResponse("Number", "One");		
		assertEquals(e.getResponse("Number"), "One");
	}
	
	/**Learn a response then unlearn it, then checking if the mindsweep was succesful.
	TF:1.02 */
	@Test
	public void getResponse() {
		e.learnResponse("Number", "One");
		e.unlearnAll();
		assertEquals(e.getResponse("Number"), null);
	}

	/**Try to get a respond from a non-existing request.
	TF:1.03 */	
	@Test
	public void getResponsenoargs() {
		assertEquals(e.getResponse("asdasd"), null );
	}

	/**Learning multiple req/resp and assert if it can remember multiple responses.
	 TF:1.04*/
	@Test
	public void learnMultipleResponses() {
		e.learnResponse("Banana", "Skids");
		e.learnResponse("Laurel", "Hardy");
		e.learnResponse("Ful", "bil");
		assertEquals(e.getResponse("Laurel"), "Hardy");
	}

	/**Learning multiple requests and checks that the last req/resp is the one and only true.
	TF:1.05 */
	@Test
	public void learnDifferentRequestWithSameResponses() {

		e.learnResponse("Number", "One");
		e.learnResponse("Number", "Two");
		e.learnResponse("Number", "Three");
		assertEquals(e.getResponse("Number"), "Three");
		assertNotEquals(e.getResponse("Number"), "Two");

	}

	@Test
	public void lottaTest() {
	awesome.funkar();
	}
	
	@Test
	public void downloadTest() {
	}
}

