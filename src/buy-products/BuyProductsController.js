buyProductsScrapper = require('./buyProductsScraper');

async function BuyProductsController(browserInstance) {
  try {
    const browser = await browserInstance;
    await buyProductsScrapper.buyProducts(browser);
  }
  catch (error) {
    console.log(error);
  }
}

module.exports = (browserInstance) => BuyProductsController(browserInstance)