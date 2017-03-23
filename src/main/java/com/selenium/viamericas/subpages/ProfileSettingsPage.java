package com.selenium.viamericas.subpages;

import com.selenium.viamericas.utility.Start;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;

public class ProfileSettingsPage {

	
	//<------------FORM------------>
	public static By FirstNameField = By
			.xpath("html/body/div[2]/div/div[1]/div[2]/div/div/div/div[2]/div/div/form/div[1]/input");	
	public static By MiddleNameField = By
			.xpath("html/body/div[2]/div/div[1]/div[2]/div/div/div/div[2]/div/div/form/div[2]/input");	//OPTIONAL
	public static By LastNameField = By
			.xpath("html/body/div[2]/div/div[1]/div[2]/div/div/div/div[2]/div/div/form/div[3]/input");
	public static By SecondLastNameField = By
			.xpath("html/body/div[2]/div/div[1]/div[2]/div/div/div/div[2]/div/div/form/div[4]/input"); //OPTIONAL
	public static By MobilePhoneNumberField = By
			.xpath("html/body/div[2]/div/div[1]/div[2]/div/div/div/div[2]/div/div/form/div[5]/input");
	public static By AdressLine1Field = By
			.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div/div[2]/div/div/form/div[10]/input");
	public static By AdressLine2Field = By
			.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div/div[2]/div/div/form/div[11]/input"); //OPTIONAL
	public static By ZipCode = By
			.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div/div[2]/div/div/form/div[13]/div/div[2]/input");
	
	//<-----------------BUTTONS--------------->
	public static By UpdateButton = By
			.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div/div[2]/div/div/form/div[17]/button[1]");
	public static By ChangePasswordButton = By
			.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div/div[2]/div/div/form/div[17]/button[2]");
	
	//<---------------CHANGE PASSWORD--------------->
	public static By CurrentPasswordField = By.xpath(".//*[@id='currentPassword']");
	public static By ContinueButton = By.xpath("html/body/div[3]/div[2]/button[1]");
	public static By NewPasswordField = By.xpath(".//*[@id='newPassword']");
	public static By RepeatPasswordField = By.xpath(".//*[@id='newPasswordConfirm']");

	//<-------------DROPDOWNS------------------>
	public static By State = By.xpath(".//*[@placeholder='State']");
	public static By City = By.xpath(".//*[@placeholder='City']");
	public static By Preferences = By.xpath(".//*[@placeholder='Seleccione un idioma']");
	public static By dropdownsgeneral = By.xpath(".//*[@id='dropdown-input']");

	public static By closepopup = By.xpath("/html/body/div[3]/div[2]/span");


	public static void changethefisrtname() throws InterruptedException {
		Start.driver.findElement(FirstNameField).clear();
		Start.driver.findElement(FirstNameField).sendKeys("Laura");
		Thread.sleep(1000);
	}

	public static void changetheLastNameField() throws InterruptedException {
		Start.driver.findElement(LastNameField).clear();
		Start.driver.findElement(LastNameField).sendKeys("Alvarez");
		Thread.sleep(1000);
	}

	public static void changetheMobilePhoneNumberField() throws InterruptedException {
		Start.driver.findElement(MobilePhoneNumberField).clear();
		Start.driver.findElement(MobilePhoneNumberField).sendKeys("3122066063");
		Thread.sleep(1000);
	}

	public static void changetheaddressline1() throws InterruptedException {
		Start.driver.findElement(AdressLine1Field).clear();
		Start.driver.findElement(AdressLine1Field).sendKeys("Carrera 65 # 45 - 56");
		Thread.sleep(1000);
	}

	public static void changeZipCode() throws InterruptedException {
		Start.driver.findElement(ZipCode).clear();
		Start.driver.findElement(ZipCode).sendKeys("90001");
		Thread.sleep(1000);
	}

	public static void addtheoptionalfields() throws InterruptedException {
		Start.driver.findElement(MiddleNameField).clear();
		Start.driver.findElement(SecondLastNameField).clear();
		Start.driver.findElement(AdressLine2Field).clear();
		Start.driver.findElement(MiddleNameField).sendKeys("Cristina");
		Start.driver.findElement(SecondLastNameField).sendKeys("Galviz");
		Start.driver.findElement(AdressLine2Field).sendKeys("Carrera 40#34-55");
		Thread.sleep(2000);
	}

	public static void changestate() throws InterruptedException {
		Start.driver.findElement(State).clear();
		Start.driver.findElement(State).sendKeys("CALIFORNIA");
		Start.driver.findElement(State).sendKeys(Keys.DOWN);
		Start.driver.findElement(State).sendKeys(Keys.ENTER);
		Thread.sleep(3000);
	}

	public static void changecity() throws InterruptedException {
		Start.driver.findElement(City).clear();
		Thread.sleep(2000);
		Start.driver.findElement(City).sendKeys("FIRESTONE PARK");
		Start.driver.findElement(City).sendKeys(Keys.DOWN);
		Start.driver.findElement(City).sendKeys(Keys.ENTER);
		Thread.sleep(2000);
	}

	public static void clickupdatebutton() throws InterruptedException {
		Start.driver.findElement(UpdateButton).click();
		Thread.sleep(4000);
	}

	public static void changePasswordProcess() throws InterruptedException {
		Start.driver.findElement(ChangePasswordButton).click();
		Thread.sleep(5000);
		Start.driver.findElement(CurrentPasswordField).sendKeys("Laura123");
		Start.driver.findElement(ContinueButton).click();
		Start.driver.findElement(NewPasswordField).sendKeys("Laura123");
		Start.driver.findElement(RepeatPasswordField).sendKeys("Laura123");
		Thread.sleep(2000);
	}

	public static void setClosepopup() throws InterruptedException {
		Start.driver.findElement(closepopup).click();
		Thread.sleep(2000);
	}
	public static void cleandropdowns() throws InterruptedException {
		Start.driver.findElement(dropdownsgeneral).clear();
		Thread.sleep(2000);
	}

	public static void changepreferences(String type) throws InterruptedException{
			Start.driver.findElement(Preferences).clear();
			Start.driver.findElement(Preferences).click();
			Start.driver.findElement(City).sendKeys(Keys.DOWN);
			Start.driver.findElement(City).sendKeys(Keys.ENTER);
			Thread.sleep(2000);
	}
}
