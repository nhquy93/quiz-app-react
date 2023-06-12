Feature: Login Page Verifications

  @login_page
  Scenario: Verify UI loginPage
    Given I on Login page
    Then  The UI elements of login page will be displayed

  @login_page
  Scenario Outline: Verify login successfully
    Given I on Login page
    When Input "<email>" for Email, "<username>" for username and hit the login button
    Then HomePage will be displayed
    Examples:
      | email    | username |
      | chang    | 12345    |