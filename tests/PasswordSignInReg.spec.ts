import { test, expect } from '@playwright/test';
import { clickOnLogin, clickOnLoginButton, homePage, loginEmail, loginFalsePassword, cliker } from './selectors/selectors';


test('Signing in', async ( {page} ) => { //Test logina sa pogresnom sifrom

    await homePage(page)
    await clickOnLogin(page)
    await cliker(page)
     
    await loginEmail(page)
    await loginFalsePassword(page)
    await clickOnLoginButton(page)
  
    const succ = await page.locator("//div[@class='swal2-header']//h2[1]")
    await expect(succ).toContainText('Uspješna prijava.')

})
