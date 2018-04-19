package mimic;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

class StoreTest {

	Store e = new Store();
	
	/**Learn a response and assert that it remembers it correctly.
	 */
	
	@Test
	public void learnResponse() {
		e.learnResponse("�xx", "Z�ta");		
		assertEquals(e.getResponse("�xx"), "Z�ta");
	}
	
	/**Learn a response then unlearn it, then checking if the mindsweep was succesful.
	 */
	
	@Test
	public void getResponse() {
		e.learnResponse("�xx", "Z�ta");
		e.unlearnAll();
		assertEquals(e.getResponse("�xx"), null);
	}

	/**Try to get a respond from a non-existing request.
	 */
	@Test
	public void getResponsenoargs() {
		assertEquals(e.getResponse("asdasd"), null );
	}

	/**Learning multiple req/resp and assert if it can remember multiple responses.
	 */
	@Test
	public void learnMultipleResponses() {
		e.learnResponse("�xx", "Z�ta");
		e.learnResponse("Banana", "Skids");
		e.learnResponse("Laurel", "Hardy");
		e.learnResponse("Ful", "bil");
		assertEquals(e.getResponse("Laurel"), "Hardy");
	}

	/**Learning multiple requests and checks that the last req/resp is the one and only true.
	 */
	@Test
	public void learnDifferentRequestWithSameResponses() {
		e.learnResponse("�xx", "Ett");
		e.learnResponse("�xx", "Tv�");
		e.learnResponse("�xx", "Tre");
		assertEquals(e.getResponse("�xx"), "Tre");
		assertNotEquals(e.getResponse("�xx"), "Tv�");
	}
	@Test
	public void lottaTest() {
	}sdfgh
	}
	
}

