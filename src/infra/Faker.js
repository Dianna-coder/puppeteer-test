const faker = require('faker')

faker.locale = 'pt_BR'

const generateName = () => faker.name.findName()
const generateEmail = () => faker.internet.email()
const generatePhone = () => faker.phone.phoneNumber()

const generateAlphaNumeric = (tamanho) => faker.random.alphaNumeric(tamanho)
const generateNumber = (max) => faker.random.number(max)

const generateAddress = () => faker.address.streetName()
const generateCity = () => faker.address.city()
const generateState = () => faker.address.state()

module.exports = {
  generateName,
  generateEmail,
  generatePhone,
  generateAlphaNumeric,
  generateNumber,
  generateAddress,
  generateCity,
  generateState
}
