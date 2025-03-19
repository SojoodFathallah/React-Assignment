import React from 'react'
import DetailsButton from '../DetailsButton/DetailsButton'
import paris from '../../assets/ParisImage.png'
import greece from '../../assets/GreeceImage.png'
import norway from '../../assets/NorwayImage.png'
import tuscany from '../../assets/TuscanyImage.png'

import bali from '../../assets/image.png'
import swiss from '../../assets/SwitzerlandImage.png'
import boracay from '../../assets/BoracayImage.png'
import palawan from '../../assets/palawanImage.png'

import mount from '../../assets/mount.png'
import discovery from '../../assets/discovery.png'
import hut from '../../assets/hut.png'
import lake from '../../assets/lake.png'

const destinations = [
  { name: "Paris", price: "$699", image: paris },
  { name: "Greece", price: "$1079", image: greece },
  { name: "Norway", price: "$895", image: norway },
  { name: "Tuscany", price: "$1245", image: tuscany },
];

const holidays = [
  { name: "Bali", price: "$899", duration: "4D3N", image: bali },
  { name: "Swiss", price: "$900", duration: "6D5N", image: swiss },
  { name: "Boracay", price: "$699", duration: "5D4N", image: boracay },
  { name: "Palawan", price: "$789", duration: "4D3N", image: palawan },
];

const stays = [
  { name: "Matterhorn Suites", price: "$575/night", rating: 4.9, reviews: 60, image: mount },
  { name: "Discovery Shores", price: "$360/night", rating: 4.8, reviews: 116, image: discovery },
  { name: "Arctic Hut", price: "$420/night", rating: 4.7, reviews: 78, image: hut },
  { name: "Lake Louise Inn", price: "$244/night", rating: 4.6, reviews: 63, image: lake },
];

const Card = ({ title, subtitle, image, className }) => (
  <div className={`rounded-xl overflow-hidden shadow-lg ${className}`}>
    <img src={image} alt={title} className="w-full h-40 object-cover" />
    <div className="p-4">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-blue-500 font-bold">{subtitle}</p>
    </div>
  </div>
);

const DestCard = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center w-full">
        <p className="text-sm text-blue-600 font-semibold">PLAN YOUR NEXT TRIP</p>
        <a href="#" className="text-blue-600 text-sm ml-auto mt-20">View all destinations →</a>
      </div>
      <h2 className="text-2xl font-bold mb-4">Most Popular Destinations</h2>
      <div className="grid grid-cols-4 gap-4">
        {destinations.map((d, index) => (
          <Card key={index} title={d.name} subtitle={`From ${d.price}`} image={d.image} className="bg-gray-800 text-white" />
        ))}
      </div>
      
      <div className="flex justify-between items-center w-full">
        <a href="#" className="text-blue-600 text-sm ml-auto mt-20">View all holidays →</a>
      </div>
      <h2 className="text-2xl font-bold my-4">Recommended Holidays</h2>
      <div className="grid grid-cols-4 gap-4">
        {holidays.map((h, index) => (
          <Card key={index} title={h.name} subtitle={`${h.price} (${h.duration})`} image={h.image} className="bg-white text-black border border-gray-300" />
        ))}
      </div>
      
      <div className="flex justify-between items-center w-full mt-20">
        <a href="#" className="text-blue-600 text-sm ml-auto ">View all stays →</a>
      </div>
      <h2 className="text-2xl font-bold my-4">Popular Stays</h2>
      <div className="grid grid-cols-4 gap-4">
       {stays.map((s, index) => (
        <div key={index} className="rounded-xl overflow-hidden shadow-lg bg-gray-100">
          <img src={s.image} alt={s.name} className="w-full h-40 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-semibold">{s.name}</h3>
            <p className="text-blue-500 font-bold">
              {s.price} ⭐{s.rating} ({s.reviews} reviews)
            </p>
             <div className="mt-2">
              <DetailsButton />
             </div>
          </div>
      </div>
  ))}
</div>
    </div>
  );
};

export default DestCard