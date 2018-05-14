package MimicServiceProject.MimicService;

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
	 * Starts the MimicService, throws exception if the jar file not found
	 * @throws Exception
	 */
	public void startMimic() throws Exception{
		
		Runtime.getRuntime().exec("java -jar /Users/Marcu/Desktop/Skola/Automatisering/Projektarbete/sprint5/mimic.jar");

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
	 * Unlearns the previous added responses to and including the last called state
	 */
	public void unlearn(){
		String requestToSend=host+"unlearnResponse";
		service.executeGetRequest(requestToSend);
	}
	/**
	 * Unlearns all Mimics responses for a reset
	 */
	public void unlearnAll(){
		String requestToSend=host+"unlearnAllResponses";
		service.executeGetRequest(requestToSend);
	}
	/**
	 * Stops Mimic from running with KillMimic command
	 */
	public void killMimic(){
		String requestToSend=host+"killMimic";
		service.executeGetRequest(requestToSend);
	}
	/**
	 * Learn the Mimic an equation
	 * @param operator
	 * @param answer
	 * @param value1
	 * @param value2
	 */
	public void learnEquation(String operator, int value1, int value2, int answer){
		String reqToSend=host+"LearnNextResponse?"+"text="+answer;
		service.executeGetRequest(reqToSend);
		String requestToSend=host+operator+"?value1="+value1+"&value2="+value2;
		service.executeGetRequest(requestToSend);
	}
	public String sendMathRequest(int value1, String operator, int value2) {
		String reqToSend=host+operator+"?value1="+value1+"&value2="+value2;
		return service.executeGetRequest(reqToSend);
	}
	public void resetState() {
		String reqToSend=host+"resetState";
		service.executeGetRequest(reqToSend);
	}

}
