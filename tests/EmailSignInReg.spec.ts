import { test, expect } from '@playwright/test';
import { clickOnLogin, clickOnLoginButton, homePage, loginFalseEmail, loginPassword, cliker } from './selectors/selectors';


test('Signing in', async ( {page} ) => { //Test logina sa pogresnom email adresom

    await homePage(page)
    await clickOnLogin(page)
    await cliker(page)
     
    await loginFalseEmail(page)
    await loginPassword(page)
    await clickOnLoginButton(page)
  
    
    const succ = await page.locator("//div[@class='swal2-header']//h2[1]")
    await expect(succ).toContainText('Uspješna prijava.')

})
