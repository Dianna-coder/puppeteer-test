const { delay } = require('../../infra/Utils')

const clickOnCart = async (page) => {
  const cart = '.btn-cart > a.show-bg-preloader'

  await delay(3000)
  await page.waitForSelector(cart);
  await page.click(cart)
}

const completeTheCart = async (page) => {
  const buttonFinalize = '.btn-finalizar-pedido'

  await page.waitForSelector(buttonFinalize);
  await page.click(buttonFinalize)
}

const handleTheCart = async (page) => {
  await clickOnCart(page)
  await completeTheCart(page)
}

module.exports = (page) => handleTheCart(page)
