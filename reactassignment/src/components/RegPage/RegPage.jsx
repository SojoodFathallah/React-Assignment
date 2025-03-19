import React from 'react'

function RegPage() {
    return (
        <div 
          className="flex items-center justify-center min-h-screen bg-cover bg-center"
          style={{ backgroundImage: "url('/backGround.png')"}}
        >
          <div className="bg-white p-8 rounded-lg shadow-lg w-96 text-center">
            <h2 className="text-blue-600 font-bold uppercase text-sm">Subscribe to our newsletter</h2>
            <h1 className="text-xl font-bold mt-1">Get weekly updates</h1>
            <p className="text-gray-600 mt-2">Fill in your details to join the party!</p>
            <form className="mt-4">
              <input
                type="text"
                placeholder="Your name"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="email"
                placeholder="Email address"
                className="w-full p-2 border rounded-md mt-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                type="submit"
                className="w-full bg-orange-500 text-white p-2 mt-4 rounded-md hover:bg-orange-600 transition"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
    );
}

export default RegPage