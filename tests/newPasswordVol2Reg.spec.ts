import { test, expect } from '@playwright/test';
import { clickOnLogin, clickOnLoginButton, homePage, loginEmail, loginPassword, cliker, myAccountPasswordChange, inputNewPassword, inputOldPassword, repeatNewPassword, checkUrlLoadedPasswordUpdate, confirmPasswordChange, inputNewPassword1 } from './selectors/selectors';


test('New password, wrong new password', async ( {page} ) => {

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
    await inputNewPassword1(page)
    await repeatNewPassword(page)
    await confirmPasswordChange(page)

    const passConfirm = await page.locator("//div[@class='swal2-header']//h2[1]")
    await expect(passConfirm).toContainText('Lozinka ažurirana. ')
})