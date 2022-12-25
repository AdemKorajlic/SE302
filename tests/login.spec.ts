import { test, expect } from '@playwright/test';
import { clickOnLogin, clickOnLoginButton, homePage, loginEmail, loginPassword, cliker } from './selectors/selectors';


test('Signing in', async ( {page} ) => {
    //test2
    await homePage(page)
    await clickOnLogin(page)
    await cliker(page)
     
    await loginEmail(page)
    await loginPassword(page)
    await clickOnLoginButton(page)
  
    
    const succ = await page.locator("//div[@class='swal2-header']//h2[1]")
    await expect(succ).toContainText('Uspješna prijava.')
    
  
    //<h2 class="swal2-title" id="swal2-title" style="display: flex;">Uspješna prijava.</h2>
  
  
    }
  
  //<h2 class="swal2-title" id="swal2-title" style="display: flex;">Uspješna prijava.</h2>
  
  
  )

  