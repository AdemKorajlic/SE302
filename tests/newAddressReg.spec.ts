import { test, expect } from '@playwright/test';
import { newAdressConfirm, clickOnLogin, clickOnLoginButton, homePage, loginEmail, loginPassword, cliker, myAccountAddressChange, clickOnMojaAdresa1, checkUrlLoadedAddressUpdate, inputNazivAdrese, inputNazivUlice, inputPostanskiBroj, clickOnSacuvajPromjene} from './selectors/selectors';


test('Adress change', async ( {page} ) => { //Test bez odabira drzave

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
    await page.locator("(//div[@class='form-group']//select)[2]").selectOption('6') //Entitet Rep Sprska
    await page.locator("(//div[@class='form-group']//select)[3]").selectOption('14') //Banjalucka
    await inputNazivUlice(page)
    
    await clickOnSacuvajPromjene(page)
    

    await newAdressConfirm(page)
})