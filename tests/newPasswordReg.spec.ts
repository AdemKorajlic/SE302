import { test, expect } from '@playwright/test';
import { clickOnLogin, clickOnLoginButton, homePage, loginEmail, loginPassword, cliker, myAccountPasswordChange, inputNewPassword, inputOldPassword, repeatNewPassword, checkUrlLoadedPasswordUpdate, confirmPasswordChange } from './selectors/selectors';


test('New password, wrong repeated password', async ( {page} ) => { //Test mijenjanja sifre gdje prva su sifre razlicite vol1

    await homePage(page)
    await clickOnLogin(page)
    await cliker(page)
     
    await loginEmail(page)
    await loginPassword(page)
    await clickOnLoginButton(page)
  
    const succ = await page.locator("//div[@class='swal2-header']//h2[1]")
    await expect(succ).toContainText('Uspješna prijava.')

    await myAccountPasswordChange(page)
    await inputOldPassword(page)
    await inputNewPassword(page)
    await repeatNewPassword(page)
    await confirmPasswordChange(page)
    

    const passConfirm = await page.locator("//div[@class='swal2-header']//h2[1]")
    await expect(passConfirm).toContainText('Lozinka ažurirana. ')
})