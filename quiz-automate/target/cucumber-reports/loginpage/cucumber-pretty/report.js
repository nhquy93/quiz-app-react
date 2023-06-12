$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/LoginPage/01_LoginPage.feature");
formatter.feature({
  "name": "Login Page Verifications",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify UI loginPage",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login_page"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "I on Login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSteps.userLoginSuccessfully()"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "The UI elements of login page will be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.theUIElementsOfLoginPageWillBeDisplayed()"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected [Username] but found [UserName]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:453)\r\n\tat org.testng.Assert.assertEquals(Assert.java:463)\r\n\tat stepdefs.LoginPageSteps.theUIElementsOfLoginPageWillBeDisplayed(LoginPageSteps.java:32)\r\n\tat ✽.The UI elements of login page will be displayed(file:src/test/resources/features/LoginPage/01_LoginPage.feature:6)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify login successfully",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login_page"
    }
  ]
});
formatter.step({
  "name": "I on Login page",
  "keyword": "Given "
});
formatter.step({
  "name": "Input \"\u003cemail\u003e\" for Email, \"\u003cusername\u003e\" for username and hit the login button",
  "keyword": "When "
});
formatter.step({
  "name": "HomePage will be displayed",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "username"
      ]
    },
    {
      "cells": [
        "chang",
        "12345"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify login successfully",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login_page"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "I on Login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSteps.userLoginSuccessfully()"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "Input \"chang\" for Email, \"12345\" for username and hit the login button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageSteps.inputValidUserAndHitLoginButton(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "HomePage will be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.homepageWillBeDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-L0EBMHE\u0027, ip: \u002710.10.10.133\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002720.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 114.0.5735.110, chrome: {chromedriverVersion: 114.0.5735.90 (386bc09e8f4f..., userDataDir: C:\\Users\\HP\\AppData\\Local\\T...}, goog:chromeOptions: {debuggerAddress: localhost:51779}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: f204e6b29eb52affb7ef1a7f8e59fa3a\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.close(RemoteWebDriver.java:442)\r\n\tat WebConnector.webconnector.closeDriver(webconnector.java:80)\r\n\tat stepdefs.HomePageSteps.after(HomePageSteps.java:37)\r\n\tat java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:104)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:578)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:65)\r\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:50)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat io.cucumber.testng.TestNGCucumberRunner.runScenario(TestNGCucumberRunner.java:69)\r\n\tat io.cucumber.testng.AbstractTestNGCucumberTests.runScenario(AbstractTestNGCucumberTests.java:24)\r\n\tat java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:104)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:578)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.TestMethodWithDataProviderMethodWorker.call(TestMethodWithDataProviderMethodWorker.java:71)\r\n\tat org.testng.internal.TestMethodWithDataProviderMethodWorker.call(TestMethodWithDataProviderMethodWorker.java:14)\r\n\tat java.base/java.util.concurrent.FutureTask.run(FutureTask.java:317)\r\n\tat java.base/java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:577)\r\n\tat java.base/java.util.concurrent.FutureTask.run(FutureTask.java:317)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1144)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:642)\r\n\tat java.base/java.lang.Thread.run(Thread.java:1623)\r\n",
  "status": "failed"
});
});