package com.selenium.viamericas.pages;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class RepeatTransactions {

	
	WebDriver driver;

	// Repeat Transaction
	public static By LoginLabel = By.xpath("html/body/div[2]/div/div[1]/div[1]/header/div/ul/li[3]/a");
	public static By UsernameInput = By
			.xpath("html/body/div[2]/div/div[1]/div[2]/div/div/div[2]/div/form/div[1]/input");
	public static By PasswordInput = By
			.xpath("html/body/div[2]/div/div[1]/div[2]/div/div/div[2]/div/form/div[2]/input");
	public static By SignInButton = By
			.xpath("html/body/div[2]/div/div[1]/div[2]/div/div/div[2]/div/form/div[4]/button");
	public static By GotoTransactionHistory = By
			.xpath("html/body/div[2]/div/div[1]/div[1]/header/nav-viamericas/nav/div[1]/ul[1]/li[2]/a");
	public static By RepeatTransactionButton = By
			.xpath("html/body/div[2]/div/div[1]/div[2]/div/div/div/div/div[2]/div[2]/div/div/div/div[7]/button");

	public static By AmountField = By
			.xpath("html/body/div[2]/div/div[1]/div[2]/div/div/div/form/div[1]/div[2]/div[11]/div[1]/div[1]/div/input");

	//Buttons
	public static By SendMoneyNowButton = By
			.xpath("html/body/div[2]/div/div[1]/div[2]/div/div/div/form/div[2]/button[2]");
	public static By BackButton = By
			.xpath("html/body/div[2]/div/div[1]/div[2]/div/div/div/form/div[2]/button[1]");
	public static By TrackPayment = By
			.xpath("html/body/div[2]/div/div[1]/div[2]/div/div/div/div[12]/div[2]/a");
	
	public RepeatTransactions(WebDriver driver) {
		this.driver = driver;
	}

	public void RepeatAnyTransaction() {

		driver.findElement(LoginLabel).click();
		driver.findElement(UsernameInput).sendKeys("laura.alvarez@talosdigital.com");
		driver.findElement(PasswordInput).sendKeys("Laura123");
		driver.findElement(SignInButton).click();
		driver.findElement(GotoTransactionHistory).click();
		driver.findElement(RepeatTransactionButton).sendKeys("COLOMBIA");
		driver.findElement(AmountField).clear();
		driver.findElement(AmountField).sendKeys("6");
		driver.findElement(SendMoneyNowButton).click();
		driver.findElement(BackButton).click();
		Assert.assertEquals("https://www.govianex.com/#/sendmoney/confirmation", driver.getCurrentUrl());
		
		driver.findElement(TrackPayment).click();
		Assert.assertEquals("https://www.govianex.com/#/sendmoney/transaction-history", driver.getCurrentUrl());
	}
	
	public void RepeatTransactionWithAmountIncorrect() {

		driver.findElement(LoginLabel).click();
		driver.findElement(UsernameInput).sendKeys("laura.alvarez@talosdigital.com");
		driver.findElement(PasswordInput).sendKeys("Laura123");
		driver.findElement(SignInButton).click();
		driver.findElement(GotoTransactionHistory).click();
		driver.findElement(RepeatTransactionButton).sendKeys("COLOMBIA");
		driver.findElement(AmountField).clear();
		driver.findElement(AmountField).sendKeys("4"); //INCORRECT AMOUNT
		driver.findElement(SendMoneyNowButton).click();
		/*Here isn't possible put the Assert because the transactions can be different, for example:
		 * transactionId=12046, the id is different for each transaction
		 */
		
		
	}
}
