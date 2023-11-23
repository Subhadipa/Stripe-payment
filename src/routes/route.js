const express = require('express');
const router = express.Router();


const stripeController=require("../controllers/stripeController")
router.post("/user/customer",stripeController.createCustomer)
router.post("/user/product",stripeController.createProduct)
router.post("/user/price",stripeController.createPrice)
router.post("/user/payment",stripeController.createPayment)
router.post("/user/payment/:id",stripeController.attachPayment)
router.post("/user/customer/:id",stripeController.addPaymentToCustomer)
router.post("/user/subscription",stripeController.createSubscription)

module.exports = router;