package com.selenium.viamericas.pages;

import com.selenium.viamericas.utility.Start;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class MyAccount {

	WebDriver driver;

	// Login Form complete
	public static By LoginLabel = By.xpath("html/body/div[2]/div/div[1]/div[1]/header/div/ul/li[3]/a");
	public static By UsernameInput = By
			.xpath("html/body/div[2]/div/div[1]/div[2]/div/div/div[2]/div/form/div[1]/input");
	public static By PasswordInput = By
			.xpath("html/body/div[2]/div/div[1]/div[2]/div/div/div[2]/div/form/div[2]/input");
	public static By SignInButton = By
			.xpath("html/body/div[2]/div/div[1]/div[2]/div/div/div[2]/div/form/div[4]/button");

	//<-----------MY ACCOUNT SECTION------------->
	public static By MyAccountLabel =
			By.xpath("/html/body/div[2]/div/div[1]/div[1]/header/div/ul/li[4]/a");

	//-------------SUB PAGES - PROFILE SETTINGS PAGE----------->
	public static By ProfileSettingsLabel =
			By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div/div[1]/ul/li[1]");

	//-------------SUB PAGES - RECIPIENTS PAGE----------->
	public static By RecipientsLabel =
			By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div/div[1]/ul/li[2]/a");

	//-------------SUB PAGES - ACCOUNTS PAGE----------->
	public static By AccountsLabel =
			By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div/div[1]/ul/li[3]/a");


	public MyAccount(WebDriver driver) {
		this.driver = driver;
	}

	public static void goMyAccountlabel() throws Exception {
		Start.driver.findElement(MyAccountLabel).click();
		Thread.sleep(5000);
	}

	public static void goProfileSettings() throws Exception {
		Start.driver.findElement(ProfileSettingsLabel).click();
		Thread.sleep(5000);
	}

	public static void goRecipients() throws Exception {
		Start.driver.findElement(RecipientsLabel).click();
		Thread.sleep(5000);
	}

	public static void goAccountsFunding() throws Exception {
		Start.driver.findElement(AccountsLabel).click();
		Thread.sleep(5000);
	}

}

