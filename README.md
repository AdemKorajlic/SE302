# SE302
Clone the repository

git clone *link repositorija*



Install dependencies
npm install
npx playwright install


Run test
npx playwright test - for chromium, webkit, firefox
npx playwright test --headed - for visualisation of performed tests
npx playwright test addToCart.spec.ts --project=chromium - to run test only on chromium
npx playwright test addToCart.spec.ts --project=webkit - to run test only on webkit
npx playwright test addToCart.spec.ts --project=firefox - to run test only on firefox


Playwright test report
npx playwright show-report
