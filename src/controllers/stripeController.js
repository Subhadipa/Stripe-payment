const stripe=require('stripe')("sk_test_51OFaZWSIsSuIQDHAVaC1Dadzx8CUTovNlCysjMVuf0TOPEDWxJLK7MWi7FRwGkWYMJpu2kRNlNORVA4MDhkbt2YN00e3GC8Zto")


const createCustomer=async(req,res)=>{
    const customer = await stripe.customers.create({
      ...req.body
      });
      if(customer){
        return res.status(200).send({status:true,message:"Customer created successfully!",data:customer})
      }
      return res.status(400).send({status:true,message:"Customer can't be created successfully!"})

}
const createProduct=async(req,res)=>{
    const product = await stripe.products.create({
        ...req.body
      });
      if(product){
        return res.status(200).send({status:true,message:"Product created successfully!",data:product})
      }
      return res.status(400).send({status:true,message:"Product can't be created successfully!"})
}

const createPrice=async(req,res)=>{
    const price = await stripe.prices.create({
       ...req.body
      });
      if(price){
        return res.status(200).send({status:true,message:"Price created successfully!",data:price})
      }
      return res.status(400).send({status:true,message:"Price can't be created successfully!"})
}
const createPayment=async(req,res)=>{
    //const customer=req.params.id
    const paymentMethod = await stripe.paymentMethods.create({
       ...req.body
      });
      if(paymentMethod){
      
        return res.status(200).send({status:true,message:"Payment Method created successfully!",data:paymentMethod})
      }
      return res.status(400).send({status:true,message:"Payment Method can't be created successfully!"})
}
const attachPayment=async(req,res)=>{
    const customer=req.params.id
    const {paymentMethod_id}=req.body
     const attachpaymentMethod = await stripe.paymentMethods.attach(
          paymentMethod_id,
            {
              customer,
            }
          );
          if(attachpaymentMethod){
      
            return res.status(200).send({status:true,message:"Payment Method  attached successfully!",data:attachpaymentMethod})
          }
          return res.status(400).send({status:true,message:"Payment Method can't be attached successfully!"})   
}
const addPaymentToCustomer=async(req,res)=>{
    const customer=req.params.id
    const {paymentMethod_Id}=req.body
    const updatedCustomer=await stripe.customers.update(customer, {
        invoice_settings: {
          default_payment_method: paymentMethod_Id,
        },

      });
      if(updatedCustomer){
      
        return res.status(200).send({status:true,message:"Customer updated successfully!",data:updatedCustomer})
      }
      return res.status(400).send({status:true,message:"Customer can't be updated successfully!"})   


}
const createSubscription=async(req,res)=>{
    const subscription = await stripe.subscriptions.create({
        ...req.body
      });
      if(subscription){
        return res.status(200).send({status:true,message:"Subscription created successfully!",data:subscription})
      }
      return res.status(400).send({status:true,message:"Subscription can't be created successfully!"})
}

module.exports={createCustomer,createProduct,createPrice,createSubscription,createPayment,attachPayment,addPaymentToCustomer}