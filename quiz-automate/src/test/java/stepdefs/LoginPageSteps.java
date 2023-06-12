package stepdefs;

import ApplicationPages.Homepage;
import ApplicationPages.Loginpage;
import WebConnector.webconnector;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.apache.poi.openxml4j.exceptions.InvalidFormatException;

import java.io.IOException;

import static org.testng.Assert.assertEquals;

public class LoginPageSteps extends webconnector{

    private Loginpage loginPage;
    webconnector wc=new webconnector();
    public LoginPageSteps() {
        this.loginPage = new Loginpage();
    }

    @Given("I on Login page")
    public void userLoginSuccessfully() throws IOException, InvalidFormatException {
        this.loginPage.goToLoginPage();
    }

    @Then("The UI elements of login page will be displayed")
    public void theUIElementsOfLoginPageWillBeDisplayed() throws Exception {
        assertEquals(driver.findElement(loginPage.Email).getAttribute("placeholder"),"Email");
        assertEquals(driver.findElement(loginPage.Username).getAttribute("placeholder"),"Username");
        assertEquals(driver.findElement(loginPage.Username).getText(),"Start Quiz !");
    }

    @When("Input {string} for Email, {string} for username and hit the login button")
    public void inputValidUserAndHitLoginButton(String email, String username) throws Exception {
        driver.findElement(loginPage.Email).sendKeys("email");
        driver.findElement(loginPage.Username).sendKeys("111");
        driver.findElement(loginPage.btn_submit).click();
    }

    @Then("HomePage will be displayed")
    public void homepageWillBeDisplayed() {

    }
}
