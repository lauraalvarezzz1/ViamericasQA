package com.selenium.viamericas.utility;

import org.openqa.selenium.By;

import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

public class Utility {
    public Utility() {
        select();
    }

    private String logIn;
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


    //----------------Getters------------------------------
    public String getSelectProgamUnionPlus() {return selectProgamUnionPlus;}
    public String getSelectNameUnionPlus() {return selectNameUnionPlus;}
    public String getCountry() {return country;}
    public String getDiscount(){ return discount; }
    public String getaccountType() {return accountType;}
    public String getChoosebank() {return choosebank;}
    public String getCity() {return city;}
    public String getState() {return state;}
    public String getDay() {return day;}
    public String getMonth() {return month;}
    public String getYear() {return year;}
    public String getMoney() {return money;}
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
        this.choosebank = "Escoger un banco";

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

