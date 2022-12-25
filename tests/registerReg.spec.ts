import { test, expect } from '@playwright/test'
import { clickOnLogin, homePage, clickOnSignUp, registerEmail, signUpPassword, confirmPass, register, registerFirstName, registerLastName, registerPhone, checkUrlLoadedRegister, cliker} from './selectors/selectors'

test('SignUP', async ( {page} ) => { //Test register page-a bez prihvatanja uslova i odredbi poslovanja za kupce

    await homePage(page)
    await clickOnLogin(page)
    await clickOnSignUp(page)
    await registerFirstName(page)
    await registerLastName(page)
    await registerEmail(page)
    await registerPhone(page)
    await signUpPassword(page)
    await confirmPass(page)
    await register(page)
    await cliker(page)
    await checkUrlLoadedRegister(page)
    

})