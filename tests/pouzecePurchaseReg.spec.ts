import { test, expect } from '@playwright/test';

import { addToCart, adresa, cart, elektronika, email, firstName, homePage, lastName, overTV, phone, placanje, postanskiBroj, checkUrlLoadedPurchase} from '../tests/selectors/selectors';


test('Selecting product and adding it to cart', async ( {page} ) =>{ //Test kupovine bez prihvatanja uslova i odredbi poslovanja za kupce

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

  await page.locator("(//div[@class='form-group required']//select)[1]").selectOption('1277')
  await page.locator("(//div[@class='form-group required']//select)[2]").selectOption('5')
  await page.locator("(//div[@class='form-group required']//select)[3]").selectOption('4')
  await page.locator("//select[@id='input-province']").selectOption('3')
  await adresa(page)
  await postanskiBroj(page)

  await page.locator("(//div[@class='radio']//input)[3]").click()
  await placanje(page)

  await checkUrlLoadedPurchase(page)

})