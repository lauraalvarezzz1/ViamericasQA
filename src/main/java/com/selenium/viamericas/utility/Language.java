package com.selenium.viamericas.utility;

import org.openqa.selenium.By;

import java.util.Random;

public class Language {
    public Language() {
        select();
    }

    private String country;
    private String city;
    private String day;
    private String month;
    private String year;
    private String money;
    private String accountType;

    public void select(){
        try {
            if (Start.driver.findElement(By.linkText("About Us")).isDisplayed()){
               English();
            }
        }catch (Exception e)
        {
            Spanish();
        }

;
    }

    public String getCountry() {
        return country;
    }

    public String getCity() {
        return city;
    }

    public String getDay() {
        return day;
    }

    public String getMonth() {
        return month;
    }

    public String getYear() {
        return year;
    }

    public String getMoney() {
        return money;
    }

    public String getAccountType() {
        return accountType;
    }

    private void Spanish (){
        this.country = "País";
        this.city = "Ciudad";
        this.month = "Mes";
        this.day  = "día";
        this.year = "año";
        this.money  = "¿A dónde envía dinero? (opcional)";
        this.accountType = "Tipo de cuenta";
    }

    private void English(){
        this.country = "Country";
        this.city = "City";
        this.day = "Day";
        this.month = "Month";
        this.year = "Year";
        this.money = "Where do you send money? (optional)";
        this.accountType = "Account Type";


    }

}

