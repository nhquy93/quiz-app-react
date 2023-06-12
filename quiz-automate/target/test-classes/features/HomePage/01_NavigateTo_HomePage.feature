Feature: Home Page Verifications

  @home_page
  Scenario: Check Search in HomePage
  	Given User login successfully
     And User navigates to Quiz HomePage
    When Click on Computer tab
     And Input value exist in Computer tab
    Then  verify the search result is the same as the input value

  @home_page
  Scenario: Check Detail Page display
    Given User navigates to Quiz HomePage
    When Click on Computer tab
     And Click on Subject
    Then Detail Page will be displayed


