async function clickOnProduct(page) {
  await page.click('h2.product-name > a')
}

async function quantityProduct(page) {
  const inputQuantity = 'input[name="quantity"]'
  const quantityToBuy = 3

  await page.waitForSelector(inputQuantity);

  let quantityOnSite = await page.$eval(inputQuantity, el => el.value)

  while (quantityOnSite < quantityToBuy) {
    await page.click('.btn-plus-comprar')
    quantityOnSite++
  }
}

async function putProductInCart(page) {
  const buttonCart = 'button#btn-comprar-product'

  await page.waitForSelector(buttonCart);
  await page.click(buttonCart)
}

async function getProduct(page) {
  await clickOnProduct(page)
  await quantityProduct(page)
  await putProductInCart(page)
}

module.exports = (page) => getProduct(page)
