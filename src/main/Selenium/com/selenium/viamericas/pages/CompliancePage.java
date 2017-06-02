package com.selenium.viamericas.pages;

import com.selenium.viamericas.utility.Start;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;

/**
 * Created by lauraalvarez on 8/02/17.
 */
public class CompliancePage {
    public static By ComplianceLabel = By.xpath("/html/body/div[2]/div/div[2]/footer/div/nav/ul[1]/li[6]/a");
    public static By State = By.xpath("//*[@id=\"dropdown-input\"]");

    public static void setGotoCompliance() throws Exception {
        Start.driver.findElement(ComplianceLabel).click();
        Thread.sleep(5000);}

    public static void setSelectAlabama() throws Exception {
        Start.driver.findElement(State).sendKeys("ALABAMA");
        Start.driver.findElement(State).sendKeys(Keys.DOWN);
        Start.driver.findElement(State).sendKeys(Keys.ENTER);
        Thread.sleep(5000);}

    public static void selectAlaska() throws Exception {
        Start.driver.findElement(State).clear();
        Start.driver.findElement(State).sendKeys("ALASKA");
        Start.driver.findElement(State).sendKeys(Keys.DOWN);
        Start.driver.findElement(State).sendKeys(Keys.ENTER);
        Thread.sleep(5000);}

    public static void selectArizona() throws Exception {
        Start.driver.findElement(State).clear();
        Start.driver.findElement(State).sendKeys("ARIZONA");
        Start.driver.findElement(State).sendKeys(Keys.DOWN);
        Start.driver.findElement(State).sendKeys(Keys.ENTER);
        Thread.sleep(5000);}

    public static void selectArkansas() throws Exception {
        Start.driver.findElement(State).clear();
        Start.driver.findElement(State).sendKeys("ARKANSAS");
        Start.driver.findElement(State).sendKeys(Keys.DOWN);
        Start.driver.findElement(State).sendKeys(Keys.ENTER);
        Thread.sleep(5000);}

    public static void selectCalifornia() throws Exception {
        Start.driver.findElement(State).clear();
        Start.driver.findElement(State).sendKeys("CALIFORNIA");
        Start.driver.findElement(State).sendKeys(Keys.DOWN);
        Start.driver.findElement(State).sendKeys(Keys.ENTER);
        Thread.sleep(5000);}

    public static void selectColorado() throws Exception {
        Start.driver.findElement(State).clear();
        Start.driver.findElement(State).sendKeys("COLORADO");
        Start.driver.findElement(State).sendKeys(Keys.DOWN);
        Start.driver.findElement(State).sendKeys(Keys.ENTER);
        Thread.sleep(5000);}

    public static void selectConnecticut() throws Exception {
        Start.driver.findElement(State).clear();
        Start.driver.findElement(State).sendKeys("CONNECTICUT");
        Start.driver.findElement(State).sendKeys(Keys.DOWN);
        Start.driver.findElement(State).sendKeys(Keys.ENTER);
        Thread.sleep(5000);}

    public static void selectDelaware() throws Exception {
        Start.driver.findElement(State).clear();
        Start.driver.findElement(State).sendKeys("DELAWARE");
        Start.driver.findElement(State).sendKeys(Keys.DOWN);
        Start.driver.findElement(State).sendKeys(Keys.ENTER);
        Thread.sleep(5000);}

    public static void selectDistofColumbia() throws Exception {
        Start.driver.findElement(State).clear();
        Start.driver.findElement(State).sendKeys("DIST. OF COLUMBIA");
        Start.driver.findElement(State).sendKeys(Keys.DOWN);
        Start.driver.findElement(State).sendKeys(Keys.ENTER);
        Thread.sleep(5000);}

    public static void selectFlorida() throws Exception {
        Start.driver.findElement(State).clear();
        Start.driver.findElement(State).sendKeys("FLORIDA");
        Start.driver.findElement(State).sendKeys(Keys.DOWN);
        Start.driver.findElement(State).sendKeys(Keys.ENTER);
        Thread.sleep(5000);}

    public static void selectGeorgia() throws Exception {
        Start.driver.findElement(State).clear();
        Start.driver.findElement(State).sendKeys("GEORGIA");
        Start.driver.findElement(State).sendKeys(Keys.DOWN);
        Start.driver.findElement(State).sendKeys(Keys.ENTER);
        Thread.sleep(5000);}

    public static void selectHawaii() throws Exception {
        Start.driver.findElement(State).clear();
        Start.driver.findElement(State).sendKeys("HAWAII");
        Start.driver.findElement(State).sendKeys(Keys.DOWN);
        Start.driver.findElement(State).sendKeys(Keys.ENTER);
        Thread.sleep(5000);}

    public static void selectIdaho() throws Exception {
        Start.driver.findElement(State).clear();
        Start.driver.findElement(State).sendKeys("IDAHO");
        Start.driver.findElement(State).sendKeys(Keys.DOWN);
        Start.driver.findElement(State).sendKeys(Keys.ENTER);
        Thread.sleep(5000);}

    public static void selectIllinois() throws Exception {
        Start.driver.findElement(State).clear();
        Start.driver.findElement(State).sendKeys("ILLINOIS");
        Start.driver.findElement(State).sendKeys(Keys.DOWN);
        Start.driver.findElement(State).sendKeys(Keys.ENTER);
        Thread.sleep(5000);}

    public static void selectIndiana() throws Exception {
        Start.driver.findElement(State).clear();
        Start.driver.findElement(State).sendKeys("INDIANA");
        Start.driver.findElement(State).sendKeys(Keys.DOWN);
        Start.driver.findElement(State).sendKeys(Keys.ENTER);
        Thread.sleep(5000);}

    public static void selectIowa() throws Exception {
        Start.driver.findElement(State).clear();
        Start.driver.findElement(State).sendKeys("IOWA");
        Start.driver.findElement(State).sendKeys(Keys.DOWN);
        Start.driver.findElement(State).sendKeys(Keys.ENTER);
        Thread.sleep(5000);}

    public static void selectKansas() throws Exception {
        Start.driver.findElement(State).clear();
        Start.driver.findElement(State).sendKeys("KANSAS");
        Start.driver.findElement(State).sendKeys(Keys.DOWN);
        Start.driver.findElement(State).sendKeys(Keys.ENTER);
        Thread.sleep(5000);}

    public static void selectKentucky() throws Exception {
        Start.driver.findElement(State).clear();
        Start.driver.findElement(State).sendKeys("KENTUCKY");
        Start.driver.findElement(State).sendKeys(Keys.DOWN);
        Start.driver.findElement(State).sendKeys(Keys.ENTER);
        Thread.sleep(5000);}

    public static void selectLouisiana() throws Exception {
        Start.driver.findElement(State).clear();
        Start.driver.findElement(State).sendKeys("LOUISIANA");
        Start.driver.findElement(State).sendKeys(Keys.DOWN);
        Start.driver.findElement(State).sendKeys(Keys.ENTER);
        Thread.sleep(5000);}

    public static void selectMaine() throws Exception {
        Start.driver.findElement(State).clear();
        Start.driver.findElement(State).sendKeys("MAINE");
        Start.driver.findElement(State).sendKeys(Keys.DOWN);
        Start.driver.findElement(State).sendKeys(Keys.ENTER);
        Thread.sleep(5000);}

    public static void selectMaryland() throws Exception {
        Start.driver.findElement(State).clear();
        Start.driver.findElement(State).sendKeys("MARYLAND");
        Start.driver.findElement(State).sendKeys(Keys.DOWN);
        Start.driver.findElement(State).sendKeys(Keys.ENTER);
        Thread.sleep(5000);}

    public static void selectMassachusetts() throws Exception {
        Start.driver.findElement(State).clear();
        Start.driver.findElement(State).sendKeys("MASSACHUSETTS");
        Start.driver.findElement(State).sendKeys(Keys.DOWN);
        Start.driver.findElement(State).sendKeys(Keys.ENTER);
        Thread.sleep(5000);}

    public static void selectMichigan() throws Exception {
        Start.driver.findElement(State).clear();
        Start.driver.findElement(State).sendKeys("MICHIGAN");
        Start.driver.findElement(State).sendKeys(Keys.DOWN);
        Start.driver.findElement(State).sendKeys(Keys.ENTER);
        Thread.sleep(5000);}

    public static void selectMinnesota() throws Exception {
        Start.driver.findElement(State).clear();
        Start.driver.findElement(State).sendKeys("MINNESOTA");
        Start.driver.findElement(State).sendKeys(Keys.DOWN);
        Start.driver.findElement(State).sendKeys(Keys.ENTER);
        Thread.sleep(5000);}

    public static void selectMississippi() throws Exception {
        Start.driver.findElement(State).clear();
        Start.driver.findElement(State).sendKeys("MISSISSIPPI");
        Start.driver.findElement(State).sendKeys(Keys.DOWN);
        Start.driver.findElement(State).sendKeys(Keys.ENTER);
        Thread.sleep(5000);}

    public static void selectMontana() throws Exception {
        Start.driver.findElement(State).clear();
        Start.driver.findElement(State).sendKeys("MONTANA");
        Start.driver.findElement(State).sendKeys(Keys.DOWN);
        Start.driver.findElement(State).sendKeys(Keys.ENTER);
        Thread.sleep(5000);}

    public static void selectNevada() throws Exception {
        Start.driver.findElement(State).clear();
        Start.driver.findElement(State).sendKeys("NEVADA");
        Start.driver.findElement(State).sendKeys(Keys.DOWN);
        Start.driver.findElement(State).sendKeys(Keys.ENTER);
        Thread.sleep(5000);}

    public static void selectNewHampshire() throws Exception {
        Start.driver.findElement(State).clear();
        Start.driver.findElement(State).sendKeys("NEW HAMPSHIRE");
        Start.driver.findElement(State).sendKeys(Keys.DOWN);
        Start.driver.findElement(State).sendKeys(Keys.ENTER);
        Thread.sleep(5000);}

    public static void selectNewJersey() throws Exception {
        Start.driver.findElement(State).clear();
        Start.driver.findElement(State).sendKeys("NEW JERSEY");
        Start.driver.findElement(State).sendKeys(Keys.DOWN);
        Start.driver.findElement(State).sendKeys(Keys.ENTER);
        Thread.sleep(5000);}

    public static void selectNewMexico() throws Exception {
        Start.driver.findElement(State).clear();
        Start.driver.findElement(State).sendKeys("NEW MEXICO");
        Start.driver.findElement(State).sendKeys(Keys.DOWN);
        Start.driver.findElement(State).sendKeys(Keys.ENTER);
        Thread.sleep(5000);}

    public static void selectNorthCarolina() throws Exception {
        Start.driver.findElement(State).clear();
        Start.driver.findElement(State).sendKeys("NORTH CAROLINA");
        Start.driver.findElement(State).sendKeys(Keys.DOWN);
        Start.driver.findElement(State).sendKeys(Keys.ENTER);
        Thread.sleep(5000);}

    public static void selectNorthDakota() throws Exception {
        Start.driver.findElement(State).clear();
        Start.driver.findElement(State).sendKeys("NORTH DAKOTA");
        Start.driver.findElement(State).sendKeys(Keys.DOWN);
        Start.driver.findElement(State).sendKeys(Keys.ENTER);
        Thread.sleep(5000);}

    public static void selectOhio() throws Exception {
        Start.driver.findElement(State).clear();
        Start.driver.findElement(State).sendKeys("OHIO");
        Start.driver.findElement(State).sendKeys(Keys.DOWN);
        Start.driver.findElement(State).sendKeys(Keys.ENTER);
        Thread.sleep(5000);}

    public static void selectOklahoma() throws Exception {
        Start.driver.findElement(State).clear();
        Start.driver.findElement(State).sendKeys("OKLAHOMA");
        Start.driver.findElement(State).sendKeys(Keys.DOWN);
        Start.driver.findElement(State).sendKeys(Keys.ENTER);
        Thread.sleep(5000);}

    public static void selectOregon() throws Exception {
        Start.driver.findElement(State).clear();
        Start.driver.findElement(State).sendKeys("OREGON");
        Start.driver.findElement(State).sendKeys(Keys.DOWN);
        Start.driver.findElement(State).sendKeys(Keys.ENTER);
        Thread.sleep(5000);}

    public static void selectPennsylvania() throws Exception {
        Start.driver.findElement(State).clear();
        Start.driver.findElement(State).sendKeys("PENNSYLVANIA");
        Start.driver.findElement(State).sendKeys(Keys.DOWN);
        Start.driver.findElement(State).sendKeys(Keys.ENTER);
        Thread.sleep(5000);}

    public static void selectRhodeIsland() throws Exception {
        Start.driver.findElement(State).clear();
        Start.driver.findElement(State).sendKeys("RHODE ISLAND");
        Start.driver.findElement(State).sendKeys(Keys.DOWN);
        Start.driver.findElement(State).sendKeys(Keys.ENTER);
        Thread.sleep(5000);}

    public static void selectSouthCarolina() throws Exception {
        Start.driver.findElement(State).clear();
        Start.driver.findElement(State).sendKeys("SOUTH CAROLINA");
        Start.driver.findElement(State).sendKeys(Keys.DOWN);
        Start.driver.findElement(State).sendKeys(Keys.ENTER);
        Thread.sleep(5000);}

    public static void selectSouthDakota() throws Exception {
        Start.driver.findElement(State).clear();
        Start.driver.findElement(State).sendKeys("SOUTH DAKOTA");
        Start.driver.findElement(State).sendKeys(Keys.DOWN);
        Start.driver.findElement(State).sendKeys(Keys.ENTER);
        Thread.sleep(5000);}

    public static void selectTennessee() throws Exception {
        Start.driver.findElement(State).clear();
        Start.driver.findElement(State).sendKeys("TENNESSEE");
        Start.driver.findElement(State).sendKeys(Keys.DOWN);
        Start.driver.findElement(State).sendKeys(Keys.ENTER);
        Thread.sleep(5000);}

    public static void selectTexas() throws Exception {
        Start.driver.findElement(State).clear();
        Start.driver.findElement(State).sendKeys("TEXAS");
        Start.driver.findElement(State).sendKeys(Keys.DOWN);
        Start.driver.findElement(State).sendKeys(Keys.ENTER);
        Thread.sleep(5000);}

    public static void selectUtah() throws Exception {
        Start.driver.findElement(State).clear();
        Start.driver.findElement(State).sendKeys("UTAH");
        Start.driver.findElement(State).sendKeys(Keys.DOWN);
        Start.driver.findElement(State).sendKeys(Keys.ENTER);
        Thread.sleep(5000);}

    public static void selectVermont() throws Exception {
        Start.driver.findElement(State).clear();
        Start.driver.findElement(State).sendKeys("VERMONT");
        Start.driver.findElement(State).sendKeys(Keys.DOWN);
        Start.driver.findElement(State).sendKeys(Keys.ENTER);
        Thread.sleep(5000);}

    public static void selectVirginia() throws Exception {
        Start.driver.findElement(State).clear();
        Start.driver.findElement(State).sendKeys("VIRGINIA");
        Start.driver.findElement(State).sendKeys(Keys.DOWN);
        Start.driver.findElement(State).sendKeys(Keys.ENTER);
        Thread.sleep(5000);}

    public static void selectWashington() throws Exception {
        Start.driver.findElement(State).clear();
        Start.driver.findElement(State).sendKeys("WASHINGTON");
        Start.driver.findElement(State).sendKeys(Keys.DOWN);
        Start.driver.findElement(State).sendKeys(Keys.ENTER);
        Thread.sleep(5000);}

    public static void selectWestVirginia() throws Exception {
        Start.driver.findElement(State).clear();
        Start.driver.findElement(State).sendKeys("WEST VIRGINIA");
        Start.driver.findElement(State).sendKeys(Keys.DOWN);
        Start.driver.findElement(State).sendKeys(Keys.ENTER);
        Thread.sleep(5000);}

    public static void selectWisconsin() throws Exception {
        Start.driver.findElement(State).clear();
        Start.driver.findElement(State).sendKeys("WISCONSIN");
        Start.driver.findElement(State).sendKeys(Keys.DOWN);
        Start.driver.findElement(State).sendKeys(Keys.ENTER);
        Thread.sleep(5000);}

    public static void selectWyoming() throws Exception {
        Start.driver.findElement(State).clear();
        Start.driver.findElement(State).sendKeys("WYOMING");
        Start.driver.findElement(State).sendKeys(Keys.DOWN);
        Start.driver.findElement(State).sendKeys(Keys.ENTER);
        Thread.sleep(5000);}

}
