/* eslint-disable react/prop-types */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { MdOutlinePayment } from "react-icons/md";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useNavigate } from "react-router-dom";


const CheckOutForm = ({ classDetails }) => {
    const stripe = useStripe();
    const { user } = useContext(AuthContext);
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const [clientSecret, setClientSecret] = useState("");
    const { email, image, name, price, title, _id } = classDetails || '';
    const navigate = useNavigate();

    useEffect(() => {

        if (!price) {
            toast.error("⚠️ Warning: Price is undefined or null!");
            return;
        }

        axiosSecure.post('/create-payment-intent', { price })
            .then(res => {
                // console.log(res.data.clientSecret)
                setClientSecret(res.data.clientSecret)
            })

    }, [axiosSecure, price])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.error(error.message)
        } else {
            console.log('payment method : ', paymentMethod)
        }

        //   confirm payment
        const { paymentIntent, error: cmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous',
                }
            }
        });
        if (cmError) {
            // console.log(cmError.message)
            toast.error(cmError.message)
        } else if (paymentIntent && paymentIntent.status === 'succeeded') {
            // console.log('Payment success', paymentIntent)
            if (paymentIntent.status === 'succeeded') {
                toast.success('Payment success')
                const paymentInfo = {
                    studentName: user?.displayName,
                    studentEmail: user?.email,
                    studentPhoto: user?.photoURL,
                    classTitle: title,
                    teacherEmail: email,
                    classImage: image,
                    teacherName: name,
                    date: new Date(),
                    transactionId: paymentIntent.id,
                    classId: _id
                }
                // console.log(paymentInfo);

                try {
                    await axiosSecure.post(`/enrollHistory`, paymentInfo)
                    // console.log(data)
                    navigate('/deshboard/myEnrollClass')
                }
                catch (err) {
                    console.error(err.message);
                }
            }
        }

    }


    const CARD_ELEMENT_OPTIONS = {
        style: {
            base: {
                color: '#32325d',
                fontFamily: 'Arial, sans-serif',
                fontSmoothing: 'antialiased',
                fontSize: '16px',
                '::placeholder': {
                    color: '#aab7c4',
                },
            },
            invalid: {
                color: '#fa755a',
                iconColor: '#fa755a',
            },
        },
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-blue-300 to-purple-400 p-4">
                    <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
                        <a className="w-full flex justify-center items-center gap-2 bg-black text-white py-2 rounded-lg mb-4">
                            <MdOutlinePayment />Payment
                        </a>

                        <div className="space-y-3">
                            <h3 className="text-2xl font-semibold">Name: {user?.displayName}</h3>
                            <p className="text-xl font-semibold">Email: {user?.email}</p>

                            <CardElement options={CARD_ELEMENT_OPTIONS}></CardElement>
                            <button
                                disabled={!stripe || !clientSecret}
                                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
                                Submit Order
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default CheckOutForm;