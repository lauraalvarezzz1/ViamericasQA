package com.selenium.viamericas.utility;

import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.io.InterruptedIOException;
import java.util.StringTokenizer;
import java.util.prefs.*;

import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

public class Utility {
    public Utility() {
        select();
    }

    //private String logIn;
    private String country;
    private String accountType;
    private String city;
    private String state;
    private String day;
    private String month;
    private String year;
    private String money;
    private String selectProgamUnionPlus;
    private String selectNameUnionPlus;
    private String discount;
    private String choosebank;
    private String cardtype;
    private static final String RECIPIENT = "1";


    //----------------Getters------------------------------
    public String getSelectProgamUnionPlus() {return selectProgamUnionPlus;}
    public String getSelectNameUnionPlus() {return selectNameUnionPlus;}
    public String getCountry() {return country;}
    public String getDiscount(){ return discount; }
    public String getaccountType() {return accountType;}
    public String getChoosebank() {return choosebank;}
    public String getCity() {return city;}
    //public String getState() {return state;}
    public String getDay() {return day;}
    public String getMonth() {return month;}
    public String getYear() {return year;}
    public String getMoney() {return money;}
    public String getCardType() {return cardtype;}
    //-------------------------------------------------

    public void select(){
        try {
            if (Start.driver.findElement(By.linkText("About Us")).isDisplayed()){
                English();
            }
        }catch (Exception e)
        {
            Spanish();
        }
    }
    private void Spanish (){
        this.country = "País";
        this.city = "Ciudad";
        this.day  = "Día";
        this.money  = "¿A dónde envía dinero? (opcional)";
        this.accountType = "Tipo de cuenta";
        this.selectProgamUnionPlus = "Seleccione el programa";
        this.selectNameUnionPlus = "Nombre de sindicato";
        this.choosebank = "Choose a Bank";
        this.cardtype = "Tipo de tarjeta";


    }

    private void English(){
        this.country = "Country";
        this.city = "City";
        this.day = "Day";
        this.month = "Month";
        this.year = "Year";
        this.money = "Where do you send money? (optional)";
        this.accountType = "Account Type";
        this.selectProgamUnionPlus = "Select Program";
        this.selectNameUnionPlus = "Union Name";
        this.discount = "Select Discount";
        this.state = "State";
        this.choosebank = "Choose a Bank";
        this.cardtype = "Choose a Bank";

    }

    public static String getDestinationCountry(){
        String countries[]= new String[31];
        countries[0]="ARGENTINA";
        countries[1]="AUSTRALIA";
        countries[2]="BANGLADESH";
        countries[3]="BOLIVIA";
        countries[4]="BRAZIL";
        countries[5]="CANADA";
        countries[6]="CHILE";
        countries[7]="COLOMBIA";
        countries[8]="COSTA RICA";
        countries[9]="DOMINICAN REPUBLIC";
        countries[10]="ECUADOR";
        countries[11]="EL SALVADOR";
        countries[12]="GUATEMALA";
        countries[13]="GUYANA";
        countries[14]="HONDURAS";
        countries[15]="HONG KONG";
        countries[16]="INDIA";
        countries[17]="INDONESIA";
        countries[18]="KOREA, SOUTH";
        countries[19]="MALAYSIA";
        countries[20]="MEXICO";
        countries[21]="NEPAL";
        countries[22]="NEW ZEALAND";
        countries[23]="NICARAGUA";
        countries[24]="PERU";
        countries[25]="PHILIPPINES";
        countries[26]="SPAIN";
        countries[27]="SWITZERLAND";
        countries[28]="TRINIDAD AND TOBAGO";
        countries[29]="UNITED KINGDOM";
        countries[30]="VIETNAM";
        int country = (int) (Math.random() * (31 - 1)) + 1;
        return countries[country];
    }
    public static String getDestinationPaymentMethod(){
        String paymentMethods[]= new String[2];
        paymentMethods[0]="BANK DEPOSIT";
        paymentMethods[1]="CASH PICKUP";
        int method = (int) (Math.random() * (2 - 1)) + 1;
        return paymentMethods[method];
    }


    public static void waitForSomethingClickable(By in)
    {
        WebDriverWait wait = new WebDriverWait(Start.driver, 15);
        wait.until(ExpectedConditions.elementToBeClickable(in));
    }
    public static Boolean isSomethingClickable(By in)
    {
        WebDriverWait wait = new WebDriverWait(Start.driver, 5);
        Boolean isPresent = Start.driver.findElements(in).size() > 0;
        return isPresent;
    }

    public static void saveRecipient() {

        int recipientNumber = Integer.parseInt(readRecipient()) + 1;
        //int recipientNumber = 1;
        System.out.printf(String.valueOf(recipientNumber));
        Preferences prefs = Preferences.userNodeForPackage(Utility.class);
        prefs.put(RECIPIENT, String.valueOf(recipientNumber));
    }

    public static String readRecipient() {
        Preferences prefs = Preferences.userNodeForPackage(Utility.class);
        return prefs.get(RECIPIENT, "1");
    }



    public static String getProperty(String property)
    {
        Properties prop = new Properties();
        InputStream input = null;
        String gotProp = null;
        try
        {

            String filename = "variables.properties";
            input = Utility.class.getClassLoader().getResourceAsStream(filename);
            if (input == null)
            {
                System.out.println("Sorry, unable to find " + filename);
            }

            //load a properties file from class path, inside static method
            prop.load(input);
            //get the property value and print it out
            gotProp = prop.getProperty(property);

        }
        catch (IOException ex)
        {
            ex.printStackTrace();
        }
        finally
        {
            if (input != null)
            {
                try
                {
                    input.close();
                }
                catch (IOException e)
                {
                    e.printStackTrace();
                }
            }
        }

        return gotProp;
    }
}

