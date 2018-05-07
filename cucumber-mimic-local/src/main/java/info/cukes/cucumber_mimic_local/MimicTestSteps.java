package info.cukes.cucumber_mimic_local;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class MimicTestSteps {
//	private final static String host="http://localhost:8080/";
	private MimicCaller mc = new MimicCaller();
//	private MimicSelenium ms = new MimicSelenium();
	private int arg1;
	private int arg2;
	int value1 = arg1;
	int value2 = arg2;
	private String result;
	
	@Given("^Mimicservice is up and running$")
	public void mimicservice_is_up_and_running() throws Throwable {
	if  (Runtime.getRuntime().exec("java -jar C:\\Users\\j-g_9\\eclipse-workspace\\Automatiseringsprojekt\\mimic.jar") != null);	
	 // System.out.println("MimicService up-n-running");
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
	@When("^I use unlearnAll command$")
	public void i_use_unlearnAll_command() throws Throwable {
	    mc.unlearnAll();
	}
	@Then("^I get response NULL$")
	public void i_get_response_NULL() throws Throwable {
		System.out.println("Result= "+ result);
		if (!result.contains("Paste or type")) {
			System.out.println("Inte NULL");
		} 
	}
	@When("^I KillMimic$")
	public void i_KillMimic() throws Throwable {
	   mc.killMimic();
	   Thread.sleep(5000);
	}

	@When("^Start Mimic$")
	public void start_Mimic() throws Throwable {
	    mc.startMimic();
	}
	
	@When("^I \"([^\"]*)\" answer \"([^\"]*)\" with values \"([^\"]*)\" and \"([^\"]*)\"$")
	public void i_answer_with_values_and(String arg1, String arg2, String arg3, String arg4) throws Throwable {
	    mc.learnEquation(arg1, arg2, arg3, arg4);
	}

	/**
	
	@When("^In URL I give request \"([^\"]*)\"$")
	public void i_give_request_in_in_URL(String arg1) throws Throwable {
		mimicSele.startDriver();
	    mimicSele.goToPage("http://localhost:8080/"+arg1);
	}
	
	@When("^write Response \"([^\"]*)\" in the form$")
	public void write_Response_in_the_form(String arg1) throws Throwable {
	    mimicSele.giveResponse(arg1);
	}

	@When("^push learn button$")
	public void push_learn_button() throws Throwable {
	    mimicSele.clickLearnButton();
	}

	@Then("^On the page I get response \"([^\"]*)\"$")
	public void i_get_response_on_the_page(String arg1) throws Throwable {
	    mimicSele.checkResponse(arg1);
	    mimicSele.closeBrowser();
	}
	@Then("^On the page I get response form$")
	public void i_get_response_form_on_the_page() throws Throwable {
	    mimicSele.checkResponse("Paste or type");
	    mimicSele.closeBrowser();
	}  */
	
}
