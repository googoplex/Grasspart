import React from 'react'


function BuySell(){
    return(
        <div className="items-start flex justify-start space-x-20 flex flex-row  bg-gray-300 h-screen">
            <div className="w-56 h-full items-start flex justify-center  bg-gray-100 border-t-2 ml-4">
            <div className="bg-gray-100">
                <h1>Hello World</h1>
            </div>
            </div>
            <div className="flex flex-col bg-gray-100 border-t-2 ">
            {/* <h1>Buy AND Sell Page Display</h1> */}
            <div className="max-w-3xl h-screen px-64  items-start flex justify-center">
            <div className="flex flex-row space-x-20 mt-4">
            <button className="text-white font-semibold hover:bg-gray bg-green rounded-md p-2 px-4">BUYERS</button>
            <button className="text-white font-semibold bg-red rounded-md p-1 px-4" >SELLERS</button>
            </div>
            </div>
            
        </div>
        
        </div>
    );
}
export default BuySell;