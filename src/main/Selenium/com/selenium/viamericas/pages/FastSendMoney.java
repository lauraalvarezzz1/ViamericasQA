package com.selenium.viamericas.pages;

import com.selenium.viamericas.utility.Utility;
import org.openqa.selenium.By;

/**
 * Created by lauraalvarez on 6/12/17.
 */
public class FastSendMoney {
    public static Utility language = new Utility();
    public static By countrydropdown = By.xpath(".//*[@placeholder='Country']");
    public static By sendAmount = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div/form/div[1]/div[2]/div[5]/div[1]/div/input");
    public static By firstButton = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div/form/div[1]/div[2]/div[2]/div[1]/div[1]/div");
    public static By secondButton = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div/form/div[1]/div[2]/div[2]/div[1]/div[2]/div");
    public static By bankdropdown = By.xpath(".//*[@placeholder='"+ language.getChoosebank()+"']");
    public static By continueButton = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div/form/div[2]/button[2]");
    public static By backButton = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div/form/div[2]/button[1]");
    public static By exchangerate = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div/form/div[1]/div[2]/div[6]/div");
    public static By sendAmountGuest = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div/form/div[1]/div[2]/div[4]/div[1]/div/input");
    public static By oklahomaState = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div/form/div[1]/div[2]/div[4]/label/div/ins");
    public static By oklahoma = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div/form/div[1]/div[2]/div[4]/label/div/ins");

    //<---------OBLIGATORY--------->
    public static By firstname = By.xpath("html/body/div[2]/div/div[1]/div[2]/div[1]/div/div/form/div[1]/div[2]/div[2]/input");
    public static By lastname = By.xpath("html/body/div[2]/div/div[1]/div[2]/div[1]/div/div/form/div[1]/div[2]/div[4]/input");
    public static By phonenumber = By.xpath("html/body/div[2]/div/div[1]/div[2]/div[1]/div/div/form/div[1]/div[2]/div[6]/input");
    public static By addressline1 = By.xpath("html/body/div[2]/div/div[1]/div[2]/div[1]/div/div/form/div[1]/div[2]/div[9]/input");
    public static By emailaddress = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div[1]/div/div/form/div[1]/div[2]/div[7]/input");

    public static By month = By.xpath(".//*[@placeholder='"+ language.getMonth()+"']");
    public static By day = By.xpath(".//*[@placeholder='"+ language.getDay()+"']");
    public static By year = By.xpath(".//*[@placeholder='"+ language.getYear()+"']");

    public static By state = By.xpath(".//*[@placeholder='State']");
    public static By city = By.xpath(".//*[@placeholder='City']");

    public static By bankaccountbutton = By.xpath("html/body/div[2]/div/div[1]/div[2]/div/div/div/form/div[1]/div[2]/div[1]/div[1]/div/div");
    public static By creditaccountbutton = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div/form/div[1]/div[2]/div[1]/div[2]/div/div");

    //<--------BANK ACCOUNT BUTTON--------->
    public static By accountholdername = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div/form/div[1]/div[2]/div[2]/input");
    public static By accountnickname = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div/form/div[1]/div[2]/div[3]/input");
    public static By routingname = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div/form/div[1]/div[2]/div[4]/input");
    public static By accountnumber = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div/form/div[1]/div[2]/div[5]/input");
    public static By accounttype = By.xpath(".//*[@placeholder='"+ language.getaccountType()+"']");

    //<--------CREDIT/DEBIT BUTTON----------->
    public static By cardholdername = By.xpath("html/body/div[2]/div/div[1]/div[2]/div/div/div/form/div[1]/div[2]/div[3]/input");
    public static By cardnickname = By.xpath("html/body/div[2]/div/div[1]/div[2]/div/div/div/form/div[1]/div[2]/div[4]/input");
    public static By cardnumber = By.xpath("html/body/div[2]/div/div[1]/div[2]/div/div/div/form/div[1]/div[2]/div[5]/input");
    public static By monthdropdown = By.xpath(".//*[@placeholder='"+ language.getMonth()+"']");
    public static By yeardropdown = By.xpath(".//*[@placeholder='"+ language.getYear()+"']");
    public static By CVVcode = By.xpath("html/body/div[2]/div/div[1]/div[2]/div/div/div/form/div[1]/div[2]/div[7]/input");
    public static By closepopup = By.xpath("/html/body/div[3]/div[2]/button[1]");
    public static By cardtype = By.xpath(".//*[@placeholder='Card Type'");

}
