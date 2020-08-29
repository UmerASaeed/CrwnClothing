import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) =>
{
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HKSsYAkGessDDbzVRNRTDYj7twzMkt2MIPa1lGF8MYAzBUZuh06FJYU4lHfPFnqjVcGhAP6Xf0IV9HFPFXhwIAF00iJ95GqGH'
    const onToken = token =>
    {
        alert('Payment Successfull')
    }
    return(
        <StripeCheckout
            label='Pay Now'
            name="CRWN Clothing"
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton