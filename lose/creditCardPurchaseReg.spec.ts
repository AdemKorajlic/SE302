import { test, expect } from '@playwright/test';

import { grad, clickOnLoginButton, loginPassword, loginEmail, clickOnLogin, addToCart, adresa, cart, elektronika, email, firstName, homePage, lastName, overTV, phone, placanje, postanskiBroj, cliker, clickOnContinueToPayment, cardNumber, checkUrlLoadedPurchase, cardExpDate, cardCVC, drzava, entitet, kanton} from '../tests/selectors/selectors';


test('Selecting product and adding it to cart', async ( {page} ) =>{ //Test kupovine sa netacnim podacima kartice

  await homePage(page)
    
    
  await elektronika(page)
  await page.locator("(//div[@class='menu']//a)[2]").click()
  await overTV(page)
  await addToCart(page)
  await cart(page)
  await placanje(page)
  
  await firstName(page)
  await lastName(page)
  await email(page)
  await phone(page)

  // NECE DA IZABERE NISTA
   //drzava
   await page.locator("(//div[@class='form-group required']//select)[1]").selectOption('1277')
   //entitet
   await page.locator("(//div[@class='form-group required']//select)[2]").selectOption('5')
   //kanton
   await page.locator("(//div[@class='form-group required']//select)[3]").selectOption('4')
   //grad
   await page.locator("//select[@id='input-province']").selectOption('3')
   //adresa
   await adresa(page)
   //postanski broj
   
  await page.check("//input[@id='d1']")
  await page.check("//div[@class='checkbox check-newsletter']//input[1]")
  await page.check("//div[@class='checkbox check-privacy']//input[1]")  
  await page.check("//input[@name='agree']")
  await page.click("//div[@class='confirm-order']//button[1]")

  await clickOnContinueToPayment(page)
  await cardNumber(page)
  await cardExpDate(page)
  await cardCVC(page)
  

  await checkUrlLoadedPurchase(page)

})