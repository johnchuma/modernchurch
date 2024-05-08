"use client"

import { useState } from "react";
import {toast, Toaster} from "react-hot-toast"
import { useNavigate } from "react-router-dom";
import { findMember } from "../controllers/members_controller";
import { addUser } from "../utils/local_storage";


const LoginPage = () => {
    const [loading,setLoading] = useState(false)
    const navigate = useNavigate()
    
    return (<div>
        {/* <Toaster position="top-end"/> */}
        <div className="grid grid-cols-12 min-h-screen bg-white">
            <div className="col-span-5 bg-slate-100 relative items-center flex ">
                <div className="w-11/12 mx-auto">
                <img src="/church.png" className="translate-x-40"  />
                </div>
            </div>
            <div className="col-span-7 flex justify-center items-center">
                    <form onSubmit={(e)=>{
                        e.preventDefault();
                        setLoading(true)
                            const data = {
                                email:e.target.email.value,
                                password:e.target.password.value,
                            }

                            findMember(data.email).then((response)=>{
                                console.log(response)
                                if(response){
                                    if(response.password==data.password){
                                      addUser(response)
                                      navigate('/dashboard')
                                    }else{
                                        toast.error("Wrong password")
                                        setLoading(false)
                                    }
                                }
                                else{
                                    toast.error("User is not found")
                                    setLoading(false)
                                }
                            })
                    }} className="w-5/12 mx-auto">
                        <h1 className="font-medium text-4xl text-center text-slate-950 mb-10">Sign in</h1>
                        <div>
                        <label>Email address</label>
                        <input required name="email" placeholder="Enter email address" className="w-full text-sm mt-2 border-slate-300 rounded"/>
                        </div>
                        <div className="mt-3">
                        <label>Password</label>
                        <input required type="password" name="password" placeholder="Password" className="w-full text-sm mt-2 border-slate-300 rounded"/>
                        </div>
                        <div className="flex justify-between py-4 text-sm text-indigo-600">
                            <button href="/forgot-password">Forgot password ?</button>
                            <button className="flex items-center space-x-1" href="/help">
                            <div>Help</div> 
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                            className="w-3 h-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                            </svg>

                            </button>

                        </div>
                        <button type="submit" className="py-3 flex justify-center w-full rounded bg-indigo-600 font-medium mt-5 text-white">
                            {loading?<div className="h-6 w-6 rounded-full border-4 border-l-transparent border-white animate-spin "></div>:"Login"}
                        </button>
                        <p className="text-slate-500 text-start  text-sm mt-4">By signing in, I agree to the Modern Church <button href={`/privacyStatement`} className="text-indigo-600">Privacy Statement </button> and <button href={`/TermsOfService`} className="text-indigo-600">Terms of Service.</button> </p>
                       <p className="text-center mt-4">Not registered? <button href="/register" className="text-indigo-600">Create account</button></p>
                    
                    </form>
            </div>
        </div>
    </div>);
}
 
export default LoginPage;