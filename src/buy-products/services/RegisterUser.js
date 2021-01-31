const { adresses } = require('../../data/AdressesData');
const { delay } = require('../../infra/Utils')

faker = require('../../infra/Faker')

let client = {}
let address = {}

const clickRegisterUser = async (page) => {
  const buttonRegister = '.btn-box-flux-login-default'

  await page.waitForSelector(buttonRegister);
  await page.click(buttonRegister)
}

const selectPhysicalPerson = async (page) => {
  const checkmarkPhysicalPerson = '.js-link-pf > .checkmark-radio'

  await page.waitForSelector(checkmarkPhysicalPerson);
  await page.click(checkmarkPhysicalPerson)
}

const fillInCustomerData = async (page) => {
  await page.waitForSelector('.mat-input');

  client.nome = faker.generateName()
  client.email = faker.generateEmail()
  client.telefone = '11983749509'
  client.password = faker.generateAlphaNumeric(6)
  client.cpf = '04559764492'

  await page.type('#nome', client.nome)
  await page.type('#telefone', client.telefone)
  await page.type('#email', client.email)
  await page.type('#password', client.password)
}

const finalizeUserRegistration = async (page) => {
  const buttonCreate = '.btn-create'

  await page.waitForSelector(buttonCreate);
  await page.click(buttonCreate)
}

const fillInAddress = async (page) => {
  await page.waitForSelector('.mat-input');

  address.cep = '17800970'
  address.numero = '3928'

  await page.type('#cep', address.cep)
  await page.type('#numero', address.numero)

  address.logradouro = await page.$eval('#logradouro', el => el.value)
  address.bairro = await page.$eval('#bairro', el => el.value)
  address.cidade = await page.$eval('#cidade', el => el.value)
  address.uf = await page.$eval('#uf', el => el.value)

  adresses.push(address)
}

const finalizeAddressRegistration = async (page) => {
  const buttonCreate = '.btn-green'

  await page.waitForSelector(buttonCreate);
  await page.click(buttonCreate)

  await delay(2000)
}

const continueRegistration = async (page) => {
  const buttonCreate = '.show-bg-preloader > .btn-green'

  await page.waitForSelector(buttonCreate);
  await page.click(buttonCreate)

  await delay(2000)
}

const registerUser = async (page) => {
  await clickRegisterUser(page)
  await selectPhysicalPerson(page)

  await fillInCustomerData(page)
  await finalizeUserRegistration(page)

  await fillInAddress(page)
  await finalizeAddressRegistration(page)

  await continueRegistration(page)

  return client
}

module.exports = (page) => registerUser(page)

