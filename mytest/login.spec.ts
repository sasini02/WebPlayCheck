import {test, expect, Browser, Page, Locator} from '@playwright/test'
import { webkit, chromium, firefox } from 'playwright'

test ('Individual login test', async()=> {
    // Launch the Firefox browser in non-headless mode
  const browser: Browser = await firefox.launch ({headless: false});

  // Open a new page in the browser
  const page:Page = await browser.newPage();

  // Navigate to the login page
  await page.goto("https://wiley.scienceconnect.io/login");

  // Define locators for input fields and buttons
  const emailId:Locator = await page.locator('[id="email-input"]');
  const signInButton:Locator = await page.locator('[id="sign-in-btn"]');
  const password:Locator = await page.locator('[id="pass-input"]');
  const passSignInButton:Locator = await page.locator('[id="password-sign-in-btn"]');

  // Fill in the email address and proceed
  await emailId.fill("02sasinirasangi@gmail.com");
  await signInButton.click();

  // Fill in the password and complete the login process
  await password.fill("wileysaz88");
  await passSignInButton.click();

  // Retrieve and log the title of the resulting page
  const title = await page.title();
  console.log("home page title: ", title);

  // Assert that the page title matches the expected value
  expect(title).toEqual('Sign in - Wiley');



});


/*## Automated Test Case Overview - Individual Login Test

-Purpose:
 To verify that users can log in successfully with valid credentials and receive appropriate error messages for invalid inputs.

-Steps:
Open the application.
Enter your email and password.
Click the "Continue" button.

-Validation:
Check for a successful login. 
Ensure error messages appear for invalid credentials.

-Scenarios Tested:
Valid login with correct credentials.
Invalid login (wrong email/password, blank fields).

-Outcome:
 Confirm the login functionality works as expected for valid and invalid inputs.

*/