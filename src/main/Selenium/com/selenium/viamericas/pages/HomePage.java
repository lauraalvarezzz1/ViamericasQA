package com.selenium.viamericas.pages;


import org.openqa.selenium.By;
import com.selenium.viamericas.utility.Start;
import org.openqa.selenium.JavascriptExecutor;

public class HomePage {

    // Navigation menu elements
    public static By sendMoneylabel = By.xpath("/html/body/div[2]/div/div[1]/div[1]/header/nav-viamericas/nav/div[1]/ul[1]/li[1]/a");
    public static By transactionHistory = By.xpath("/html/body/div[2]/div/div[1]/div[1]/header/nav-viamericas/nav/div[1]/ul[1]/li[2]/a");
    public static By getaquotelabel = By.xpath("/html/body/div[2]/div/div[1]/div[1]/header/nav-viamericas/nav/div[1]/ul[1]/li[3]/a");
    public static By howitworkslabel = By.xpath("/html/body/div[2]/div/div[1]/div[1]/header/nav-viamericas/nav/div[1]/ul[1]/li[4]/a");
    public static By locationlabel = By.xpath("/html/body/div[2]/div/div[1]/div[1]/header/nav-viamericas/nav/div[1]/ul[1]/li[5]/a");
    public static By loginbutton = By.xpath("/html/body/div[2]/div/div[1]/div[1]/header/div/ul/li[3]/button[2]");
    public static By signuplabel = By.xpath("/html/body/div[2]/div/div[1]/div[1]/header/div/ul/li[3]/button[1]");

    //Header menu elements
    public static By languagedropdown = By.xpath("/html/body/div[2]/div/div[1]/div[1]/header/div/ul/li[1]/a");
    public static By englishoption = By.xpath("/html/body/div[2]/div/div[1]/div[1]/header/div/ul/li[1]/ul/li[1]");
    public static By spanishoption = By.xpath("/html/body/div[2]/div/div[1]/div[1]/header/div/ul/li[1]/ul/li[2]");
    public static By customerservicelabel = By.xpath("/html/body/div[2]/div/div[1]/div[1]/header/div/ul/li[2]/a");
    public static By myaccountlabel = By.xpath("/html/body/div[2]/div/div[1]/div[1]/header/div/ul/li[4]/a");
    public static By logoutlabel = By.xpath("/html/body/div[2]/div/div[1]/div[1]/header/div/ul/li[7]/a");

    //Buttons
    public static By getaQuoteButton = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/section[2]/div/div[2]/a[1]");
    public static By SignUpButton = By.xpath("/html/body/div[2]/div/div[1]/div[1]/header/div/ul/li[3]/button[1]");
    public static By SendMoneybutton = By.xpath("/html/body/div[3]/div/div[1]/div[2]/div/div/section[1]/ul/li[1]/div/div[2]/div/div/a[2]");

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

        if(page.equals("sendmoney")){
            Start.driver.findElement(SendMoneybutton).click();

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
        Start.driver.findElement(SignUpButton).click();
        Thread.sleep(3000);
    }

    public static void clickSendMoney() throws Exception {
        Start.driver.findElement(SendMoneybutton).click();
        Thread.sleep(2000);
    }

    public static void logOut(){
        Start.driver.findElement(logoutlabel).click();
    }

}