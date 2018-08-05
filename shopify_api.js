const Shopify = require('shopify-api-node');
require('dotenv').config();

var accessToken = process.env.appStoreTokenTest;

const shopify = new Shopify({
  shopName: 'atelier-tb-2.myshopify.com',
  accessToken: accessToken
});

shopify.on('callLimits', limits => console.log(limits));


shopify.discountCode.list(315095777398)
  .then(discountCodes => {
      console.log(discountCodes[0].price_rule_id);
  })
  .catch(err => console.error(err));


