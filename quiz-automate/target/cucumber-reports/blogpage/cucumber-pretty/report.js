$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/BlogPage/01_VerifyPageName_BlogPage.feature");
formatter.feature({
  "name": "Home Page Verifications",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Check page display",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@blog_page"
    }
  ]
});
formatter.before({
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot find Chrome binary\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-L0EBMHE\u0027, ip: \u0027192.168.200.68\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002720.0.1\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: Backtrace:\n\tOrdinal0 [0x00D1EB13+1501971]\n\tOrdinal0 [0x00C9F6D1+980689]\n\tOrdinal0 [0x00C2765F+489055]\n\tOrdinal0 [0x00BBB7ED+47085]\n\tOrdinal0 [0x00BD9800+169984]\n\tOrdinal0 [0x00BD942D+169005]\n\tOrdinal0 [0x00BD78EB+162027]\n\tOrdinal0 [0x00BC0AC7+68295]\n\tOrdinal0 [0x00BC1B40+72512]\n\tOrdinal0 [0x00BC1AD9+72409]\n\tOrdinal0 [0x00CB8F37+1085239]\n\tGetHandleVerifier [0x00DBD7ED+503293]\n\tGetHandleVerifier [0x00DBD580+502672]\n\tGetHandleVerifier [0x00DC46AC+531644]\n\tGetHandleVerifier [0x00DBDFFA+505354]\n\tOrdinal0 [0x00CB0606+1050118]\n\tOrdinal0 [0x00CB047F+1049727]\n\tOrdinal0 [0x00CBAF9B+1093531]\n\tOrdinal0 [0x00CBB103+1093891]\n\tOrdinal0 [0x00CBA095+1089685]\n\tBaseThreadInitThunk [0x75F27D59+25]\n\tRtlInitializeExceptionChain [0x7716B74B+107]\n\tRtlClearBits [0x7716B6CF+191]\n\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\r\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\r\n\tat java.base/java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:197)\r\n\tat java.base/java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:1016)\r\n\tat java.base/java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:129)\r\n\tat java.base/java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:527)\r\n\tat java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:513)\r\n\tat java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:499)\r\n\tat java.base/java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:150)\r\n\tat java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.base/java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:647)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:157)\r\n\tat WebConnector.webconnector.setUpDriver(webconnector.java:63)\r\n\tat stepdefs.HomePageSteps.before(HomePageSteps.java:27)\r\n\tat java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:104)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:578)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:65)\r\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:42)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat io.cucumber.testng.TestNGCucumberRunner.runScenario(TestNGCucumberRunner.java:69)\r\n\tat io.cucumber.testng.AbstractTestNGCucumberTests.runScenario(AbstractTestNGCucumberTests.java:24)\r\n\tat java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:104)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:578)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.TestMethodWithDataProviderMethodWorker.call(TestMethodWithDataProviderMethodWorker.java:71)\r\n\tat org.testng.internal.TestMethodWithDataProviderMethodWorker.call(TestMethodWithDataProviderMethodWorker.java:14)\r\n\tat java.base/java.util.concurrent.FutureTask.run(FutureTask.java:317)\r\n\tat java.base/java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:577)\r\n\tat java.base/java.util.concurrent.FutureTask.run(FutureTask.java:317)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1144)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:642)\r\n\tat java.base/java.lang.Thread.run(Thread.java:1623)\r\n",
  "status": "failed"
});
formatter.beforestep({
  "status": "skipped"
});
formatter.step({
  "name": "User navigates to QATechTesting HomePage",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageSteps.aUserNavigatesToHomePage()"
});
formatter.result({
  "status": "skipped"
});
formatter.beforestep({
  "status": "skipped"
});
formatter.step({
  "name": "User verify that Blog Link is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.googleLogoIsDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.beforestep({
  "status": "skipped"
});
formatter.step({
  "name": "User verify that Blog page title is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "BlogPageSteps.blogPageIsDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException: Cannot invoke \"org.openqa.selenium.TakesScreenshot.getScreenshotAs(org.openqa.selenium.OutputType)\" because \"WebConnector.webconnector.driver\" is null\r\n\tat WebConnector.webconnector.saveScreenshotsForScenario(webconnector.java:85)\r\n\tat WebConnector.webconnector.closeDriver(webconnector.java:78)\r\n\tat stepdefs.HomePageSteps.after(HomePageSteps.java:32)\r\n\tat java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:104)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:578)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:65)\r\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:50)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat io.cucumber.testng.TestNGCucumberRunner.runScenario(TestNGCucumberRunner.java:69)\r\n\tat io.cucumber.testng.AbstractTestNGCucumberTests.runScenario(AbstractTestNGCucumberTests.java:24)\r\n\tat java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:104)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:578)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.TestMethodWithDataProviderMethodWorker.call(TestMethodWithDataProviderMethodWorker.java:71)\r\n\tat org.testng.internal.TestMethodWithDataProviderMethodWorker.call(TestMethodWithDataProviderMethodWorker.java:14)\r\n\tat java.base/java.util.concurrent.FutureTask.run(FutureTask.java:317)\r\n\tat java.base/java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:577)\r\n\tat java.base/java.util.concurrent.FutureTask.run(FutureTask.java:317)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1144)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:642)\r\n\tat java.base/java.lang.Thread.run(Thread.java:1623)\r\n",
  "status": "failed"
});
});