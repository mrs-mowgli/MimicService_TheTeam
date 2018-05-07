package info.cukes.cucumber_mimic_local;

public class MimicCaller {
	private final static String host="http://localhost:8080/"; 
	private HttpServiceCaller service;

	/**
	 * Starts the Mimic as soon as the MimicCAller is instantiated
	 * and instantiate HttpServiceCaller that is used to send Http GET requests
	 */
	public MimicCaller() {
		service=new HttpServiceCaller();
		try {
			startMimic();
		} catch (Exception e) {
			e.printStackTrace();
		}
		}
	/**
	 * Starts the MimicService, throws exception if the jar file not found. Change runtime path to get it to work on your cpu.
	 * @throws Exception
	 */
	public void startMimic() throws Exception{
		String user = System.getProperty("user.name");
		Runtime.getRuntime().exec("java -jar C:\\Users\\"+user+"\\eclipse-workspace\\Automatiseringsprojekt\\mimic.jar");
		// Runtime.getRuntime().exec("java -jar C:\\Users\\"+user+"\\eclipse-workspace\\Automatiseringsprojekt\\mimic.jar");
	}
	/**
	 * Learn the Mimic a new request and response with two variables, with the LearnNextResponse? command syntax.
	 * @param request
	 * @param response
	 */
	public void learnNewRequest(String request,String response){
		String requestToSend=host+"LearnNextResponse?" +"text="+response;
		service.executeGetRequest(requestToSend);
		requestToSend=host + request;
		service.executeGetRequest(requestToSend);
	}
	/**
	 * Calls for a response from Mimic by sending a string request. Mimic returns a response string
	 * @param request
	 * @return
	 */
	public String getResponse(String request){
		String requestToSend=host+request;
		return service.executeGetRequest(requestToSend);
	}
	/**
	 * Unlearns the previous added response
	 */
	public void unlearn(){
		String requestToSend=host+"unlearn";
		service.executeGetRequest(requestToSend);
	}
	/**
	 * Unlearn all Mimics responses for a reset
	 */
	public void unlearnAll(){
		String requestToSend=host+"unlearnAll";
		service.executeGetRequest(requestToSend);
	}
	/**
	 * Stops Mimic from running with KillMimic command
	 */
	public void KillMimic(){
		String requestToSend=host+"KillMimic";
		service.executeGetRequest(requestToSend);
	}
	/**
	 * reset the current state back to start
	 */
	public void ResetState(){
		String requestToSend=host+"resetState";
		service.executeGetRequest(requestToSend);
	}
	/**
	 * relearn sends the relearn request as url, no function atm?.
	 */
	public void Relearn(){
		String requestToSend=host+"relearn";
		service.executeGetRequest(requestToSend);
	}
	/**
	 * Learn the Mimic an equation
	 * @param operator
	 * @param answer
	 * @param value1
	 * @param value2
	 */
	public void LearnEquation(String operator, String answer, String value1, String value2){
		String reqToSend=host+"LearnNextResponse?"+"text="+answer;
		service.executeGetRequest(reqToSend);
		String requestToSend=host+operator+"?value1="+value1+"&value2="+value2;
		service.executeGetRequest(requestToSend);
	}
	

}