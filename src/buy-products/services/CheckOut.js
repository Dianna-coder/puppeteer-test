const checkout = async (page) => {
  const button = '#form-save-order > button'

  await page.waitForSelector(button);
  await page.click(button)

  await page.waitForSelector('#btFechar');
  await page.click('#btFechar')
}

module.exports = (page) => checkout(page)
