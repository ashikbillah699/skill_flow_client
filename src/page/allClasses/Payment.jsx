import { Helmet } from "react-helmet";
import BgCover from "../../commonSection/BgCover";
// import { useState } from "react";
// import { MdOutlinePayment } from "react-icons/md";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";


const stripePromise = loadStripe(`${import.meta.env.VITE_PAYMENT_PK}`)
const Payment = () => {
    const axiosPublic = useAxiosPublic()
    const { id } = useParams();
    console.log(id)

    const { data: classDetails = {} } = useQuery({
        queryKey: ['classDetails', id],
        queryFn: async () => {
            const { data } = await axiosPublic.get(`/classDetails/${id}`);
            console.log(data)
            return data
        }
    });

   
    
    return (
        <div>
            <Helmet
            >
                <title>SkillFlow  |  Payment</title>
            </Helmet>
            <BgCover
                img='https://cdn.pixabay.com/photo/2022/07/06/03/41/business-7304257_1280.jpg'
                title='Payment'
                description={'Securely enroll in classes by making a hassle-free payment online!'}
            ></BgCover>
            <Elements stripe={stripePromise}>  
                <CheckOutForm classDetails={classDetails}></CheckOutForm>
            </Elements>
        </div>
    );
};

export default Payment;