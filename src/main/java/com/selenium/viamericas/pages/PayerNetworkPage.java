package com.selenium.viamericas.pages;

import com.selenium.viamericas.utility.Start;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class PayerNetworkPage {

    public static By GotoPayerNetwork = By.xpath("/html/body/div[2]/div/div[2]/footer/div/nav/ul[1]/li[5]/a");
    public static By Country = By.xpath("//*[@id=\"dropdown-input\"]");

    public static void setGotoPayerNetwork() throws Exception {
        Start.driver.findElement(GotoPayerNetwork).click();
        Thread.sleep(5000);}

    public static void selectArgentina() throws Exception {
        Start.driver.findElement(Country).sendKeys("ARGENTINA");
        Start.driver.findElement(Country).sendKeys(Keys.DOWN);
        Start.driver.findElement(Country).sendKeys(Keys.ENTER);
        Thread.sleep(5000);}

    public static void selectAustralia() throws Exception {
        Start.driver.findElement(Country).clear();
        Start.driver.findElement(Country).sendKeys("AUSTRALIA");
        Start.driver.findElement(Country).sendKeys(Keys.DOWN);
        Start.driver.findElement(Country).sendKeys(Keys.ENTER);
        Thread.sleep(5000);}

    public static void selectBangladesh() throws Exception {
        Start.driver.findElement(Country).clear();
        Start.driver.findElement(Country).sendKeys("BANGLADESH");
        Start.driver.findElement(Country).sendKeys(Keys.DOWN);
        Start.driver.findElement(Country).sendKeys(Keys.ENTER);
        Thread.sleep(5000);}

    public static void selectBolivia() throws Exception {
        Start.driver.findElement(Country).clear();
        Start.driver.findElement(Country).sendKeys("BOLIVIA");
        Start.driver.findElement(Country).sendKeys(Keys.DOWN);
        Start.driver.findElement(Country).sendKeys(Keys.ENTER);
        Thread.sleep(5000);}

    public static void selectBrazil() throws Exception {
        Start.driver.findElement(Country).clear();
        Start.driver.findElement(Country).sendKeys("BRAZIL");
        Start.driver.findElement(Country).sendKeys(Keys.DOWN);
        Start.driver.findElement(Country).sendKeys(Keys.ENTER);
        Thread.sleep(5000);}

    public static void selectCanada() throws Exception {
        Start.driver.findElement(Country).clear();
        Start.driver.findElement(Country).sendKeys("CANADA");
        Start.driver.findElement(Country).sendKeys(Keys.DOWN);
        Start.driver.findElement(Country).sendKeys(Keys.ENTER);
        Thread.sleep(5000);}

    public static void selectChile() throws Exception {
        Start.driver.findElement(Country).clear();
        Start.driver.findElement(Country).sendKeys("CHILE");
        Start.driver.findElement(Country).sendKeys(Keys.DOWN);
        Start.driver.findElement(Country).sendKeys(Keys.ENTER);
        Thread.sleep(5000);}

    public static void selectColombia() throws Exception {
        Start.driver.findElement(Country).clear();
        Start.driver.findElement(Country).sendKeys("COLOMBIA");
        Start.driver.findElement(Country).sendKeys(Keys.DOWN);
        Start.driver.findElement(Country).sendKeys(Keys.ENTER);
        Thread.sleep(5000);}

    public static void selectCostaRica() throws Exception {
        Start.driver.findElement(Country).clear();
        Start.driver.findElement(Country).sendKeys("COSTA RICA");
        Start.driver.findElement(Country).sendKeys(Keys.DOWN);
        Start.driver.findElement(Country).sendKeys(Keys.ENTER);
        Thread.sleep(5000);}

    public static void selectDomininicanRepublic() throws Exception {
        Start.driver.findElement(Country).clear();
        Start.driver.findElement(Country).sendKeys("DOMINICAN REPUBLIC");
        Start.driver.findElement(Country).sendKeys(Keys.DOWN);
        Start.driver.findElement(Country).sendKeys(Keys.ENTER);
        Thread.sleep(5000);}

    public static void selectEcuador() throws Exception {
        Start.driver.findElement(Country).clear();
        Start.driver.findElement(Country).sendKeys("ECUADOR");
        Start.driver.findElement(Country).sendKeys(Keys.DOWN);
        Start.driver.findElement(Country).sendKeys(Keys.ENTER);
        Thread.sleep(5000);}

    public static void selectElSalvador() throws Exception {
        Start.driver.findElement(Country).clear();
        Start.driver.findElement(Country).sendKeys("EL SALVADOR");
        Start.driver.findElement(Country).sendKeys(Keys.DOWN);
        Start.driver.findElement(Country).sendKeys(Keys.ENTER);
        Thread.sleep(5000);}

    public static void selectGuatemala() throws Exception {
        Start.driver.findElement(Country).clear();
        Start.driver.findElement(Country).sendKeys("GUATEMALA");
        Start.driver.findElement(Country).sendKeys(Keys.DOWN);
        Start.driver.findElement(Country).sendKeys(Keys.ENTER);
        Thread.sleep(5000);}

    public static void selectGuyana() throws Exception {
        Start.driver.findElement(Country).clear();
        Start.driver.findElement(Country).sendKeys("GUYANA");
        Start.driver.findElement(Country).sendKeys(Keys.DOWN);
        Start.driver.findElement(Country).sendKeys(Keys.ENTER);
        Thread.sleep(5000);}

    public static void selectHaiti() throws Exception {
        Start.driver.findElement(Country).clear();
        Start.driver.findElement(Country).sendKeys("HAITI");
        Start.driver.findElement(Country).sendKeys(Keys.DOWN);
        Start.driver.findElement(Country).sendKeys(Keys.ENTER);
        Thread.sleep(5000);}

    public static void selectHonduras() throws Exception {
        Start.driver.findElement(Country).clear();
        Start.driver.findElement(Country).sendKeys("HONDURAS");
        Start.driver.findElement(Country).sendKeys(Keys.DOWN);
        Start.driver.findElement(Country).sendKeys(Keys.ENTER);
        Thread.sleep(5000);}

    public static void selectHongKong() throws Exception {
        Start.driver.findElement(Country).clear();
        Start.driver.findElement(Country).sendKeys("HONG KONG");
        Start.driver.findElement(Country).sendKeys(Keys.DOWN);
        Start.driver.findElement(Country).sendKeys(Keys.ENTER);
        Thread.sleep(5000);}

    public static void selectIndia() throws Exception {
        Start.driver.findElement(Country).clear();
        Start.driver.findElement(Country).sendKeys("INDIA");
        Start.driver.findElement(Country).sendKeys(Keys.DOWN);
        Start.driver.findElement(Country).sendKeys(Keys.ENTER);
        Thread.sleep(5000);}

    public static void selectIndonesia() throws Exception {
        Start.driver.findElement(Country).clear();
        Start.driver.findElement(Country).sendKeys("INDONESIA");
        Start.driver.findElement(Country).sendKeys(Keys.DOWN);
        Start.driver.findElement(Country).sendKeys(Keys.ENTER);
        Thread.sleep(5000);}

    public static void selectKoreaSouth() throws Exception {
        Start.driver.findElement(Country).clear();
        Start.driver.findElement(Country).sendKeys("KOREA");
        Start.driver.findElement(Country).sendKeys(Keys.DOWN);
        Start.driver.findElement(Country).sendKeys(Keys.ENTER);
        Thread.sleep(5000);}

    public static void selectMalaysia() throws Exception {
        Start.driver.findElement(Country).clear();
        Start.driver.findElement(Country).sendKeys("MALAYSIA");
        Start.driver.findElement(Country).sendKeys(Keys.DOWN);
        Start.driver.findElement(Country).sendKeys(Keys.ENTER);
        Thread.sleep(5000);}

    public static void selectMexico() throws Exception {
        Start.driver.findElement(Country).clear();
        Start.driver.findElement(Country).sendKeys("MEXICO");
        Start.driver.findElement(Country).sendKeys(Keys.DOWN);
        Start.driver.findElement(Country).sendKeys(Keys.ENTER);
        Thread.sleep(5000);}

    public static void selectNepal() throws Exception {
        Start.driver.findElement(Country).clear();
        Start.driver.findElement(Country).sendKeys("NEPAL");
        Start.driver.findElement(Country).sendKeys(Keys.DOWN);
        Start.driver.findElement(Country).sendKeys(Keys.ENTER);
        Thread.sleep(5000);}

    public static void selectNewZealand() throws Exception {
        Start.driver.findElement(Country).clear();
        Start.driver.findElement(Country).sendKeys("NEW ZEALAND");
        Start.driver.findElement(Country).sendKeys(Keys.DOWN);
        Start.driver.findElement(Country).sendKeys(Keys.ENTER);
        Thread.sleep(5000);}

    public static void selectNicaragua() throws Exception {
        Start.driver.findElement(Country).clear();
        Start.driver.findElement(Country).sendKeys("NICARAGUA");
        Start.driver.findElement(Country).sendKeys(Keys.DOWN);
        Start.driver.findElement(Country).sendKeys(Keys.ENTER);
        Thread.sleep(5000);}

    public static void selectPanama() throws Exception {
        Start.driver.findElement(Country).clear();
        Start.driver.findElement(Country).sendKeys("PANAMA");
        Start.driver.findElement(Country).sendKeys(Keys.DOWN);
        Start.driver.findElement(Country).sendKeys(Keys.ENTER);
        Thread.sleep(5000);}

    public static void selectPeru() throws Exception {
        Start.driver.findElement(Country).clear();
        Start.driver.findElement(Country).sendKeys("PERU");
        Start.driver.findElement(Country).sendKeys(Keys.DOWN);
        Start.driver.findElement(Country).sendKeys(Keys.ENTER);
        Thread.sleep(5000);}

    public static void selectPhilippines() throws Exception {
        Start.driver.findElement(Country).clear();
        Start.driver.findElement(Country).sendKeys("PHILIPPINES");
        Start.driver.findElement(Country).sendKeys(Keys.DOWN);
        Start.driver.findElement(Country).sendKeys(Keys.ENTER);
        Thread.sleep(5000);}

    public static void selectSwitzerland() throws Exception {
        Start.driver.findElement(Country).clear();
        Start.driver.findElement(Country).sendKeys("SWITZERLAND");
        Start.driver.findElement(Country).sendKeys(Keys.DOWN);
        Start.driver.findElement(Country).sendKeys(Keys.ENTER);
        Thread.sleep(5000);}

    public static void selectUnitedKigdom() throws Exception {
        Start.driver.findElement(Country).clear();
        Start.driver.findElement(Country).sendKeys("UNITED KINGDOM");
        Start.driver.findElement(Country).sendKeys(Keys.DOWN);
        Start.driver.findElement(Country).sendKeys(Keys.ENTER);
        Thread.sleep(5000);}

    public static void selectUnitedStates() throws Exception {
        Start.driver.findElement(Country).clear();
        Start.driver.findElement(Country).sendKeys("UNITED STATES");
        Start.driver.findElement(Country).sendKeys(Keys.DOWN);
        Start.driver.findElement(Country).sendKeys(Keys.ENTER);
        Thread.sleep(5000);}

    public static void selectUruguay() throws Exception {
        Start.driver.findElement(Country).clear();
        Start.driver.findElement(Country).sendKeys("URUGUAY");
        Start.driver.findElement(Country).sendKeys(Keys.DOWN);
        Start.driver.findElement(Country).sendKeys(Keys.ENTER);
        Thread.sleep(5000);}

    public static void selectVietnam() throws Exception {
        Start.driver.findElement(Country).clear();
        Start.driver.findElement(Country).sendKeys("VIETNAM");
        Start.driver.findElement(Country).sendKeys(Keys.DOWN);
        Start.driver.findElement(Country).sendKeys(Keys.ENTER);
        Thread.sleep(5000);}
}
