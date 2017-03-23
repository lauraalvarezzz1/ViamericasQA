package com.selenium.viamericas.tests;

import com.selenium.viamericas.pages.HomePage;
import com.selenium.viamericas.pages.LoginPage;
import com.selenium.viamericas.pages.PayerNetworkPage;
import com.selenium.viamericas.utility.Start;
import org.testng.Assert;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

public class PayerNetwokTest {

    @BeforeClass
    public void start() throws Exception {Start.initiate("test");}

    @AfterClass
    public void finish() {
        Start.driver.quit();
    }

    @Test(enabled = true, priority = 0)
    public void gotopayernetwork() throws Exception {
        PayerNetworkPage.setGotoPayerNetwork();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("correspondents"));}

    @Test(enabled = true, priority = 1)
    public void selectoptionforargentina() throws Exception {
        PayerNetworkPage.selectArgentina();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("correspondents"));}

    @Test(enabled = true, priority = 2)
    public void selectoptionforaustralia() throws Exception {
        PayerNetworkPage.selectAustralia();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("correspondents"));}

    @Test(enabled = true, priority = 3)
    public void selectoptionforbangladesh() throws Exception {
        PayerNetworkPage.selectBangladesh();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("correspondents"));}

    @Test(enabled = true, priority = 4)
    public void selectoptionforbrazil() throws Exception {
        PayerNetworkPage.selectBrazil();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("correspondents"));}

    @Test(enabled = true, priority = 5)
    public void selectoptionforcanada() throws Exception {
        PayerNetworkPage.selectCanada();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("correspondents"));}

    @Test(enabled = true, priority = 6)
    public void selectoptionforchile() throws Exception {
        PayerNetworkPage.selectChile();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("correspondents"));}

    @Test(enabled = true, priority = 7)
    public void selectoptionforcolombia() throws Exception {
        PayerNetworkPage.selectColombia();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("correspondents"));}

    @Test(enabled = true, priority = 8)
    public void selectoptionforcostarica() throws Exception {
        PayerNetworkPage.selectCostaRica();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("correspondents"));}

    @Test(enabled = true, priority = 9)
    public void selectoptionfordominicanrepublic() throws Exception {
        PayerNetworkPage.selectDomininicanRepublic();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("correspondents"));}

    @Test(enabled = true, priority = 10)
    public void selectoptionforecuador() throws Exception {
        PayerNetworkPage.selectEcuador();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("correspondents"));}

    @Test(enabled = true, priority = 11)
    public void selectoptionforelsalvador() throws Exception {
        PayerNetworkPage.selectElSalvador();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("correspondents"));}

    @Test(enabled = true, priority = 12)
    public void selectoptionforguatemala() throws Exception {
        PayerNetworkPage.selectGuatemala();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("correspondents"));}

    @Test(enabled = true, priority = 13)
    public void selectoptionforguyana() throws Exception {
        PayerNetworkPage.selectGuyana();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("correspondents"));}

    @Test(enabled = true, priority = 14)
    public void selectoptionforhaiti() throws Exception {
        PayerNetworkPage.selectHaiti();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("correspondents"));}

    @Test(enabled = true, priority = 15)
    public void selectoptionforhonduras() throws Exception {
        PayerNetworkPage.selectHonduras();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("correspondents"));}

    @Test(enabled = true, priority = 16)
    public void selectoptionforhongkong() throws Exception {
        PayerNetworkPage.selectHongKong();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("correspondents"));}

    @Test(enabled = true, priority = 17)
    public void selectoptionforindia() throws Exception {
        PayerNetworkPage.selectIndia();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("correspondents"));}

    @Test(enabled = true, priority = 18)
    public void selectoptionforindonesia() throws Exception {
        PayerNetworkPage.selectIndonesia();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("correspondents"));}

    @Test(enabled = true, priority = 19)
    public void selectoptionforkorea() throws Exception {
        PayerNetworkPage.selectKoreaSouth();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("correspondents"));}

    @Test(enabled = true, priority = 20)
    public void selectoptionformalaysia() throws Exception {
        PayerNetworkPage.selectMalaysia();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("correspondents"));}

    @Test(enabled = true, priority = 21)
    public void selectoptionformexico() throws Exception {
        PayerNetworkPage.selectMexico();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("correspondents"));}

    @Test(enabled = true, priority = 22)
    public void selectoptionfornepal() throws Exception {
        PayerNetworkPage.selectNepal();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("correspondents"));}

    @Test(enabled = true, priority = 23)
    public void selectoptionfornewzealand() throws Exception {
        PayerNetworkPage.selectNewZealand();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("correspondents"));}

    @Test(enabled = true, priority = 24)
    public void selectoptionfornicaragua() throws Exception {
        PayerNetworkPage.selectNicaragua();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("correspondents"));}

    @Test(enabled = true, priority = 25)
    public void selectoptionforpanama() throws Exception {
        PayerNetworkPage.selectPanama();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("correspondents"));}

    @Test(enabled = true, priority = 26)
    public void selectoptionforperu() throws Exception {
        PayerNetworkPage.selectPeru();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("correspondents"));}

    @Test(enabled = true, priority = 27)
    public void selectoptionforPhilippines() throws Exception {
        PayerNetworkPage.selectPhilippines();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("correspondents"));}

    @Test(enabled = true, priority = 28)
    public void selectoptionforSwitzerland() throws Exception {
        PayerNetworkPage.selectSwitzerland();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("correspondents"));}

    @Test(enabled = true, priority = 29)
    public void selectoptionforUnitedKigdom() throws Exception {
        PayerNetworkPage.selectUnitedKigdom();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("correspondents"));}

    @Test(enabled = true, priority = 30)
    public void selectoptionforUnitedStates() throws Exception {
        PayerNetworkPage.selectUnitedStates();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("correspondents"));}

    @Test(enabled = true, priority = 31)
    public void selectoptionforUruguay() throws Exception {
        PayerNetworkPage.selectUruguay();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("correspondents"));}

    @Test(enabled = true, priority = 32)
    public void selectoptionforVietnam() throws Exception {
        PayerNetworkPage.selectVietnam();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("correspondents"));}
}
