"use client"

import { useNavigate, useParams } from "react-router-dom";


const Sidebar = () => {
    const navigate = useNavigate()
    const path = "/dashboard";
    // const {pathname} = useParams()
    return ( <div className=" fixed w-3/12 bg-slate-100 h-screen overflow-scroll py-10">
        <h1 className="text-base px-6 mt-24">FEATURES</h1>
        <div className=" mt-3 flex flex-col space-y-3  text-base font-medium ">
        {[
            {title:"Home",href:"/home"},
            {title:"Members",href:"/members"},
            {title:"Groups",href:"/groups"},
            {title:"Projects",href:"/projects"},
            {title:"Calender",href:"/calenders"},
            {title:"Blog",href:"/blogs"},
            {title:"Announcements",href:"/announcements"} ,
            {title:"Daily scriptures",href:"/scriptures"},
            {title:"Sermons",href:"/sermons"}, 
         ].map((item)=>{
            return <div className={`${path ==item?"bg-indigo-500 text-white py-2 ":"bg-transparent  hover:font-medium transition-all duration-100"} pl-10`} onClick={()=>{
              navigate(item.href)
            }}>{item.title}</div>
          })}
        </div>
        <h1 className="text-base px-6 mt-5">ORDERS</h1>
        <div className=" mt-3 flex flex-col space-y-3  text-base font-medium ">
        {[
            {title:"Social banners/posters",href:"/WES"},
            {title:"Musicians & engineers",href:"null"},
            {title:"Instruments",href:"/grou"},
            {title:"Decorations",href:"null"}
         ].map((item)=>{
            return <div className={`${path == item.href?"bg-indigo-500 hover:font-medium text-white py-2 ":"bg-transparent hover:font-medium transition-all duration-100"} pl-10`} href={item.href}>{item.title}</div>
          })}
        </div>
        <h1 className="text-base px-6 mt-5">SOCIAL</h1>
        <div className=" mt-3 flex flex-col space-y-3  text-base font-medium ">
        {[
            {title:"Our website",href:"/WES"},
            {title:"Youtube channel",href:"null"},
            {title:"Facebook page",href:"/gros"},
            {title:"Instagram",href:"null"},
           
         ].map((item)=>{
            return <div className={`${path == item.href?"bg-indigo-500 text-white py-2 ":"bg-transparent hover:font-medium transition-all duration-100"} pl-10`} href={item.href}>{item.title}</div>
          })}
        </div>
        
    </div> );
}
 
export default Sidebar;