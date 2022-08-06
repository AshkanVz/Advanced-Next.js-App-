import React,{useEffect} from 'react';
import { useFormik } from 'formik';
import * as Yup from "yup";
import Link from "next/link";
import Input from "@/components/FormInput";
import Head from "next/head";
import Layout from "@/containers/Layout";
import{ useAuthActions } from '@/context/AuthContext';
import 'react-toastify/dist/ReactToastify.css';
//initial values
const initialValues = {
    name:"",
    email: "",
    password: "",
    phoneNumber:"",
    confirmPassword:""
};

//validation schema
const validationSchema = 
Yup.object({
    name:Yup.string().required("Enter Name").min(6,"Name must contain at least 8 characters"),
    email:Yup.string().required("Enter email !").email("email is invalid !!"),
    password:Yup.string().required("Enter password !").min(8,"The password must contain at least 8 characters !!"),
    phoneNumber:Yup.string().required("Enter phoneNumber").matches(/^[0-9]{11}$/,"phoneNumber must be 11 digits").nullable(),
    confirmPassword:Yup.string().oneOf([Yup.ref("password"),""] , "Enter password again !!").required("The password does not match")
})

const SignForm = () => {
    const dispatch = useAuthActions();
    const onSubmit = (values) => {
        const {name, email ,phoneNumber, password}  = values;
        console.log(values);
        
       // dispatchEvent(register(name , email.toLowerCase(), password,phoneNumber));
        dispatch({type : "SIGNUP" , payload :{name, email ,phoneNumber, password}});
    }


const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount:true
});




    return (
       <Layout>
           <div className='h-screen'>
           <Head>
              <title>Sign Up</title>
           </Head>
           <div className='md:max-w-md px-4 md:px-4 container mx-auto'>
               <form onSubmit={formik.handleSubmit} className='flex flex-col space-y-4'>
                   <h1 className='font-black text-2xl text-violet-700 mb-4'>
                     SignUp
                   </h1>
                   <Input label="Name" name="name" formik={formik} />
                   <Input label="Email" name="email"  formik={formik} />
                   <Input type="tel" label="phoneNumber" name="phoneNumber" formik={formik} placeholder="09121234567"/>
                   <Input label="password" name="password" type="password" formik={formik}/>
                   <Input label="confirm password" name="confirmPassword" type="password" formik={formik} />
                   <button type="submit"
                   disabled={!formik.isValid}
                   className="w-full py-2 rounded-lg bg-violet-800 text-white">
                      Enter
                   </button>
                   <Link href="/signin">
                   <p className='mt-4 py-4 cursor-pointer'>signin</p>
                   </Link>
               </form>
           </div>
           </div>
       </Layout>
    );
    };

export default SignForm;