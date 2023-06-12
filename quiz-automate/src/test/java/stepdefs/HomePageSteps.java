package stepdefs;

import java.io.IOException;

import io.cucumber.java.en.And;
import io.cucumber.java.en.When;
import org.apache.poi.openxml4j.exceptions.InvalidFormatException;

import ApplicationPages.Homepage;
import WebConnector.webconnector;
import io.cucumber.core.api.Scenario;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.BeforeStep;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;

import static org.testng.Assert.assertEquals;


public class HomePageSteps extends webconnector {
    private Homepage homePage;
	private String scenDesc;

    public HomePageSteps() {
        this.homePage = new Homepage();
    }
    
    @Before
	public void before(Scenario scenario) {
		this.scenDesc = scenario.getName();
		setUpDriver();
	}
    
    @After
    public void after(Scenario scenario){
    	closeDriver(scenario);
    }
	
	@BeforeStep
	public void beforeStep() throws InterruptedException {
		Thread.sleep(2000);
	}

    @Given("^User navigates to Quiz HomePage$")
    public void aUserNavigatesToHomePage() throws InvalidFormatException, IOException {
        this.homePage.goToHomePage();
    }


    @Then("The UI elements of HomePage will be displayed")
    public void theUIElementsOfHomePageWillBeDisplayed() {

    }

    @When("Click on Computer tab")
    public void clickOnComputerTab() {
        
    }

    @And("Input value exist in Computer tab")
    public void inputValueExistInComputerTab() {
        
    }

    @Then("verify the search result is the same as the input value")
    public void verifyTheSearchResultIsTheSameAsTheInputValue() {
    }
}
