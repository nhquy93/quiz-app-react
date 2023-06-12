package ApplicationPages;

import WebConnector.webconnector;
import org.apache.poi.openxml4j.exceptions.InvalidFormatException;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import java.io.IOException;

import static WebConnector.webconnector.driver;

public class Loginpage {
	webconnector wc=new webconnector();


	public By Email = By.xpath("//*[@mauto=\"Email\"]");
	public By Username = By.xpath("//*[@mauto=\"UserName\"]");
	public By btn_submit = By.xpath("//button[@type=\"submit\"]");

    public void goToLoginPage() throws InvalidFormatException, IOException{
    	String URL=wc.getSpecificColumnData("./src/test/testdata/data.xlsx","sheet1", "URL");
        driver.get(URL);
        wc.waitForCondition("PageLoad","",60);
    }


}