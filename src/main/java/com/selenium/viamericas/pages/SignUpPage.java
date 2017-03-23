package com.selenium.viamericas.pages;

import com.selenium.viamericas.utility.DataGenerators;
import com.selenium.viamericas.tests.UnionTestsSignUp;
import com.selenium.viamericas.utility.Language;
import org.openqa.selenium.By;
import com.selenium.viamericas.utility.Start;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;

public class SignUpPage {
    WebDriver driver;
    public static Language language = new Language();

    //<---------OBLIGATORY--------->
    public static By emailaddress = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div[2]/div/form/div[1]/input");
    public static By password = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div[2]/div/form/div[2]/input");
    public static By signupbutton2 = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div[2]/div/form/div[3]/div/div[2]/button");
    public static By cancelbutton = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div[2]/div/form/div[3]/div/div[1]/button");

    public static By signupbutton = By.xpath("/html/body/div[2]/div/div[1]/div[1]/header/div/ul/li[3]/button[1]");
    public static By firstname = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div[2]/div/form/div/div[1]/div[1]/input");
    public static By lastname = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div[2]/div/form/div/div[1]/div[2]/input");
    public static By mobilephonenumber = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div[2]/div/form/div/div[2]/div/input");
    public static By addressline1 = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div[2]/div/form/div/div[4]/div[1]/input");
    public static By country = By.xpath(".//*[@placeholder='"+ language.getCountry()+"']");
    public static By stateDropdown = By.xpath(".//*[@placeholder='State']");
    public static By zipcode = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div[2]/div/form/div/div[4]/div[3]/div/div[1]/input");
    public static By cityDropdown = By.xpath(".//*[@placeholder='"+ language.getCity()+"']");
    public static By acceptTCPP = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div[2]/div/form/div/div[4]/div[8]/div[1]/ins");
    public static By createaccountbutton = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div[2]/div/form/div/div[4]/div[10]/div/div[2]/button");
    public static By month = By.xpath(".//*[@placeholder='"+ language.getMonth()+"']");
    public static By day = By.xpath(".//*[@placeholder='"+ language.getDay()+"']");
    public static By year = By.xpath(".//*[@placeholder='"+ language.getYear()+"']");



    //<----------OPTIONAL----------->

    public static By middlename = By.xpath("html/body/div[2]/div/div[1]/div[2]/div/div/div[2]/div/form/div[1]/div[2]/input");
    public static By secondlastname = By.xpath("html/body/div[2]/div/div[1]/div[2]/div/div/div[2]/div/form/div[1]/div[4]/input");
    public static By addressline2 = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div[2]/div/form/div/div[4]/div[2]/input");
    public static By countryofbirth = By.xpath(".//*[@placeholder='Country of Birth']");


    public static By selectoption = By.xpath(".//*[@id='dropdown-list']");
    public static By setclosepupo= By.xpath("/html/body/div[3]/div[2]/button[1]");
    public static By wheredoyousendmoney = By.xpath(".//*[@placeholder='"+ language.getMoney()+"']");
    //*[@id="dropdown-list"]


    public SignUpPage(WebDriver driver) {
        this.driver = driver;
    }

    public static void gotosignupform() throws Exception {
        Start.driver.findElement(signupbutton).click();
        Thread.sleep(2000);
    }

    public static void addemailaddress(String email) throws Exception {
        Thread.sleep(1500);
        Start.driver.findElement(emailaddress).sendKeys(email);
    }

    public static void addpassword(String password1) throws Exception {
        Thread.sleep(1500);
        Start.driver.findElement(password).clear();
        Start.driver.findElement(password).sendKeys(password1);
    }

    public static void clickonsignupbutton() throws Exception {
        Start.driver.findElement(signupbutton2).click();
        Thread.sleep(2000);
    }

    public static void addfirstname(String first) throws Exception {
        Thread.sleep(1500);
        Start.driver.findElement(firstname).clear();
        Start.driver.findElement(firstname).sendKeys(first);
    }

    public static void addlastname(String last) throws Exception {
        Thread.sleep(1500);
        Start.driver.findElement(lastname).clear();
        Start.driver.findElement(lastname).sendKeys(last);
    }

    public static void addmobilephonenumber(String mobile) throws Exception {
        Thread.sleep(1500);
        Start.driver.findElement(mobilephonenumber).clear();
        Start.driver.findElement(mobilephonenumber).sendKeys(mobile);

    }

    public static void addadressline1(String address) throws Exception {
        Thread.sleep(1500);
        Start.driver.findElement(addressline1).clear();
        Start.driver.findElement(addressline1).sendKeys(address);
    }

    public static void addzipcode(String zipcod) throws Exception {
        Thread.sleep(1500);
        Start.driver.findElement(zipcode).clear();
        Start.driver.findElement(zipcode).sendKeys(zipcod);
    }

    public static void selectcountry(String countr) throws Exception {
        Start.driver.findElement(country).sendKeys(countr);
        Start.driver.findElement(country).sendKeys(Keys.DOWN);
        Start.driver.findElement(country).sendKeys(Keys.ENTER);
        Thread.sleep(1000);
    }

    public static void selectstate(String state) throws Exception {
        Start.driver.findElement(stateDropdown).click();
        Start.driver.findElement(stateDropdown).sendKeys(state);
        Start.driver.findElement(stateDropdown).sendKeys(Keys.DOWN);
        Start.driver.findElement(stateDropdown).sendKeys(Keys.ENTER);
        Thread.sleep(2000);
    }

    public static void selectcity(String city) throws Exception {
        Thread.sleep(2000);
        Start.driver.findElement(cityDropdown).sendKeys(city);
        Start.driver.findElement(cityDropdown).sendKeys(Keys.DOWN);
        Start.driver.findElement(cityDropdown).sendKeys(Keys.ENTER);
    }

    public static void setWheredoyousendmoney(String money) throws Exception {
        Start.driver.findElement(wheredoyousendmoney).sendKeys(money);
        Start.driver.findElement(wheredoyousendmoney).sendKeys(Keys.DOWN);
        Start.driver.findElement(wheredoyousendmoney).sendKeys(Keys.ENTER);
        Thread.sleep(2000);
    }

    public static void acceptTCPP() throws Exception {
        Thread.sleep(6000);
        Start.driver.findElement(acceptTCPP).click();

    }

    public static void createbutton() throws Exception {
        Start.driver.findElement(createaccountbutton).click();
        Thread.sleep(6000);
    }

    public static void addmonth(String monthdropdown) throws Exception {
        Start.driver.findElement(month).clear();
        Start.driver.findElement(month).sendKeys(monthdropdown);
    }

    public static void addday(String daydropdown) throws Exception {
        Start.driver.findElement(day).clear();
        Start.driver.findElement(day).sendKeys(daydropdown);
    }

    public static void addyear(String yeardropdown) throws Exception {
        Start.driver.findElement(year).clear();
        Start.driver.findElement(year).sendKeys(yeardropdown);
    }



    //<----------------Optional----------------->

    public static void addmiddlename(String middle) throws Exception {
        Thread.sleep(1500);
        Start.driver.findElement(middlename).clear();
        Start.driver.findElement(middlename).sendKeys(middle);
    }

    public static void addsecondlastname(String second) throws Exception {
        Thread.sleep(1500);
        Start.driver.findElement(secondlastname).clear();
        Start.driver.findElement(secondlastname).sendKeys(second);
    }

    public static void addaddressline2(String address2) throws Exception {
        Thread.sleep(1500);
        Start.driver.findElement(addressline2).clear();
        Start.driver.findElement(addressline2).sendKeys(address2);
    }

    public static void addcountryofbirth(String countryofb) throws Exception {
        Start.driver.findElement(countryofbirth).clear();
        Start.driver.findElement(countryofbirth).sendKeys(countryofb);
    }

    public void selectanyoption() throws InterruptedException {
        Thread.sleep(5000);
        driver.findElement(selectoption).click();

    }

    public static void setclosepupo() throws InterruptedException {
        Thread.sleep(5000);
        Start.driver.findElement(setclosepupo).click();


    }
}
