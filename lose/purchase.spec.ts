import { test, expect } from '@playwright/test';

import { addToCart, adresa, cart, elektronika, email, firstName, homePage, lastName, overTV, phone, placanje, postanskiBroj } from '../tests/selectors/selectors';


test('Selecting product and adding it to cart', async ( {page} ) =>{

  await homePage(page)
  
  
    //click on elektronika
    await elektronika(page)
    //click on televizori
    await page.locator("(//div[@class='menu']//a)[2]").click()
    //hover over tv
    await overTV(page)
    //click on add to cart
    await addToCart(page)
    //click on cart
    await cart(page)
    //click on placanje
    await placanje(page)
    //entering first name
    await firstName(page)
    //entering last name
    await lastName(page)
    //entering email
    await email(page)
    //entering phone
    await phone(page)
    
    //ADRESA
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
    await postanskiBroj(page)

    await page.locator("input[value='3']").click()
    await page.locator("input[name='privacy']").click()
    await page.locator("input[name='agree']").click()

    //await page.locator('select.custom-select').selectOption('item2')
    //await page.click("input[value='two']")
// or
//await page.locator("input[value='two']").click()
})