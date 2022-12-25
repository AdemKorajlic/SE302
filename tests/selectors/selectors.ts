import { expect } from "@playwright/test"

export async function homePage(page){
    await page.goto('https://kupina.ba')
}

export async function elektronika(page){
    await page.locator("(//a[@class='clearfix']//strong)[1]").click()
}

export async function televizori(page){
    await page.locator("(//div[@class='menu']//a)[2]").click()
}

export async function overTV(page){
    await page.hover("//img[@alt='AU7000 UHD 4K Smart TV (2021) 43']")
}

export async function addToCart(page){
    await page.click("(//button[@class='btncart addToCartBtnn']//span)[2]")
}

export async function cart(page){
    await page.click("(//a[@class='sepet_cart']//span)[2]")
}

export async function placanje(page){
    await page.click("//a[@class='btn btn-primary-coupon']")
}

export async function registerFirstName(page){
    await page.type("(//div[@class='col-sm-6 col-md-offset-3']//input)[1]", 'Nko')

}
export async function firstName(page){
    await page.type("(//input[@class='form-control'])[3]", 'Nko')
}

export async function registerLastName(page){
    await page.type("(//div[@class='col-sm-6 col-md-offset-3']//input)[2]", 'Niko1')
}

export async function lastName(page){
    await page.type("//div[contains(@class,'form-group input-lastname')]//input[1]", 'Niko1')
}

export async function email(page){
    await page.type("(//div[@class='form-group required']//input)[1]", 'vrandommail7@covbase.com')
}

export async function registerPhone(page){
    await page.type("//input[@placeholder='Vaš telefonski broj']", '061213213')
}
export async function phone(page){
    await page.type("(//div[@class='form-group required']//input)[2]", '0612132134')
}

export async function drzava(page){
    await page.locator("(//div[@class='form-group required']//select)[1]")
}

export async function entitet(page){
    await page.locator("(//div[@class='form-group required']//select)[2]")
}

export async function kanton(page){
    await page.locator("(//div[@class='form-group required']//select)[3]")
}

export async function grad(page){
    await page.locator("(//select[@name='province']//option)[3]")
}

export async function adresa(page){
    await page.type("(//input[@id='input-payment-address-1'])[1]", 'randomAdresa2')
}

export async function postanskiBroj(page){
    await page.type("(//input[@id='input-payment-postcode'])[1]", '71000')
}

export async function clickOnLogin(page){
    await page.click('.hesap_btn_title')
}

export async function loginEmail(page){
    await page.type("(//div[@class='control']//input)[1]", 'yovoso4295@cosaxu.com')
}
export async function registerEmail(page) {
    await page.type('#input-email', 'voxob41127@covbase.com')
    
}

export async function loginPassword(page){
    await page.type("(//div[@class='control']//input)[2]", '12345678')
}

export async function signUpPassword(page){
    await page.type('#input-password', '12345678')
}

export async function confirmPass(page) {
    await page.type('#input-confirm', '12345678')
    
}

export async function clickOnLoginButton(page){
    await page.click("//button[@name='send']//span[1]")
}

export async function clickOnSignUp(page){
    await page.click('text=Kreiraj novi račun')
}

export async function register(page){
    await page.click('text=Kreiraj račun')
}

export async function cliker(page) {
    await page.click("(//div[@class='control']//input)[1]") 
        await page.click("(//div[@class='control']//input)[1]") 
        await page.click("(//div[@class='control']//input)[1]") 
        await page.click("(//div[@class='control']//input)[1]")
    
}

export async function loginFalseEmail(page){
    await page.type("(//div[@class='control']//input)[1]", 'bagece2785123@covbase.com')
}

export async function clickOnContinueToPayment(page){
    await page.click('payment-continue-button')
}

export async function cardNumber(page){
    await page.type("//label[text()='Card number ']/following-sibling::input", '4124124141421241')
}

export async function cardExpDate(page){
    await page.type("//div[@class='form-group ']//input[1]", '09/25')
}

export async function cardCVC(page){
    await page.type("//div[@class='form-group cvv-wrapper']//input[1]", '241')
}

export async function checkUrlLoadedPurchase(page) {
    const loadedUrl = await page.evaluate(() => window.location.href);
    return loadedUrl === 'https://kupina.ba/kapida.php';
}



export async function myAccountPasswordChange(page){
    await page.goto('https://kupina.ba/postavke-lozinke')
}

export async function myAccountAddressChange(page){
    await page.goto('https://kupina.ba/informacije')
}

export async function inputOldPassword(page){
    await page.type("(//div[@class='form-group required']//input)[1]", '12345678')
}

export async function inputNewPassword(page){
    await page.type("(//div[@class='form-group required']//input)[2]", '12346')
}

export async function repeatNewPassword(page){
    await page.type("(//div[@class='form-group required']//input)[3]", '12345')
}

export async function inputNewPassword1(page){
    await page.type("(//div[@class='form-group required']//input)[2]", '1234')
}

export async function confirmPasswordChange(page){
    await page.click("//div[@class='buttons clearfix']//input[1]")
}

export async function clickOnMojaAdresa1(page){
    await page.locator("(//section[@class='mb-0 mt-0']//div)[1]").click()
}

export async function inputNazivAdrese(page){
    await page.type("(//div[@class='form-group']//input)[1]", 'Test')
}

export async function inputNazivUlice(page){
    await page.type("(//div[@class='form-group']//input)[2]", 'Test')
}

export async function inputPostanskiBroj(page){
    await page.type("(//div[@class='form-group required']//input)[1]", '10000')
}

export async function clickOnSacuvajPromjene(page){
    await page.locator("(//div[contains(@class,'buttons clearfix')]//input)[1]").click()
}

export async function checkUrlLoadedPasswordUpdate(page) {
    const loadedUrl = await page.evaluate(() => window.location.href);
    return loadedUrl === 'https://kupina.ba/my-account.php';
}

export async function checkUrlLoadedAddressUpdate(page) {
    const loadedUrl = await page.evaluate(() => window.location.href);
    return loadedUrl === 'https://kupina.ba/my-account.php';
}



export async function loginFalsePassword(page){
    await page.type("(//div[@class='control']//input)[2]", '12345678901')
}



export async function checkUrlLoadedRegister(page) {
    const loadedUrl = await page.evaluate(() => window.location.href);
    return loadedUrl === 'https://kupina.ba/odobrenje/warning';
}

export async function newAdressConfirm(page) {
    const loadedUrl = await page.locator("//html[contains(@class,'js flexbox')]//body[1]")
    await expect(loadedUrl).toContainText('Podaci adrese ažurirani. ')
}

export async function spamClik(page){
    page.click("(//div[contains(@class,'buttons clearfix')]//input)[1]")
    page.click("(//div[contains(@class,'buttons clearfix')]//input)[1]")
    page.click("(//div[contains(@class,'buttons clearfix')]//input)[1]")
    page.click("(//div[contains(@class,'buttons clearfix')]//input)[1]")
    page.click("(//div[contains(@class,'buttons clearfix')]//input)[1]")
    page.click("(//div[contains(@class,'buttons clearfix')]//input)[1]")
    page.click("(//div[contains(@class,'buttons clearfix')]//input)[1]")
    page.click("(//div[contains(@class,'buttons clearfix')]//input)[1]")
    page.click("(//div[contains(@class,'buttons clearfix')]//input)[1]")
    page.click("(//div[contains(@class,'buttons clearfix')]//input)[1]")
    page.click("(//div[contains(@class,'buttons clearfix')]//input)[1]")
    page.click("(//div[contains(@class,'buttons clearfix')]//input)[1]")
    page.click("(//div[contains(@class,'buttons clearfix')]//input)[1]")
    page.click("(//div[contains(@class,'buttons clearfix')]//input)[1]")
    page.click("(//div[contains(@class,'buttons clearfix')]//input)[1]")
    page.click("(//div[contains(@class,'buttons clearfix')]//input)[1]")
    page.click("(//div[contains(@class,'buttons clearfix')]//input)[1]")
    page.click("(//div[contains(@class,'buttons clearfix')]//input)[1]")
    page.click("(//div[contains(@class,'buttons clearfix')]//input)[1]")
    page.click("(//div[contains(@class,'buttons clearfix')]//input)[1]")
    page.click("(//div[contains(@class,'buttons clearfix')]//input)[1]")
    page.click("(//div[contains(@class,'buttons clearfix')]//input)[1]")
    page.click("(//div[contains(@class,'buttons clearfix')]//input)[1]")
    page.click("(//div[contains(@class,'buttons clearfix')]//input)[1]")
    page.click("(//div[contains(@class,'buttons clearfix')]//input)[1]")
    page.click("(//div[contains(@class,'buttons clearfix')]//input)[1]")

}

// export async function newPasswordConfirmation(page) {
//     const passConfirm = await page.locator("//body[contains(@class,'common-home ltr')]")
//     await expect(passConfirm).toContainText('Lozinka ažurirana. ')
// }
