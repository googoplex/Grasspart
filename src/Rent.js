import React from 'react'

function Rent(){
    return(
        <div>
            <div className="items-start flex justify-center flex flex-row mt-2 bg-silver h-screen">
            <div className="flex flex-col">
            {/* <h1>Buy AND Sell Page Display</h1> */}
            <div className="max-w-2xl h-screen px-64  items-start flex justify-center">
            <div className="flex flex-row space-x-20 mt-4">
            <button className="text-white font-semibold hover:bg-gray bg-green rounded-md p-2 px-4">BUYERS</button>
            <button className="text-white font-semibold bg-red rounded-md p-1 px-4" >SELLERS</button>
            </div>
            </div>
        </div>
        </div>
        </div>
    );
}
export default Rent;