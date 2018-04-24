package info.cukes.cucumber_mimic;

public class MimicCaller {
	private final static String host="http://localhost:8080/"; 
	private HttpServiceCaller service;

	
	public MimicCaller() {
		service=new HttpServiceCaller();
		try {
			startMimic();
		} catch (Exception e) {
			e.printStackTrace();
		}
		}
	//starts mimicservice
	public void startMimic() throws Exception{
		//String user = System.getProperty("user.name");
		Runtime.getRuntime().exec("java -jar /Users/lotber/ITHS/Projektarbete/Sprint2/mimic.jar");
		// Runtime.getRuntime().exec("java -jar C:\\Users\\"+user+"\\eclipse-workspace\\cucumber-mimic\\mimic.jar");
	}
	
	public void learnNewRequest(String request,String response){
		String requestToSend=host+"LearnNextResponse?" +"text="+response;
		service.executeGetRequest(requestToSend);
		requestToSend=host + request;
		service.executeGetRequest(requestToSend);
		
	}
	public String getResponse(String request){
		String requestToSend=host+request;
		return service.executeGetRequest(requestToSend);
	}
	public String unlearn(){
		String requestToSend=host+"unlearn";
		return service.executeGetRequest(requestToSend);
	}
	public void KillMimic(){
		String requestToSend=host+"KillMimic";
		service.executeGetRequest(requestToSend);
	}

}
