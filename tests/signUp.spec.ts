import { test, expect } from '@playwright/test'
import { clickOnLogin, homePage, clickOnSignUp, firstName, lastName, registerEmail, phone, signUpPassword, confirmPass, register, registerFirstName, registerLastName, registerPhone } from './selectors/selectors'

test('SignUP', async ( {page} ) => {

    await homePage(page)
    await clickOnLogin(page)
    await clickOnSignUp(page)
    await registerFirstName(page)
    await registerLastName(page)
    await registerEmail(page)
    await registerPhone(page)
    await signUpPassword(page)
    await confirmPass(page)
    await page.check('input[type=checkbox]:nth-child(1)')
    await register(page)
    

  })