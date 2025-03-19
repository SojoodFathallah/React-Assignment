import React from 'react'

function Recent() {
  return (
    <div className="p-6">
      <h2 className="text-gray-800 font-semibold mb-4">RECENT SEARCHES</h2>
      <div className="flex gap-4 mb-6">
        <div className="border p-4 rounded-lg shadow-md flex-1">
          <span className="text-blue-600 font-bold">SIN</span>
          <span className="mx-2">✈️</span>
          <span className="text-blue-600 font-bold">LAX</span>
          <p className="font-semibold mt-2">Depart On: <span className="font-normal">7 Sep 2021</span></p>
        </div>
        <div className="border p-4 rounded-lg shadow-md flex-1">
          <span className="text-blue-600 font-bold">MY</span>
          <span className="mx-2">✈️</span>
          <span className="text-blue-600 font-bold">DUB</span>
          <p className="font-semibold mt-2">Depart On: <span className="font-normal">9 Sep 2021</span></p>
        </div>
      </div>
    </div>
  )
}

export default Recent