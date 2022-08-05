import React, { createContext, useContext, useEffect } from "react";
import axios from 'axios';
import {  toast } from 'react-toastify';
import  Router  from "next/router";
import { useReducerAsync } from "use-reducer-async";
import http from "src/services/httpServices";
import 'react-toastify/dist/ReactToastify.css';
// context
const AuthContext = createContext();
const AuthContextDispather = createContext();

const initialState = {
  user: null,
  loading: true,
  error: null,
};
const reducer = (state, action) => {
    
  switch (action.type) {
    case "SIGNIN_PENDING": 
     return {user:null , error:null, loading : true};
    case "SIGNIN_SUCCESS":
      return {loading:false, error:null, user : action.payload};
    case "SIGNIN_REJECT":
      return {loading:false , user:null , error : action.error} ;  
    

    default: return {...state}
     
  }
};

const asyncActionHandlers = {
  
  SIGNIN:({dispatch}) =>   (action) =>{
    
    dispatch({type : "SIGNIN_PENDING"});
    http
    .post("/user/signin", action.payload, {
      withCredentials: include,
    })
    .then((res) => {
      dispatch({type:"SIGNIN_SUCCESS" , payload : res.data})
      Router.push("/");
      toast.success(`welcome to your profile ${res.data.name} !!`);
    })
    .catch((err) => {
      //dispatch({type : "SIGNIN_REJECT" , action : err?.response?.data?.message })
      toast.error(err?.response?.data?.message)});
  },
  SIGNUP:({dispatch}) =>   (action) =>{
    
    dispatch({type : "SIGNIN_PENDING"});
    http
    .post("/user/signup", action.payload, {
      withCredentials: include,
    })
    .then(({data}) => {
      console.log(data);
      dispatch({type:"SIGNIN_SUCCESS" , payload : data})
      Router.push("/");
      toast.success(`welcome to your profile ${res.data.name} !!`);
    })
    .catch((err) => {
      //dispatch({type : "SIGNIN_REJECT" , action : err?.response?.data?.message })
      toast.error(err?.response?.data?.message)});
  },
  LOAD_USER:({dispatch}) =>   (action) =>{
    
    dispatch({type : "SIGNIN_PENDING"});
    http
    .get("/user/load", {
      withCredentials: include,
    })
    .then((res) => {
      dispatch({type:"SIGNIN_SUCCESS" , payload : res.data})
      
    })
    .catch((err) => {
      dispatch({type : "SIGNIN_REJECT" , action : err?.response?.data?.message })
      //toast.error(err?.response?.data?.message)});
  })},
  SIGNOUT:({dispatch}) =>   (action) =>{
    
    dispatch({type : "SIGNIN_PENDING"});
    http
    .get("/user/logout", {
      withCredentials: include,
    })
    .then((res) => {
      //dispatch({type:"SIGNIN_SUCCESS" , payload : res.data})
      window.location.href('/');
      
    })
    .catch((err) => {
      dispatch({type : "SIGNIN_REJECT" , action : err?.response?.data?.message })
      //toast.error(err?.response?.data?.message)});
  })},
}

const AuthProvider = ({ children }) => {
  const [user, dispatch] = useReducerAsync(reducer, initialState, asyncActionHandlers);
  useEffect(() => {
    
    dispatch({type : "LOAD_USER"})
  }, []);

  return (
    <AuthContext.Provider value={user}>
      <AuthContextDispather.Provider value={dispatch}>
        {children}
      </AuthContextDispather.Provider>
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
export const useAuthActions = () => useContext(AuthContextDispather);
