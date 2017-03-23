package com.selenium.viamericas.pages;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class SendMoney {

	WebDriver driver;
	// Lists
	public static By SelectAnyOption = By.xpath(".//*[@id='dropdown-list']");

	// Send Money Form
	public static By LoginLabel = By.xpath("html/body/div[2]/div/div[1]/div[1]/header/div/ul/li[3]/a");
	public static By UsernameInput = By
			.xpath("html/body/div[2]/div/div[1]/div[2]/div/div/div[2]/div/form/div[1]/input");
	public static By PasswordInput = By
			.xpath("html/body/div[2]/div/div[1]/div[2]/div/div/div[2]/div/form/div[2]/input");
	public static By SignInButton = By
			.xpath("html/body/div[2]/div/div[1]/div[2]/div/div/div[2]/div/form/div[4]/button");
	public static By GoToSendMoney = By
			.xpath("html/body/div[2]/div/div[1]/div[1]/header/nav-viamericas/nav/div[1]/ul[1]/li[1]/a");
	public static By CountryName = By.xpath(".//*[@placeholder='Country']");
	public static By SendField = By
			.xpath("html/body/div[2]/div/div[1]/div[2]/div/div/div/form/div[1]/div[2]/div[2]/div[1]/div/input");
	public static By CurrencyName = By.xpath(".//*[@placeholder='Currency']");

	// Options for Bank Deposit button
	public static By BankDepositButton = By
			.xpath("html/body/div[2]/div/div[1]/div[2]/div/div/div/form/div[1]/div[2]/div[4]/div[1]/div[1]/div");
	public static By ChooseaBankField = By.xpath(".//*[@placeholder='Choose a Bank']");

	// Options for Cash Pickup button
	public static By CashPickupButton = By
			.xpath("html/body/div[2]/div/div[1]/div[2]/div/div/div/form/div[1]/div[2]/div[4]/div[1]/div[2]/div");
	public static By SelectNationalNetworkField = By.xpath(".//*[@placeholder='Select National Network']");
	public static By ClickHereLink = By
			.xpath("html/body/div[2]/div/div[1]/div[2]/div/div/div/form/div[1]/div[2]/div[5]/div/p/em/small/a");
	public static By StateField = By.xpath(".//*[@placeholder='State']");
	public static By CityField = By.xpath(".//*[@placeholder='City']");
	public static By SelectRegionalNetworkField = By.xpath(".//*[@placeholder='Select Regional Network']");

	// Buttons
	public static By ContinueButton = By.xpath("html/body/div[2]/div/div[1]/div[2]/div/div/div/form/div[2]/button[2]");
	public static By BackButton = By.xpath("html/body/div[2]/div/div[1]/div[2]/div/div/div/form/div[2]/button[1]");

	public SendMoney(WebDriver driver) {
		this.driver = driver;
	}

	public void VerifyAmountWithCashPickup() {

		driver.findElement(LoginLabel).click();
		driver.findElement(UsernameInput).sendKeys("laura.alvarez@talosdigital.com");
		driver.findElement(PasswordInput).sendKeys("Laura123");
		driver.findElement(SignInButton).click();
		driver.findElement(GoToSendMoney).click();
		driver.findElement(CountryName).sendKeys("COLOMBIA");
		driver.findElement(SelectAnyOption).click();
		driver.findElement(SendField).sendKeys("4");
		driver.findElement(CashPickupButton).click();
		driver.findElement(SelectNationalNetworkField).sendKeys("BANCOLOMBIA");
		driver.findElement(SelectAnyOption).click();
		driver.findElement(ContinueButton).click();
		Assert.assertEquals("https://www.govianex.com/#/sendmoney/destination", driver.getCurrentUrl());

	}

	public void VerifyAmountWithBankDeposit() {

		driver.findElement(LoginLabel).click();
		driver.findElement(UsernameInput).sendKeys("laura.alvarez@talosdigital.com");
		driver.findElement(PasswordInput).sendKeys("Laura123");
		driver.findElement(SignInButton).click();
		driver.findElement(GoToSendMoney).click();
		driver.findElement(CountryName).sendKeys("COLOMBIA");
		driver.findElement(SelectAnyOption).click();
		driver.findElement(SendField).sendKeys("4");
		driver.findElement(BankDepositButton).click();
		driver.findElement(ChooseaBankField).sendKeys("BANCOLOMBIA");
		driver.findElement(SelectAnyOption).click();
		driver.findElement(ContinueButton).click();
		Assert.assertEquals("https://www.govianex.com/#/sendmoney/destination", driver.getCurrentUrl());
	}

	// Send Money complete to Recipient Information form with Bank Account
	public void CompleteSendMoneyBankAcount() {

		driver.findElement(LoginLabel).click();
		driver.findElement(UsernameInput).sendKeys("laura.alvarez@talosdigital.com");
		driver.findElement(PasswordInput).sendKeys("Laura123");
		driver.findElement(SignInButton).click();
		driver.findElement(GoToSendMoney).click();
		driver.findElement(CountryName).sendKeys("COLOMBIA");
		driver.findElement(SelectAnyOption).click();
		driver.findElement(SendField).sendKeys("5");
		driver.findElement(BankDepositButton).click();
		driver.findElement(ChooseaBankField).sendKeys("BANCOLOMBIA");
		driver.findElement(SelectAnyOption).click();
		driver.findElement(ContinueButton).click();
		Assert.assertEquals("https://www.govianex.com/#/sendmoney/recipient", driver.getCurrentUrl());
	}
	
	//Only is the information for the Send Money form
	public void FormForSendMoney() {
		driver.findElement(CountryName).sendKeys("COLOMBIA");
		driver.findElement(SelectAnyOption).click();
		driver.findElement(SendField).sendKeys("5");
		driver.findElement(BankDepositButton).click();
		driver.findElement(ChooseaBankField).sendKeys("BANCOLOMBIA");
		driver.findElement(SelectAnyOption).click();
		driver.findElement(ContinueButton).click();
		Assert.assertEquals("https://www.govianex.com/#/sendmoney/recipient", driver.getCurrentUrl());
	}

	public void countryName() {
		driver.findElement(CountryName).sendKeys("ARGENTINA"); // <-----------ARGENTINA---------->
		driver.findElement(CountryName).sendKeys("AUSTRALIA"); // <-----------AUSTRALIA---------->
		driver.findElement(CountryName).sendKeys("BANGLADESH"); // <-----------BANGLADESH---------->
		driver.findElement(CountryName).sendKeys("BOLIVIA"); // <-----------BOLIVIA---------->
		driver.findElement(CountryName).sendKeys("BRAZIL"); // <-----------BRAZIL---------->
		driver.findElement(CountryName).sendKeys("CANADA"); // <-----------CANADA---------->
		driver.findElement(CountryName).sendKeys("CHILE"); // <-----------CHILE---------->
		driver.findElement(CountryName).sendKeys("COLOMBIA"); // <-----------COLOMBIA---------->
		driver.findElement(CountryName).sendKeys("COSTA RICA"); // <-----------COSTA RICA---------->
		driver.findElement(CountryName).sendKeys("DOMINICAN REPUBLIC"); // <-----------DOMINICAN REPUBLIC---------->
		driver.findElement(CountryName).sendKeys("ECUADOR"); // <-----------ECUADOR---------->
		driver.findElement(CountryName).sendKeys("EL SALVADOR"); // <-----------EL SALVADOR---------->
		driver.findElement(CountryName).sendKeys("GUATEMALA"); // <-----------GUATEMALA---------->
		driver.findElement(CountryName).sendKeys("GUYANA"); // <-----------GUYANA---------->
		driver.findElement(CountryName).sendKeys("HAITI"); // <-----------HAITI---------->
		driver.findElement(CountryName).sendKeys("HONDURAS"); // <-----------HONDURAS---------->
		driver.findElement(CountryName).sendKeys("HONG KONG"); // <-----------HONG KONG---------->
		driver.findElement(CountryName).sendKeys("INDIA"); // <-----------INDIA---------->
		driver.findElement(CountryName).sendKeys("INDONESIA"); // <-----------INDONESIA---------->
		driver.findElement(CountryName).sendKeys("KOREA, SOUTH"); // <-----------KOREA, SOUTH---------->
		driver.findElement(CountryName).sendKeys("MALAYSIA"); // <-----------MALAYSIA---------->
		driver.findElement(CountryName).sendKeys("MEXICO"); // <-----------MEXICO---------->
		driver.findElement(CountryName).sendKeys("NEPAL"); // <-----------NEPAL---------->
		driver.findElement(CountryName).sendKeys("NEW ZEALAND"); // <-----------NEW ZEALAND---------->
		driver.findElement(CountryName).sendKeys("NICARAGUA"); // <-----------NICARAGUA---------->
		driver.findElement(CountryName).sendKeys("PERU"); // <-----------PERU---------->
		driver.findElement(CountryName).sendKeys("PHILIPPINES"); // <-----------PHILIPPINES---------->
		driver.findElement(CountryName).sendKeys("SPAIN"); // <-----------SPAIN---------->
		driver.findElement(CountryName).sendKeys("SWITZERLAND"); // <-----------SWITZERLAND---------->
		driver.findElement(CountryName).sendKeys("TRINIDAD AND TOBAGO"); // <-----------TRINIDAD AND TOBAGO---------->
		driver.findElement(CountryName).sendKeys("UNITED KINGDOM"); // <-----------UNITED KINGDOM---------->
		driver.findElement(CountryName).sendKeys("UNITED STATES"); // <-----------UNITED STATES---------->
		driver.findElement(CountryName).sendKeys("URUGUAY"); // <-----------URUGUAY---------->
		driver.findElement(CountryName).sendKeys("VIETNAM"); // <-----------VIETNAM---------->
		
	}

}
