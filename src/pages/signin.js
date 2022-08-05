import React,{useEffect} from 'react';
import { useFormik } from 'formik';
import * as Yup from "yup";
import Link from "next/link";
import Input from "@/components/FormInput";
import Head from "next/head";
import Layout from "@/containers/Layout";
import axios from 'axios';

import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';
import { useAuth, useAuthActions } from '@/context/AuthContext';

//initial values
const initialValues = {
    email: "",
    password: "",
};

//validation schema
const validationSchema = 
Yup.object({
    email:Yup.string().required("Enter email !").email("email is invalid !!"),
    password:Yup.string().required("Enter password !").min(8,"The password must contain at least 8 characters !!")
})


const RegisterForm = () => {
    const router = useRouter();
    const dispatch = useAuthActions();
    const {loading , user} = useAuth();
    const onSubmit = (values) => {
        
        
        //const { email, password} = values;
        dispatch({type:"SIGNIN" , payload:values})

    }


const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount:true
});

useEffect(() => {
    if(user) router.push("/");
} , 
[user])



    return (
       <Layout>
          
           <Head>
              <title>Sign Up</title>
           </Head>
           <div className='md:max-w-md px-4 md:px-4 container mx-auto'>
               <form onSubmit={formik.handleSubmit} className='flex flex-col space-y-4'>
                   <h1 className='font-black text-2xl text-violet-700 mb-4'>
                     Enter
                   </h1>
                   <Input label="email" name="email" formik={formik} />
                   <Input label="password" name="password" type="password" formik={formik} />
                   <button type="submit"
                   disabled={!formik.isValid}
                   className="w-full py-2 rounded-lg bg-violet-800 text-white">
                      Enter
                   </button>
                   <Link href="/signup">
                   <p className='mt-4 py-4 cursor-pointer'>Have you not registered yet?  <span className='text-violet-700 font-bold'>sign up</span></p>
                   </Link>
               </form>
           </div>
       </Layout>
    );
    };

export default RegisterForm;