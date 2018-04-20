package mimic;

import mimic.HttpServiceCaller;

public class MimicCaller {
	private final static String host="http://localhost:8080/"; 
	private HttpServiceCaller service;
	
	private String request;
	private String response;
	
	public MimicCaller() {
		service=new HttpServiceCaller();
	}
	
	public void setRequest(String request) {
		this.request=request;
	}
	public void setResponse(String response) {
		this.response=response;
	}
	public String learnNewRequest(){
		String requestToSend=host+request+"?learn="+response;
		return service.executeGetRequest(requestToSend);
	}
	public String getResponse(){
		String requestToSend=host+request;
		return service.executeGetRequest(requestToSend);
	}
	public String unlearnAll(){
		String requestToSend=host+"unlearnAll?";
		return service.executeGetRequest(requestToSend);
	}
}
