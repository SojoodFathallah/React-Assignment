import React from 'react'

function Hero() {
  return  (
    <div className="bg-blue-300 min-h-[500px] flex flex-col items-center text-white">
      <div className="text-center mt-12">
        <h2 className="text-4xl font-bold mt-20">Let's explore & travel the world</h2>
        <p className="text-lg mt-2">
          Find the best destinations and the most popular stays!
        </p>
      </div>

      <div className="bg-white p-4 rounded-xl shadow-md mt-4 w-full max-w-5xl">
  <h3 className="text-black text-lg font-semibold">SEARCH FLIGHTS</h3>
  <div className="mt-4 flex items-center gap-4">
    <input
      type="text"
      className="p-2 border border-gray-300 rounded-md flex-1 text-black"
      value="Singapore (SIN)"
      readOnly
    />
    <input
      type="text"
      className="p-2 border border-gray-300 rounded-md flex-1 text-black"
      value="Los Angeles (LA)"
      readOnly
    />
    <input
      type="date"
      className="p-2 border border-gray-300 rounded-md text-black"
      value="2022-05-01"
    />
    <div className="flex gap-2 text-black">
      <label className="flex items-center">
        <input type="radio" name="tripType" className="mr-1" />
        Return
      </label>
      <label className="flex items-center">
        <input type="radio" name="tripType" className="mr-1" defaultChecked />
        One-way
      </label>
    </div>
    <button className="bg-orange-500 text-white p-2 rounded-md">
      SEARCH FLIGHTS
    </button>
        </div>
      </div>
    </div>
  )
}

export default Hero