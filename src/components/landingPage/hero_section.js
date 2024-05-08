


const HeroSection = () => {
    return ( <div className="w-10/12 mx-auto">
        <div className="grid grid-cols-12 py-4">
            <div className="col-span-5 space-y-8">
                <button className="flex flex-row bg-green-50 rounded-full  px-4 py-2 items-center space-x-2">
                    <div className="bg-green-100 rounded-full aspect-square">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                     className="w-4 h-4 ">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                    </svg>
                    </div>
                    <p>Feel free to explore our Demo system</p>

                </button>
                <h1 className=" font-medium text-6xl">
                    Best Church Management solution
                </h1>
                <p className="text-lg w-12/12">With our system you can <span className="font-medium text-black">manage everything </span> in your church, from Church members, revenue, church projects and many other church aspects</p>
               <div className="flex space-x-4 ">
                <button>
                <div href="/login" className="py-3  w-full rounded-full px-5 bg-indigo-500 font-medium text-center  text-white">Get started</div>
                </button>
                <button>
                <div href="/login" className="py-3 w-full rounded-full px-5 text-start  font-medium  text-indigo-600">View services</div>

                </button>
               </div>
            </div>
            <div className="col-span-7 ">
                <img className=" " src="/hero.png"/>
            </div>

            

        </div>
    </div> );
}
 
export default HeroSection;