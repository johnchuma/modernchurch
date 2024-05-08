"use client"
import { createContext, useState } from "react";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import { Outlet } from "react-router-dom";
export const LoaderContext = createContext()
const DashboardLayout = () => {
  const [loading,setLoading] = useState(true)
    return ( <div>
 <div className="bg-white  min-h-screen overflow-x-hidden relative">
    ajdflakdfjalsdkfjsd
  {loading&&<div className="w-screen z-50 bg-gray-900 bg-opacity-30 min-h-screen flex justify-center items-center fixed">
  <div className="h-8 w-8 animate-spin rounded-full border-4 border-solid border-indigo-600 border-t-transparent"></div> 
  </div>}
      <Header/>
      <div className="overflow-x-hidden">
        <Sidebar/>
        <div className=" bg-white mt-24 h-screen ml-auto w-9/12 py-8 px-12">
          <LoaderContext.Provider value={{loading,setLoading}}>
              <Outlet/>
          </LoaderContext.Provider>
        </div>
      </div>
    </div>
    </div> );
}
 
export default DashboardLayout;