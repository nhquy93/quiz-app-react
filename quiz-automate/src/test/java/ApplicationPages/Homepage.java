package ApplicationPages;

import org.apache.poi.openxml4j.exceptions.InvalidFormatException;
import WebConnector.webconnector;
import org.openqa.selenium.By;

import static WebConnector.webconnector.driver;
import java.io.IOException;

public class Homepage {
	webconnector wc=new webconnector();

	public By Subject = By.xpath("//span[text()=\"Computer Basic\"]");

    public void goToHomePage() throws InvalidFormatException, IOException{
    	String URL=wc.getSpecificColumnData("./src/test/testdata/data.xlsx","sheet1", "URL");
        driver.get(URL);
        wc.waitForCondition("PageLoad","",60);
    }

    public void checkBlogLinkDisplay() {
    	try {
			wc.PerformActionOnElement("BlogLink_HomePage","Click","");
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
    }
}