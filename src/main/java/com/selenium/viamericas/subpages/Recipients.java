package com.selenium.viamericas.subpages;

import com.selenium.viamericas.utility.Start;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;

public class Recipients {

	WebDriver driver;

	// It's optional because here is created the page: Recipients
	public static By LoginLabel = By.xpath("html/body/div[2]/div/div[1]/div[1]/header/div/ul/li[3]/a");
	public static By UsernameInput = By
			.xpath("html/body/div[2]/div/div[1]/div[2]/div/div/div[2]/div/form/div[1]/input");
	public static By PasswordInput = By
			.xpath("html/body/div[2]/div/div[1]/div[2]/div/div/div[2]/div/form/div[2]/input");
	public static By SignInButton = By
			.xpath("html/body/div[2]/div/div[1]/div[2]/div/div/div[2]/div/form/div[4]/button");
	public static By MyAccountLabel = 
			By.xpath("html/body/div[2]/div/div[1]/div[1]/header/div/ul/li[4]/a");
	
	// <-----------RECIPIENT------------->
	public static By RecipientsLabel = By
			.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div/div[1]/ul/li[2]/a");
	public static By createButton = By
			.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div/div[2]/div/div/div[1]/div/button");
	public static By firstName = By
			.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div/div[2]/div/div/div[3]/form[1]/div[1]/input");
	public static By middleName = By
			.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div/div[2]/div/div/div[3]/form[1]/div[2]/input");
	public static By lastName = By
			.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div/div[2]/div/div/div[3]/form[1]/div[3]/input");
	public static By secondLastName = By
			.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div/div[2]/div/div/div[3]/form[1]/div[4]/input");
	public static By mobilePhoneNumber = By
			.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div/div[2]/div/div/div[3]/form[1]/div[5]/input");
	public static By emailAddressOptional = By
			.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div/div[2]/div/div/div[3]/form[1]/div[6]/input");
	public static By AddressLine1 = By
			.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div/div[2]/div/div/div[3]/form[1]/div[8]/input");
	public static By AddressLine2 = By
			.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div/div[2]/div/div/div[3]/form[1]/div[9]/input");
	public static By zipCode = By
			.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div/div[2]/div/div/div[3]/form[1]/div[11]/div/div[2]/input");

	public static By monthdropdown = By.xpath(".//*[@placeholder='Month']");
	public static By daydropdown = By.xpath(".//*[@placeholder='Day']");
	public static By yeardropdown = By.xpath(".//*[@placeholder='Year']");

	public static By countrydropdown = By.xpath(".//*[@placeholder='Country']");
	public static By statedropdown = By.xpath(".//*[@placeholder='State']");
	public static By citydropdown = By.xpath(".//*[@placeholder='City']");

	//<--------NEW BANK ACCOUNT----------->
	public static By currency = By.xpath(".//*[@placeholder='Currency']");
	public static By chooseabank = By.xpath(".//*[@placeholder='Choose a Bank']");

	public static By accountHolderName = By
			.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div/div[2]/div/div/div[3]/form[2]/div[2]/div[4]/input");
	public static By accountNumber = By
			.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div/div[2]/div/div/div[3]/form[2]/div[2]/div[5]/input");
	public static By accountType = By.xpath(".//*[@placeholder='Account Type']");
	public static By createbuttonwithintheform = By
			.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div/div[2]/div/div/div[3]/div/div/button");

	public static void GotoRecipients() throws InterruptedException {
		Start.driver.findElement(RecipientsLabel).click();
		Thread.sleep(1000);
	}

	public static void clickOnCreate() throws InterruptedException {
		Start.driver.findElement(createButton).click();
		Thread.sleep(1000);
	}

	public static void completethefirstName() throws InterruptedException {
		Start.driver.findElement(firstName).sendKeys("Christian");
		Thread.sleep(1000);
	}

	public static void completetheMiddleName() throws InterruptedException {
		Start.driver.findElement(middleName).sendKeys("Mauricio");
		Thread.sleep(1000);
	}

	public static void completetheLastName() throws InterruptedException {
		Start.driver.findElement(lastName).sendKeys("Preciado");
		Thread.sleep(1000);
	}

	public static void completethesecondName() throws InterruptedException {
		Start.driver.findElement(secondLastName).sendKeys("Hernandez");
		Thread.sleep(1000);
	}

	public static void completethemobilesecondnumber() throws InterruptedException {
		Start.driver.findElement(mobilePhoneNumber).sendKeys("3105647292");
		Thread.sleep(1000);
	}

	public static void setEmailAddressOptional() throws InterruptedException {
		Start.driver.findElement(emailAddressOptional).sendKeys("Christian.preciado@talosdigital.com");
		Thread.sleep(1000);
	}

	public static void setAddressLine1() throws InterruptedException {
		Start.driver.findElement(AddressLine1).sendKeys("Cra 50 # 45-67");
		Thread.sleep(1000);
	}

	public static void setAddressLine2() throws InterruptedException {
		Start.driver.findElement(AddressLine2).sendKeys("Calle 54 # 584-lK");
		Thread.sleep(1000);
	}

	public static void setzipcode() throws InterruptedException {
		Start.driver.findElement(zipCode).sendKeys("90002");
		Thread.sleep(1000);
	}

	public static void providethemonth() throws InterruptedException {
		Start.driver.findElement(monthdropdown).sendKeys("01");
		Start.driver.findElement(monthdropdown).sendKeys(Keys.DOWN);
		Start.driver.findElement(monthdropdown).sendKeys(Keys.ENTER);
		Thread.sleep(3000);
	}

	public static void providetheday() throws InterruptedException {
		Start.driver.findElement(daydropdown).sendKeys("18");
		Start.driver.findElement(daydropdown).sendKeys(Keys.DOWN);
		Start.driver.findElement(daydropdown).sendKeys(Keys.ENTER);
		Thread.sleep(3000);
	}

	public static void providetheyear() throws InterruptedException {
		Start.driver.findElement(yeardropdown).sendKeys("1989");
		Start.driver.findElement(yeardropdown).sendKeys(Keys.DOWN);
		Start.driver.findElement(yeardropdown).sendKeys(Keys.ENTER);
		Thread.sleep(3000);
	}

	public static void providethecountry() throws InterruptedException {
		Start.driver.findElement(countrydropdown).sendKeys("COLOMBIA");
		Start.driver.findElement(countrydropdown).sendKeys(Keys.DOWN);
		Start.driver.findElement(countrydropdown).sendKeys(Keys.ENTER);
		Thread.sleep(3000);
	}

	public static void providethestate() throws InterruptedException {
		Start.driver.findElement(statedropdown).sendKeys("ANTIOQUIA");
		Start.driver.findElement(statedropdown).sendKeys(Keys.DOWN);
		Start.driver.findElement(statedropdown).sendKeys(Keys.ENTER);
		Thread.sleep(3000);
	}

	public static void providethecity() throws InterruptedException {
		Start.driver.findElement(citydropdown).sendKeys("MEDELLIN");
		Start.driver.findElement(citydropdown).sendKeys(Keys.DOWN);
		Start.driver.findElement(citydropdown).sendKeys(Keys.ENTER);
		Thread.sleep(6000);
	}

	public static void setChooseabank() throws InterruptedException {
		Thread.sleep(10000);
		Start.driver.findElement(chooseabank).sendKeys("BANCOLOMBIA");
		Thread.sleep(6000);
	}

	public static void setAccountHolderName() throws InterruptedException {
		Start.driver.findElement(accountHolderName).sendKeys("Christian Preciado Hernandez");
		Thread.sleep(4000);
	}

	public static void setAccountNumber() throws InterruptedException {
		Start.driver.findElement(accountNumber).sendKeys("00010219191001");
		Thread.sleep(1000);
	}

	public static void setAccountType() throws InterruptedException {
		Start.driver.findElement(accountType).sendKeys("SAVINGS ACCOUNT");
		Start.driver.findElement(accountType).sendKeys(Keys.DOWN);
		Start.driver.findElement(accountType).sendKeys(Keys.ENTER);
		Thread.sleep(3000);
	}

	public static void createrecipient() throws InterruptedException {
		Start.driver.findElement(createbuttonwithintheform).click();
		Thread.sleep(3000);
	}
}
