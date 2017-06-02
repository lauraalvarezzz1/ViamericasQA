package com.selenium.viamericas.tests;
import com.selenium.viamericas.pages.CompliancePage;
import com.selenium.viamericas.utility.Start;
import org.testng.Assert;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

public class ComplianceTest {
    @BeforeClass
    public void start() throws Exception {Start.initiate("test");}

    @AfterClass
    public void finish() {Start.driver.quit();}

    @Test(enabled = true, priority = 0)
    public void gotocompliance() throws Exception {
        CompliancePage.setGotoCompliance();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("compliance"));}

    @Test(enabled = true, priority = 1)
    public void selectAlabama() throws Exception {
        CompliancePage.setSelectAlabama();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("compliance"));}

    @Test(enabled = true, priority = 2)
    public void selectAlaska() throws Exception {
        CompliancePage.selectAlaska();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("compliance"));}

    @Test(enabled = true, priority = 3)
    public void selectArizona() throws Exception {
        CompliancePage.selectArizona();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("compliance"));}

    @Test(enabled = true, priority = 4)
    public void selectArcanzas() throws Exception {
        CompliancePage.selectArkansas();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("compliance"));}

    @Test(enabled = true, priority = 5)
    public void selectCalifornia() throws Exception {
        CompliancePage.selectCalifornia();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("compliance"));}

    @Test(enabled = true, priority = 6)
    public void selectColorado() throws Exception {
        CompliancePage.selectColorado();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("compliance"));}

    @Test(enabled = true, priority = 7)
    public void selectConnecticut() throws Exception {
        CompliancePage.selectConnecticut();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("compliance"));}

    @Test(enabled = true, priority = 8)
    public void selectDelaware() throws Exception {
        CompliancePage.selectDelaware();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("compliance"));}

    @Test(enabled = true, priority = 9)
    public void selectDistofColumbia() throws Exception {
        CompliancePage.selectDistofColumbia();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("compliance"));}

    @Test(enabled = true, priority = 10)
    public void selectFlorida() throws Exception {
        CompliancePage.selectFlorida();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("compliance"));}

    @Test(enabled = true, priority = 11)
    public void selectGeorgia() throws Exception {
        CompliancePage.selectGeorgia();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("compliance"));}

    @Test(enabled = true, priority = 12)
    public void selectHawaii() throws Exception {
        CompliancePage.selectHawaii();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("compliance"));}

    @Test(enabled = true, priority = 13)
    public void selectIdaho() throws Exception {
        CompliancePage.selectIdaho();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("compliance"));}

    @Test(enabled = true, priority = 14)
    public void selectIllinois() throws Exception {
        CompliancePage.selectIllinois();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("compliance"));}

    @Test(enabled = true, priority = 15)
    public void selectIndiana() throws Exception {
        CompliancePage.selectIndiana();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("compliance"));}

    @Test(enabled = true, priority = 16)
    public void selectIowa() throws Exception {
        CompliancePage.selectIowa();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("compliance"));}

    @Test(enabled = true, priority = 17)
    public void selectKansas() throws Exception {
        CompliancePage.selectKansas();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("compliance"));}

    @Test(enabled = true, priority = 18)
    public void selectKentucky() throws Exception {
        CompliancePage.selectKentucky();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("compliance"));}

    @Test(enabled = true, priority = 19)
    public void selectLouisiana() throws Exception {
        CompliancePage.selectLouisiana();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("compliance"));}

    @Test(enabled = true, priority = 20)
    public void selectMaine() throws Exception {
        CompliancePage.selectMaine();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("compliance"));}

    @Test(enabled = true, priority = 21)
    public void selectMaryland() throws Exception {
        CompliancePage.selectMaryland();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("compliance"));}

    @Test(enabled = true, priority = 22)
    public void selectMassachusetts() throws Exception {
        CompliancePage.selectMassachusetts();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("compliance"));}

    @Test(enabled = true, priority = 23)
    public void selectMichigan() throws Exception {
        CompliancePage.selectMichigan();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("compliance"));}

    @Test(enabled = true, priority = 24)
    public void selectMinnesota() throws Exception {
        CompliancePage.selectMinnesota();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("compliance"));}

    @Test(enabled = true, priority = 25)
    public void selectMississippi() throws Exception {
        CompliancePage.selectMississippi();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("compliance"));}

    @Test(enabled = true, priority = 26)
    public void selectMontana() throws Exception {
        CompliancePage.selectMontana();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("compliance"));}

    @Test(enabled = true, priority = 27)
    public void selectNevada() throws Exception {
        CompliancePage.selectNevada();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("compliance"));}

    @Test(enabled = true, priority = 28)
    public void selectNewHampshire() throws Exception {
        CompliancePage.selectNewHampshire();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("compliance"));}

    @Test(enabled = true, priority = 29)
    public void selectNewJersey() throws Exception {
        CompliancePage.selectNewJersey();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("compliance"));}

    @Test(enabled = true, priority = 30)
    public void selectNewMexico() throws Exception {
        CompliancePage.selectNewMexico();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("compliance"));}

    @Test(enabled = true, priority = 31)
    public void selectNorthCarolina() throws Exception {
        CompliancePage.selectNorthCarolina();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("compliance"));}

    @Test(enabled = true, priority = 32)
    public void selectNorthDakota() throws Exception {
        CompliancePage.selectNorthDakota();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("compliance"));}

    @Test(enabled = true, priority = 33)
    public void selectOhio() throws Exception {
        CompliancePage.selectOhio();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("compliance"));}

    @Test(enabled = true, priority = 34)
    public void selectOklahoma() throws Exception {
        CompliancePage.selectOklahoma();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("compliance"));}

    @Test(enabled = true, priority = 35)
    public void selectOregon() throws Exception {
        CompliancePage.selectOregon();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("compliance"));}

    @Test(enabled = true, priority = 36)
    public void selectPennsylvania() throws Exception {
        CompliancePage.selectPennsylvania();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("compliance"));}

    @Test(enabled = true, priority = 37)
    public void selectRhodeIsland() throws Exception {
        CompliancePage.selectRhodeIsland();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("compliance"));}

    @Test(enabled = true, priority = 38)
    public void selectSouthCarolina() throws Exception {
        CompliancePage.selectSouthCarolina();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("compliance"));}

    @Test(enabled = true, priority = 39)
    public void selectSouthDakota() throws Exception {
        CompliancePage.selectSouthDakota();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("compliance"));}

    @Test(enabled = true, priority = 40)
    public void selectTennessee() throws Exception {
        CompliancePage.selectTennessee();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("compliance"));}

    @Test(enabled = true, priority = 41)
    public void selectTexas() throws Exception {
        CompliancePage.selectTexas();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("compliance"));}

    @Test(enabled = true, priority = 42)
    public void selectUtah() throws Exception {
        CompliancePage.selectUtah();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("compliance"));}

    @Test(enabled = true, priority = 43)
    public void selectVermont() throws Exception {
        CompliancePage.selectVermont();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("compliance"));}

    @Test(enabled = true, priority = 44)
    public void selectVirginia() throws Exception {
        CompliancePage.selectVirginia();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("compliance"));}

    @Test(enabled = true, priority = 45)
    public void selectWashington() throws Exception {
        CompliancePage.selectWashington();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("compliance"));}

    @Test(enabled = true, priority = 46)
    public void selectWestVirginia() throws Exception {
        CompliancePage.selectWestVirginia();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("compliance"));}

    @Test(enabled = true, priority = 47)
    public void selectWisconsin() throws Exception {
        CompliancePage.selectWisconsin();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("compliance"));}

    @Test(enabled = true, priority = 48)
    public void selectWyoming() throws Exception {
        CompliancePage.selectWyoming();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("compliance"));}
}
