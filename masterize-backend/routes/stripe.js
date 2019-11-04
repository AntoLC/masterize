var express = require('express');
var router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

/* GET home page. */
router.post('/', (req, res) => {
  //const body = "OKI";
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: 'usd'
  }

  console.log(body);
  //res.status(200).send({success: body});
  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if(stripeErr){
      res.status(500).send({error: stripeErr});
    }
    else{
      res.status(200).send({success: stripeRes});
    }
  });
});

module.exports = router;
