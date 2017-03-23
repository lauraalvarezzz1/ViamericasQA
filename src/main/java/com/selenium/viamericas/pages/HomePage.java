package com.selenium.viamericas.pages;


import org.openqa.selenium.By;
import com.selenium.viamericas.utility.Start;

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
    public static By SendMoneybutton = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div[1]/section[4]/div[3]/div[1]");

    //Home Page Links
    public static By logoIcon = By.xpath("/html/body/div[2]/div/div[1]/div[1]/header/logo-viamericas/div/a/img");

    //Footer links
    public static By aboutus = By.xpath("/html/body/div[2]/div/div[2]/footer/div/nav/ul[1]/li[1]/a");
    public static By leadership = By.xpath("/html/body/div[2]/div/div[2]/footer/div/nav/ul[1]/li[2]/a");
    public static By careers = By.xpath("/html/body/div[2]/div/div[2]/footer/div/nav/ul[1]/li[3]/a");
    public static By news = By.xpath("/html/body/div[2]/div/div[2]/footer/div/nav/ul[1]/li[4]/a");
    public static By payernetwork = By.xpath("/html/body/div[2]/div/div[2]/footer/div/nav/ul[1]/li[5]/a");
    public static By compliance = By.xpath("/html/body/div[2]/div/div[2]/footer/div/nav/ul[1]/li[6]/a");
    public static By fileaCompliance = By.xpath("/html/body/div[2]/div/div[2]/footer/div/nav/ul[2]/li[1]/a");
    public static By FAQ = By.xpath("/html/body/div[2]/div/div[2]/footer/div/nav/ul[2]/li[2]/a");
    public static By contactUs = By.xpath("/html/body/div[2]/div/div[2]/footer/div/nav/ul[2]/li[3]/a");
    public static By privacyPolicy = By.xpath("/html/body/div[2]/div/div[2]/footer/div/nav/ul[2]/li[4]/a");
    public static By termsandConditions = By.xpath("/html/body/div[2]/div/div[2]/footer/div/nav/ul[2]/li[5]/a");

    public static void Goto(String page) throws Exception {

        if(page.equals("sendmoney")){
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
        }

    }

    public static void footerGoto(String pag) throws Exception {
        if(pag.equalsIgnoreCase("aboutus")){
            Start.driver.findElement(aboutus).click();
            Thread.sleep(2000);
        }else if(pag.equalsIgnoreCase("leadership")){
            Start.driver.findElement(leadership).click();
            Thread.sleep(2000);
        }else if(pag.equalsIgnoreCase("careers")){
            Start.driver.findElement(careers).click();
            Thread.sleep(2000);
        }else if(pag.equalsIgnoreCase("news")){
            Start.driver.findElement(news).click();
           Thread.sleep(2000);
        }else if(pag.equalsIgnoreCase("payernetwork")){
            Start.driver.findElement(payernetwork).click();
            Thread.sleep(3000);
        }else if(pag.equalsIgnoreCase("compliance")){
            Start.driver.findElement(compliance).click();
            Thread.sleep(3000);
        }else if(pag.equalsIgnoreCase("fileacompliance")){
            Start.driver.findElement(fileaCompliance).click();
            Thread.sleep(3000);
        }else if(pag.equalsIgnoreCase("faq")){
            Start.driver.findElement(FAQ).click();
            Thread.sleep(3000);
        }else if(pag.equalsIgnoreCase("contactus")){
            Start.driver.findElement(contactUs).click();
            Thread.sleep(3000);
        }else if(pag.equalsIgnoreCase("privacypolicy")){
            Start.driver.findElement(privacyPolicy).click();
            Thread.sleep(2000);
        }else if(pag.equalsIgnoreCase("termsandconditions")){
            Start.driver.findElement(termsandConditions).click();
            Thread.sleep(2000);
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