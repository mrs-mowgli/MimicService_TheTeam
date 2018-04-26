package info.cukes.cucumber_mimic;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class MimicStepDef {
	private final static String host="http://localhost:8080/";
	private MimicCaller mc = new MimicCaller();
	
	private String result;
	
	@Given("^Mimicservice is up and running$")
	public void mimicservice_is_up_and_running() throws Throwable {
	if  (Runtime.getRuntime().exec("java -jar /Users/lotber/ITHS/Projektarbete/Sprint2/mimic.jar") != null);	
	 // if  (Runtime.getRuntime().exec("java -jar C:\\Users\\"+user+"\\eclipse-workspace\\cucumber-mimic\\mimic.jar !=null);
	}
	@Given("^has learned request \"([^\"]*)\" and response \"([^\"]*)\"$")
	public void has_learned_request_and_response(String arg1, String arg2) throws Throwable {
//	result = mc.setRequest(host+"LearnNextResponse?text" +arg1+" =" +arg2);
	mc.learnNewRequest(arg1, arg2);
	}
	@When("^I give request \"([^\"]*)\"$")
	public void i_give_request(String arg1) throws Throwable {
	result = mc.getResponse(arg1);
	}
	@Then("^I get response \"([^\"]*)\"$")
	public void i_get_response(String arg1) throws Throwable {
		System.out.println(result+" = "+arg1);
		if (!result.equals(arg1)) {
			throw new Exception();
		}
	}
	@When("^I use unlearn command$")
	public void i_use_unlearn_command() throws Throwable {
	mc.unlearn();
	} 
	@Then("^I get response NULL$")
	public void i_get_response_NULL() throws Throwable {
		System.out.println("Result= "+ result);
		if (!result.contains("json")) {
			throw new Exception();
		}
	}
	@When("^I KillMimic$")
	public void i_KillMimic() throws Throwable {
	   mc.KillMimic();
	   Thread.sleep(5000);
	}

	@When("^Start Mimic$")
	public void start_Mimic() throws Throwable {
	    mc.startMimic();
	}
	
}
