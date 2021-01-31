browser = require('./infra/Browser');
BuyProductsController = require('./buy-products/BuyProductsController')

let browserInstance = browser.startBrowser();

BuyProductsController(browserInstance)