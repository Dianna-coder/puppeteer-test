const { clients } = require('../../data/ClientsData');

const getTicket = async (page, client) => {
  const ticketNumber = 'p#lindig'

  await page.waitForSelector(ticketNumber);
  const ticket = await page.$eval(ticketNumber, el => el.textContent)

  client.boleto = ticket
  clients.push(client)

  console.log(client.boleto)
}

module.exports = (page, client) => getTicket(page, client)
