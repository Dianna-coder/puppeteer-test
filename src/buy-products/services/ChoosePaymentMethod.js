const choosePaymentMethod = async (page) => {
  await page.waitForSelector('.boleto-valor');
  await page.click('.boleto-valor')
}

module.exports = (page) => choosePaymentMethod(page)
