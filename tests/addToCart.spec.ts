import { test, expect } from '@playwright/test';
import { addToCart, cart, elektronika, homePage, overTV, televizori, clickOnLogin, clickOnLoginButton} from './selectors/selectors';



test('Selecting product and adding it to cart', async ( {page} ) =>{

    await homePage(page)
    
      //click on elektronika
    await elektronika(page)
      //click on televizori
    await televizori(page)
      //hover over tv
      await page.hover("//img[@alt='AU7000 UHD 4K Smart TV (2021) 43']")
      //click on add to cart
    await addToCart(page)
      //click on cart
    await cart(page)

})