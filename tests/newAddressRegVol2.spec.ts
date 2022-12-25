import { test, expect } from '@playwright/test';
import { newAdressConfirm, clickOnLogin, clickOnLoginButton, homePage, loginEmail, loginPassword, cliker, myAccountAddressChange, clickOnMojaAdresa1, checkUrlLoadedAddressUpdate, inputNazivAdrese, inputNazivUlice, inputPostanskiBroj, clickOnSacuvajPromjene, spamClik} from './selectors/selectors';


test('Signing in', async ( {page} ) => { //Test bez odabira kantona/regije

    await homePage(page)
    await clickOnLogin(page)
    await cliker(page)
     
    await loginEmail(page)
    await loginPassword(page)
    await clickOnLoginButton(page)
  
    const succ = await page.locator("//div[@class='swal2-header']//h2[1]")
    await expect(succ).toContainText('Uspješna prijava.')

    await myAccountAddressChange(page)
    await clickOnMojaAdresa1(page)
    await inputNazivAdrese(page)
    await page.locator("(//div[@class='form-group']//select)[1]").selectOption('1277') //Drzava BiH
    await page.locator("(//div[@class='form-group']//select)[2]").selectOption('6') //Entitet Rep Sprska
    await inputNazivUlice(page)
    
    await clickOnSacuvajPromjene(page)
    await spamClik(page)
    await newAdressConfirm(page)
})