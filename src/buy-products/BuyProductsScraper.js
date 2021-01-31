getProduct = require('./services/GetProduct')
handleTheCart = require('./services/HandleTheCart')
registerUser = require('./services/RegisterUser')

choosePaymentMethod = require('./services/ChoosePaymentMethod')
fillNfe = require('./services/FillNfe')

checkout = require('./services/CheckOut')
getTicket = require('./services/GetTicket')

async function buyProducts(browser) {
  let page = await browser.newPage();

  await page.setViewport({ width: 0, height: 0 })
  await page.goto('https://lojadomecanico.com.br/');

  await getProduct(page)
  await handleTheCart(page)

  const client = await registerUser(page)

  await choosePaymentMethod(page)
  await fillNfe(page, client)

  await checkout(page)
  await getTicket(page, client)
}

module.exports = { buyProducts };