const fillNfe = async (page, client) => {
  const cpfField = '#cpfnota'

  await page.waitForSelector(cpfField)
  await page.type(cpfField, client.cpf)

  const button = 'button'

  await page.waitForSelector(button)
  await page.click(button)
}

module.exports = (page, client) => fillNfe(page, client)
