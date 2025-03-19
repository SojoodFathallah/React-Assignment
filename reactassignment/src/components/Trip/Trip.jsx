import React from 'react'
import { Bed, Ticket, Utensils, Bus, Car, Film } from "lucide-react";


function Trip() {
    const options = [
        { name: "Hotel", icon: <Bed size={24} color='white' />, color: "bg-pink-500", },
        { name: "Attractions", icon: <Ticket size={24} color='white' />, color: "bg-orange-500" },
        { name: "Eats", icon: <Utensils size={24} color='white'/>, color: "bg-green-500" },
        { name: "Commute", icon: <Bus size={24} color='white'/>, color: "bg-yellow-500" },
        { name: "Taxi", icon: <Car size={24} color='white' />, color: "bg-blue-500" },
        { name: "Movies", icon: <Film size={24} color='white' />, color: "bg-lime-500" },
      ];
  return (
    <div className="flex flex-col items-center space-y-5 mt-10">
      <h2 className="text-gray-400 text-sm">PREPARE FOR YOUR TRIP</h2>
      <div className="flex space-x-50">
        {options.map((option) => (
          <div key={option.name} className="flex flex-col items-center">
            <div
              className={`w-12 h-12 flex items-center justify-center rounded-lg ${option.color}`}
            >
              {option.icon}
            </div>
            <span className="text-gray-500 text-sm mt-2">{option.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Trip