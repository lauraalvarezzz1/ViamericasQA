package com.selenium.viamericas.subpages;

import com.selenium.viamericas.utility.DataGenerators;
import com.selenium.viamericas.utility.Start;
import com.selenium.viamericas.utility.Utility;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;

public class PaymentPage {

	public static Utility language = new Utility();

	// BUTTONS
	public static By AddNewAccountButton = By
			.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div[1]/div/div[2]/div/div/div[1]/div[35]/div/button");
	// For this button (ADDNEWACCOUNT) we need to add an id
	public static By DeleteCardButton = By
			.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div[1]/div/div[2]/div/div/div[1]/div[74]/div/div[2]/div/button");
	public static By VerifyAccountButton = By
			.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div[1]/div/div[2]/div/div/div[1]/div[38]/div/div[2]/div/button[1]");
	public static By VerifyAmount1Field = By
			.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div[1]/div/div[2]/div/div/div[2]/form/div[1]/div[1]/input");
	public static By VerifyAmount2Field = By
			.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div[1]/div/div[2]/div/div/div[2]/form/div[2]/div[1]/input");
	public static By VerifyButton = By
			.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div[1]/div/div[2]/div/div/div[2]/form/div[3]/button");
	public static By BankAccountButton = By
			.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div[1]/div/div[2]/div/div/div[3]/div[1]/div[1]/div/div[1]");
	public static By CreditDebitButton = By
			.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div[1]/div/div[2]/div/div/div[3]/div[1]/div[2]/div/div[1]");
	public static By CreateButton = By
			.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div[1]/div/div[2]/div/div/div[3]/div[2]/button");
	public static By ContinueButton = By
			.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div[1]/div/div[2]/div/div/div[2]/form/div[3]/button");
	public static By ConfirmRemoveCard = By
			.xpath("/html/body/div[3]/div[2]/button[1]");
	public static By EditButton = By
			.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div[1]/div/div[2]/div/div/div[1]/div[2]/div/div[2]/div/button[1]");
	public static By SaveChangesButton = By
			.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div[1]/div/div[2]/div/div/div[3]/div[3]/button[1]");


	// CREATE BANK ACCOUNT
	public static By BankAccountHolderName = By
			.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div[1]/div/div[2]/div/div/div[3]/form[1]/div[1]/input");
	public static By BankAccountNickname = By
			.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div[1]/div/div[2]/div/div/div[3]/form[1]/div[2]/input");
	public static By BankRoutingNumber = By
			.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div[1]/div/div[2]/div/div/div[3]/form[1]/div[3]/input");
	public static By BankAccountNumber = By
			.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div[1]/div/div[2]/div/div/div[3]/form[1]/div[4]/input");
	public static By BankAccountType = By
			.xpath(".//*[@placeholder='"+ language.getaccountType()+"']");
	public static By closepopup = By
			.xpath("html/body/div[3]/div[2]/span");
	public static By OKButton = By
			.xpath("/html/body/div[3]/div[2]/button[1]");


	// CREATE CREDIT OR DEBIT CARD
	public static By CardTypes = By
			.xpath(".//*[@placeholder='"+ language.getCardType()+"']");
	public static By CardHolderName = By
			.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div[1]/div/div[2]/div/div/div[3]/form[2]/div[2]/input");
	public static By CardNickname = By
			.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div[1]/div/div[2]/div/div/div[3]/form[2]/div[3]/input"); //OPTIONAL
	public static By CardNumber = By
			.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div[1]/div/div[2]/div/div/div[3]/form[2]/div[4]/input");
	public static By MonthDropdown = By
			.xpath(".//*[@placeholder='"+ language.getMonth()+"']");
	public static By YearDropdown = By
			.xpath(".//*[@placeholder='"+ language.getYear()+"']");
	public static By CVVCode = By
			.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div[1]/div/div[2]/div/div/div[3]/form[2]/div[6]/input");
	public static By WhatIsCVVCodeIcon = By
			.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div[1]/div/div[2]/div/div/div[3]/form[2]/div[6]/a/i");
	public static By ClosePopupCVV = By
			.xpath("/html/body/div[3]/div[2]/span");


	public static void clickoncreatebutton() throws Exception {
		Start.driver.findElement(AddNewAccountButton).click();
		Thread.sleep(4000);
	}

	public static void clickoncreateBankAccount() throws Exception {
		Start.driver.findElement(BankAccountButton).click();
		Thread.sleep(2000);
	}

	public static void clickoncardAccount() throws Exception {
		Start.driver.findElement(CreditDebitButton).click();
		Thread.sleep(2000);
	}

	// Create Bank Account
	public static void addthecardholdername() throws Exception {
		Start.driver.findElement(CardHolderName).sendKeys("JULIA OGDEN");
		Thread.sleep(2000);
	}

	public static void addcardnumber() throws Exception {
		Start.driver.findElement(CardNumber).sendKeys("4929160617587896");
		Thread.sleep(2000);
	}

	public static void addcvvcode() throws Exception {
		Start.driver.findElement(CVVCode).sendKeys("918");
		Thread.sleep(2000);
	}

	public static void selectmonth() throws Exception {
		Start.driver.findElement(MonthDropdown).sendKeys("07");
		Start.driver.findElement(MonthDropdown).sendKeys(Keys.DOWN);
		Start.driver.findElement(MonthDropdown).sendKeys(Keys.ENTER);
		Thread.sleep(1000);
	}

	public static void selectyear() throws Exception {
		Start.driver.findElement(YearDropdown).sendKeys("2018");
		Start.driver.findElement(YearDropdown).sendKeys(Keys.DOWN);
		Start.driver.findElement(YearDropdown).sendKeys(Keys.ENTER);
		Thread.sleep(1000);
	}

	public static void clickoncreateaccount() throws Exception {
		Start.driver.findElement(CreateButton).click();
		Thread.sleep(2000);
	}

	//create bank account
	public static void addbankholdername() throws Exception {
		Start.driver.findElement(BankAccountHolderName).sendKeys("Laura");
		Thread.sleep(2000);
	}

	public static void addbanknickname() throws Exception {
		Start.driver.findElement(BankAccountNickname).sendKeys("Laura");
		Thread.sleep(2000);
	}

	public static void addroutingnumber() throws Exception {
		Start.driver.findElement(BankRoutingNumber).sendKeys("074900783");
		Thread.sleep(2000);
	}

	public static void addaccountnumber() throws Exception {
		Start.driver.findElement(BankAccountNumber).sendKeys(DataGenerators.generateAccountnumber());
		Thread.sleep(2000);
	}


	public static void clickonclosepopup() throws Exception {
		Start.driver.findElement(closepopup).click();
		Thread.sleep(2000);
	}

	public static void createNewBankAccount() throws Exception {
		Thread.sleep(2000);
		Start.driver.findElement(AddNewAccountButton).click();
		Start.driver.findElement(BankAccountButton).click();
		Start.driver.findElement(BankAccountHolderName).sendKeys("Testing Bank Account");
		Start.driver.findElement(BankAccountNickname).sendKeys("Testing Bank Account");
		Start.driver.findElement(BankRoutingNumber).sendKeys("074900783");
		Start.driver.findElement(BankAccountNumber).sendKeys(DataGenerators.generateAccountnumber());
		Start.driver.findElement(BankAccountType).sendKeys("SAVINGS");
		Start.driver.findElement(BankAccountType).sendKeys(Keys.DOWN);
		Start.driver.findElement(BankAccountType).sendKeys(Keys.ENTER);
		Start.driver.findElement(CreateButton).click();
		Start.driver.findElement(OKButton).click();
	}

	public static void createNewCreditCard() throws Exception {
		Thread.sleep(2000);
		Start.driver.findElement(AddNewAccountButton).click();
		Start.driver.findElement(CreditDebitButton).click();
		Start.driver.findElement(CardTypes).sendKeys("Credit Card");
		Start.driver.findElement(CardTypes).sendKeys(Keys.DOWN);
		Start.driver.findElement(CardTypes).sendKeys(Keys.ENTER);
		Start.driver.findElement(CardHolderName).sendKeys("TESTING CREDIT CARD");
		Start.driver.findElement(CardNickname).sendKeys("TESTING CREDIT CARD");
		Start.driver.findElement(CardNumber).sendKeys("5405980000000094");
		Start.driver.findElement(MonthDropdown).sendKeys("12");
		Start.driver.findElement(MonthDropdown).sendKeys(Keys.DOWN);
		Start.driver.findElement(MonthDropdown).sendKeys(Keys.ENTER);
		Start.driver.findElement(YearDropdown).sendKeys("2020");
		Start.driver.findElement(YearDropdown).sendKeys(Keys.DOWN);
		Start.driver.findElement(YearDropdown).sendKeys(Keys.ENTER);
		Start.driver.findElement(CVVCode).sendKeys("918");
		Start.driver.findElement(CreateButton).click();

	}

	public static void createNewDebitCard() throws Exception {
		Thread.sleep(2000);
		Start.driver.findElement(AddNewAccountButton).click();
		Start.driver.findElement(CreditDebitButton).click();
		Start.driver.findElement(CardTypes).sendKeys("Debit Card");
		Start.driver.findElement(CardTypes).sendKeys(Keys.DOWN);
		Start.driver.findElement(CardTypes).sendKeys(Keys.ENTER);
		Start.driver.findElement(CardHolderName).sendKeys("TESTING DEBIT CARD");
		Start.driver.findElement(CardNickname).sendKeys("TESTING DEBIT CARD");
		Start.driver.findElement(CardNumber).sendKeys("5405980000000094");
		Start.driver.findElement(MonthDropdown).sendKeys("12");
		Start.driver.findElement(MonthDropdown).sendKeys(Keys.DOWN);
		Start.driver.findElement(MonthDropdown).sendKeys(Keys.ENTER);
		Start.driver.findElement(YearDropdown).sendKeys("2020");
		Start.driver.findElement(YearDropdown).sendKeys(Keys.DOWN);
		Start.driver.findElement(YearDropdown).sendKeys(Keys.ENTER);
		Start.driver.findElement(CVVCode).sendKeys("919");
		Start.driver.findElement(CreateButton).click();
	}

	public static void setVerifyAccount() throws Exception{
		Thread.sleep(2000);
		Start.driver.findElement(VerifyAccountButton).click();
		Start.driver.findElement(VerifyAmount1Field).sendKeys("0.01");
		Start.driver.findElement(VerifyAmount2Field).sendKeys("0.19");
		Start.driver.findElement(VerifyButton).click();
		Start.driver.findElement(ContinueButton).click();
	}

	public static void setDeleteCreditDebitCard() throws Exception{
		Thread.sleep(2000);
		Start.driver.findElement(DeleteCardButton).click();
		Start.driver.findElement(ConfirmRemoveCard).click();
	}

	public static void setEditBankAccount() throws Exception{
		Thread.sleep(2000);
		Start.driver.findElement(EditButton).click();
		Start.driver.findElement(BankAccountHolderName).sendKeys("Editing Bank Account");
		Start.driver.findElement(BankAccountNickname).sendKeys("Editing Bank Account");
		Start.driver.findElement(BankRoutingNumber).sendKeys("021000021");
		Start.driver.findElement(BankAccountNumber).sendKeys(DataGenerators.generateAccountnumber());
		Start.driver.findElement(BankAccountType).sendKeys("Checking Account");
		Start.driver.findElement(SaveChangesButton).click();

	}

	public static void setChecktheCVVIcon() throws Exception{
		Thread.sleep(2000);
		Start.driver.findElement(AddNewAccountButton).click();
		Start.driver.findElement(CreditDebitButton).click();
		Start.driver.findElement(WhatIsCVVCodeIcon).click();
		Start.driver.findElement(ClosePopupCVV).click();
	}
}
