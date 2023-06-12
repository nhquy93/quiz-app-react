package runner;

import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;

import io.cucumber.testng.CucumberOptions;


@CucumberOptions( tags = {"@login_page"},glue = {"stepdefs"}, plugin = {"html:target/cucumber-reports/loginpage/cucumber-pretty","json:target/json-cucumber-reports/loginpage/cukejson.json",
		"testng:target/testng-cucumber-reports/loginpage/cuketestng.xml" }, features = {"src/test/resources/features/LoginPage"})
public class HomePageRunner extends AbstractTestNGCucumberParallelTests {
	
	@BeforeClass
	public static void before() {
		System.out.println("Before - "+System.currentTimeMillis());
	}
	
	@AfterClass
	public static void after() {
		System.out.println("After - "+System.currentTimeMillis());
	}

}
