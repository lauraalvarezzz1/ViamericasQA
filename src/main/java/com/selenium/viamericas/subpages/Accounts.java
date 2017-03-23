package com.selenium.viamericas.subpages;

import com.selenium.viamericas.utility.DataGenerators;
import com.selenium.viamericas.utility.Start;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;

public class Accounts {

	// It's optional because here is created the page: ProfileSettings
	public static By LoginLabel = By.xpath("html/body/div[2]/div/div[1]/div[1]/header/div/ul/li[3]/a");
	public static By UsernameInput = By
			.xpath("html/body/div[2]/div/div[1]/div[2]/div/div/div[2]/div/form/div[1]/input");
	public static By PasswordInput = By
			.xpath("html/body/div[2]/div/div[1]/div[2]/div/div/div[2]/div/form/div[2]/input");
	public static By SignInButton = By
			.xpath("html/body/div[2]/div/div[1]/div[2]/div/div/div[2]/div/form/div[4]/button");
	public static By MyAccountLabel = 
			By.xpath("html/body/div[2]/div/div[1]/div[1]/header/div/ul/li[4]/a");

	// <-----------ACCOUNTS SECTION------------->
	public static By AccountsLabel = By.xpath("html/body/div[2]/div/div[1]/div[2]/div/div/div/div[1]/ul/li[4]/a");

	// Buttons
	public static By DeleteAccountButton = By
			.xpath("html/body/div[2]/div/div[1]/div[2]/div/div/div/div[2]/div/div/div[2]/div[2]/div[2]/button");
	public static By VerifyAccountButton = By
			.xpath("html/body/div[2]/div/div[1]/div[2]/div/div/div/div[2]/div/div/div[2]/div[1]/div[2]/button[1]");
	public static By CreateAccountButton = By
			.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div/div[2]/div/div/div[1]/div/button");
	public static By CreateBankAccountButton = By
			.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div/div[2]/div/div/div[4]/div[1]/div[1]/div/div");
	public static By CreateCardAccountButton = By
			.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div/div[2]/div/div/div[4]/div[1]/div[2]/div/div");
	public static By CreateAccountWithinTheForm = By
			.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div/div[2]/div/div/div[4]/div[2]/button");

	// Create Bank Account
	public static By BankAccountHolderName = By
			.xpath("html/body/div[2]/div/div[1]/div[2]/div/div/div/div[2]/div/div/div[4]/form[1]/div[1]/input");
	public static By BankAccountNickname = By
			.xpath("html/body/div[2]/div/div[1]/div[2]/div/div/div/div[2]/div/div/div[4]/form[1]/div[2]/input");
	public static By BankRoutingNumber = By
			.xpath("html/body/div[2]/div/div[1]/div[2]/div/div/div/div[2]/div/div/div[4]/form[1]/div[3]/input");
	public static By BankAccountNumber = By
			.xpath("html/body/div[2]/div/div[1]/div[2]/div/div/div/div[2]/div/div/div[4]/form[1]/div[4]/input");
	public static By BankAccountType = By.xpath(".//*[@id='dropdown-input']");
	public static By BankSelectoptionAccountType = By.xpath(".//*[@id='dropdown-list']");

	// Create Card Account
	public static By SelectOptions = By.xpath(".//*[@id='dropdown-list']");//Select any option
	
	public static By CardType = By.xpath(".//*[@placeholder='Card Type']");
	public static By CardHolderName = By
			.xpath("html/body/div[2]/div/div[1]/div[2]/div/div/div/div[2]/div/div/div[4]/form[2]/div[2]/input");
	public static By CardNickname = By
			.xpath("html/body/div[2]/div/div[1]/div[2]/div/div/div/div[2]/div/div/div[4]/form[2]/div[3]/input"); //OPTIONAL
	public static By CardNumber = By
			.xpath("html/body/div[2]/div/div[1]/div[2]/div/div/div/div[2]/div/div/div[4]/form[2]/div[4]/input");
	public static By MonthDropdown = By.xpath(".//*[@placeholder='Month']");
	public static By YearDropdown = By.xpath(".//*[@placeholder='Year']");
	
	public static By CVVCode = By
			.xpath("html/body/div[2]/div/div[1]/div[2]/div/div/div/div[2]/div/div/div[4]/form[2]/div[6]/input");
	public static By closepopup = By.xpath("html/body/div[3]/div[2]/span");

	public static void gotoaccounts() throws Exception {
		Start.driver.findElement(AccountsLabel).click();
		Thread.sleep(2000);
	}

	public static void clickoncreatebutton() throws Exception {
		Start.driver.findElement(CreateAccountButton).click();
		Thread.sleep(4000);
	}

	public static void clickoncreateBankAccount() throws Exception {
		Start.driver.findElement(CreateBankAccountButton).click();
		Thread.sleep(2000);
	}

	public static void clickoncardAccount() throws Exception {
		Start.driver.findElement(CreateCardAccountButton).click();
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
		Start.driver.findElement(CreateAccountWithinTheForm).click();
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

	public static void selecttype() throws Exception {
		Start.driver.findElement(BankAccountType).sendKeys("SAVING");
		Start.driver.findElement(BankAccountType).sendKeys(Keys.DOWN);
		Start.driver.findElement(BankAccountType).sendKeys(Keys.ENTER);
		Thread.sleep(1000);
	}

	public static void clickonclosepopup() throws Exception {
		Start.driver.findElement(closepopup).click();
		Thread.sleep(2000);
	}

}
