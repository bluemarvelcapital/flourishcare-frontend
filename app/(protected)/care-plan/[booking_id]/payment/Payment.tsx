"use client"
import React, { useState } from "react"
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import { Button, Divider, Form } from "antd"
import { useAuth } from "@/hooks/useAuth"
import { useParams } from "next/navigation"
import { Loader } from "@/components/Loader"
import { useToastify } from "@/hooks/useToastify"
import {
  useGetBookingQuery,
  useInitPaymentMutation,
} from "@/services/bookings.service"
import { LoadingOutlined } from "@ant-design/icons"

export const Payment = () => {
  const { booking_id } = useParams()
  const { auth } = useAuth()

  const {
    refetch,
    data: booking,
    isLoading,
  } = useGetBookingQuery({
    accessToken: auth.accessToken,
    bookingId: booking_id as string,
  })
  const { errorToast, successToast } = useToastify()
  const [mutate, { isLoading: initializing }] = useInitPaymentMutation()

  const [paymentInitialized, setPaymentInitialized] = useState(false)
  const [pk, setPk] = useState("")
  const [clientSecret, setClientSecret] = useState("")
  const stripePromise = loadStripe(pk)
  const options = {
    // passing the client secret obtained in step 3
    clientSecret: clientSecret,
    // Fully customizable with appearance API.
    appearance: {
      /*...*/
    },
  }

  const initPayment = async () => {
    try {
      const response = await mutate({
        bookingId: booking_id as string,
        accessToken: auth.accessToken,
      }).unwrap()
      setClientSecret(response.stripeData.clientSecret)
      setPk(response.stripeData.publicKey)
      setPaymentInitialized(true)
      successToast("Payment Initialized Successfully")
    } catch (error: any) {
      errorToast(error?.message || error?.data?.message || "An Error Occured")
    }
  }

  return (
    <div className="bg-[#fff] border-[1px] border-[#E4E7EC] rounded-md md:p-10 p-4">
      <div>
        <h2 className="md:text-2xl text-lg mb-2">Payment</h2>
        <p className="text-[#7B798A]">
          Our payment gateways are safe and secured, your credit cards and
          account information are protected through our security firewall.
          Choose a payment method and fill in the requested information.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-14 mt-7">
        {paymentInitialized && (
          <div className="shadow-lg py-8 px-4 rounded-md">
            <div className="mx-auto md:w-[90%]">
              <Elements stripe={stripePromise} options={options}>
                <CheckOutForm />
              </Elements>
            </div>
          </div>
        )}
        <div>
          <div className="border-[1px] border-[#E4E7EC] rounded-md md:p-6 p-4 shadow-sm">
            <p className="text-lg">Details Confirmation</p>
            <Divider />
            <div className="flex items-center gap-5 text-[#7B798A]">
              <p className="md:w-[7rem]">Full Name</p>
              <p>
                {auth.firstname} {auth.lastname}
              </p>
            </div>
            <Divider />
            {booking && (
              <>
                <div className="flex items-center gap-5 text-[#7B798A]">
                  <p className="md:w-[7rem]">Phone</p>
                  <p>{booking.user.phone}</p>
                </div>
                <Divider />
              </>
            )}

            <div className="flex items-center gap-5 text-[#7B798A]">
              <p className="md:w-[7rem]">Email</p>
              <p>{auth.email}</p>
            </div>
          </div>
          <div className="mt-7 border-[1px] border-[#E4E7EC] rounded-md md:p-6 p-4 shadow-sm">
            <p className="text-lg">Booking Summary</p>
            <div>
              {isLoading ? (
                <Loader name="Services" />
              ) : (
                <div>
                  <Divider />
                  {booking?.services.map((service, index) => {
                    return (
                      <div key={index}>
                        <div className="flex justify-between items-center gap-5 text-[#7B798A]">
                          <p className="">{service.name}</p>
                          <p>
                            {Intl.NumberFormat("en-GB", {
                              currency: service.currency,
                              style: "currency",
                            }).format(service.price)}
                          </p>
                        </div>
                        <Divider />
                      </div>
                    )
                  })}
                  <div className="flex justify-between items-center gap-5">
                    <p className="text-lg font-medium">Total</p>
                    <p className="text-xl text-primary">
                      {Intl.NumberFormat("en-GB", {
                        currency: booking?.services![0]?.currency,
                        style: "currency",
                      }).format(
                        booking?.services
                          .map((service) => service.price)
                          .reduce((a, b) => a + b) as number
                      )}
                    </p>
                  </div>
                  {!paymentInitialized && (
                    <Button
                      className="w-full bg-success mt-4"
                      type="primary"
                      size="large"
                      onClick={initPayment}
                      disabled={initializing}
                    >
                      {initializing ? (
                        <LoadingOutlined />
                      ) : (
                        "Initialize Payment"
                      )}
                    </Button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const CheckOutForm = () => {
  const stripe = useStripe()
  const elements = useElements()
  const { errorToast, successToast } = useToastify()

  const handlePayment = async (event: any) => {
    event.preventDefault()
    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return
    }

    const { error } = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      confirmParams: {
        return_url: "https://example.com/order/123/complete",
      },
    })

    if (error) {
      // This point will only be reached if there is an immediate error when
      // confirming the payment. Show error to your customer (for example, payment
      // details incomplete)
      errorToast(error.message as any)
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  }
  return (
    <>
      <form onSubmit={handlePayment}>
        <PaymentElement />
        <Button
          className="w-full bg-success mt-4"
          type="primary"
          size="large"
          htmlType="submit"
          disabled={!stripe}
        >
          Continue
        </Button>
      </form>
    </>
  )
}
