package com.selenium.viamericas.pages;


import org.openqa.selenium.By;
import com.selenium.viamericas.utility.Start;
import org.openqa.selenium.JavascriptExecutor;

public class HomePage {

    // Navigation menu elements
    public static By sendMoneylabel = By.id("send-money-button-nav-bar");
    public static By transactionHistory = By.id("transaction-history-button-nav-bar");
    public static By getaquotelabel = By.id("get-a-quote-button-nav-bar");
    public static By howitworkslabel = By.id("how-it-works-button-nav-bar");
    public static By locationlabel = By.id("locations-button-nav-bar");
    public static By loginbutton = By.id("login-button-header");
    public static By signuplabel = By.xpath("/html/body/div[2]/div/div[1]/div[1]/header/div/ul/li[3]/button[1]");

    //Header menu elements
    public static By languagedropdown = By.id("language-header");
    public static By englishoption = By.id("english-lang-header");
    public static By spanishoption = By.id("spanish-lang-header");
    public static By customerservicelabel = By.id("contact-us-header");
    public static By myaccountlabel = By.id("my-account-header");
    public static By logoutlabel = By.id("logout-header");

    //Buttons
    public static By getaQuoteButton = By.id("get-quote-desktop-home");
    public static By SignUpButtonBanner = By.id("sign-up-banner-home");
    public static By SendMoneybuttonBanner = By.id("send-money-home");

    //intercom
    public static By intercomChat = By.cssSelector("intercom-launcher");

    //Home Page Links
    public static By logoIcon = By.xpath("/html/body/div[2]/div/div[1]/div[1]/header/logo-viamericas/div/a/img");

    //Footer links
    public static By aboutus = By.id("about-us-footer");
    public static By leadership = By.id("leadership-footer");
    public static By careers = By.id("careers-footer");
    public static By news = By.id("news-footer");
    public static By compliance = By.id("compliance-footer");
    public static By fileaComplaint = By.id("file-a-complaint-footer");
    public static By FAQ = By.id("faq-footer");
    public static By contactUs = By.id("contact-us-footer");
    public static By privacyPolicy = By.id("privacy-policy-footer");
    public static By termsandConditions = By.id("terms-and-conditions-footer");

    public static void Goto(String page) throws Exception {
        Thread.sleep(5000);
        if(page.equals("sendmoney")){
            Start.driver.findElement(SendMoneybuttonBanner).click();

        }else if(page.equals("sendMoneyNavbar")){
        Start.driver.findElement(sendMoneylabel).click();

        }else if(page.equals("transaction")){
            Start.driver.findElement(transactionHistory).click();

        }else if(page.equals("getaquote")) {
            Start.driver.findElement(getaquotelabel).click();
            Thread.sleep(3000);

        }else if(page.equals("howitworks")) {
            Start.driver.findElement(howitworkslabel).click();

        }else if(page.equals("login")){
            Start.driver.findElement(loginbutton).click();

        }else if(page.equalsIgnoreCase("signup")){
            Start.driver.findElement(signuplabel).click();

        }else if(page.equalsIgnoreCase("main")){
            Start.driver.findElement(logoIcon).click();
            Thread.sleep(2000);
        }else if(page.equalsIgnoreCase("myaccount")){
        Start.driver.findElement(myaccountlabel).click();
        Thread.sleep(2000);
        }
    }

    public static void footerGoto(String pag) throws Exception {
        Thread.sleep(5000);
        JavascriptExecutor jse = (JavascriptExecutor)Start.driver;
        jse.executeScript("window.scrollBy(0,document.body.scrollHeight)", "");

        Start.driver.findElement(intercomChat).click();
        Start.driver.findElement(intercomChat).click();

        if(pag.equalsIgnoreCase("aboutus")){
            Thread.sleep(2000);
            Start.driver.findElement(aboutus).click();

        }else if(pag.equalsIgnoreCase("leadership")){
            Thread.sleep(2000);
            Start.driver.findElement(leadership).click();

        }else if(pag.equalsIgnoreCase("careers")){
            Thread.sleep(2000);
            Start.driver.findElement(careers).click();

        }else if(pag.equalsIgnoreCase("news")){
            Thread.sleep(2000);
            Start.driver.findElement(news).click();

        }else if(pag.equalsIgnoreCase("compliance")){
            Thread.sleep(2000);
            Start.driver.findElement(compliance).click();

        }else if(pag.equalsIgnoreCase("fileAComplaint")){
            Thread.sleep(2000);
            Start.driver.findElement(fileaComplaint).click();

        }else if(pag.equalsIgnoreCase("faq")){
            Thread.sleep(2000);
            Start.driver.findElement(FAQ).click();

        }else if(pag.equalsIgnoreCase("contactus")){
            Thread.sleep(2000);
            Start.driver.findElement(contactUs).click();

        }else if(pag.equalsIgnoreCase("privacypolicy")){
            Thread.sleep(2000);
            Start.driver.findElement(privacyPolicy).click();

        }else if(pag.equalsIgnoreCase("termsandconditions")){
            Thread.sleep(2000);
            Start.driver.findElement(termsandConditions).click();
        }else if(pag.equalsIgnoreCase("myAccount")){
            Thread.sleep(2000);
            Start.driver.findElement(myaccountlabel).click();
        }
    }

    public static void changeLanguage(String lang){
        Start.driver.findElement(languagedropdown).click();
        if(lang.equals("english")){
            Start.driver.findElement(englishoption).click();
        }else if(lang.equals("spanish")){
            Start.driver.findElement(spanishoption).click();
        }
    }

    public static void clickGetaQuote() throws Exception {
        Start.driver.findElement(getaQuoteButton).click();
        Thread.sleep(1500);
    }

    public static void clickSignUp() throws Exception {
        Start.driver.findElement(SignUpButtonBanner).click();
        Thread.sleep(3000);
    }

    public static void clickSendMoney() throws Exception {
        Start.driver.findElement(SendMoneybuttonBanner).click();
        Thread.sleep(2000);
    }

    public static void logOut(){
        Start.driver.findElement(logoutlabel).click();
    }

}