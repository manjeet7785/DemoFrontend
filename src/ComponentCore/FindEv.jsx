import React, { useEffect, useState } from 'react';
import HighlightText from '../TextColor/HighlightText';
import { FaFilter } from "react-icons/fa";
import DetailsCard from '../MINIAPI/DetailsCard';
import { Link, useNavigate } from 'react-router-dom';
import GoogleMapp from '../MINIAPI/GoogleMap';

const FindEv = () => {
  const [evapi, setevapi] = useState([]);
  const navigate = useNavigate();

  const handleInputClick = () => navigate('/filter/Stations');
  const MapHandle = () => navigate('/map/GoogleMapp');

  const stationSuggestions = [
    { id: 1, text: "Near Me" },
    { id: 2, text: "Popular Locations" },
    { id: 3, text: "Fast Chargers (DC)" },
    { id: 4, text: "AC Chargers" },
  ];

  return (
    <div className='w-full min-h-screen flex items-center justify-center  p-4 sm:p-6 md:p-10 '>
      <div className='w-full max-w-7xl min-h-[85vh] rounded-2xl text-white flex flex-col lg:flex-row  bg-gradient-to-tr from-blue-900 via-gray-950 to-black
                      items-stretch justify-center gap-8 lg:gap-12 p-6 md:p-10 
                      border border-gray-800 bg-gray-950 shadow-2xl overflow-hidden'>
        <div className='w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-6'>

          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight'>
            Find EV
            <span className='block mt-2'>
              <HighlightText text={"Charging Stations"} />
            </span>
          </h1>

          <p className='text-gray-400 text-sm sm:text-base md:text-lg lg:max-w-[90%]'>
            Discover electric vehicle charging stations with real-time availability and advanced filtering at your fingertips.
          </p>

          <div className='w-full space-y-4'>
            <div className='w-full flex flex-col sm:flex-row gap-3 p-2 rounded-xl bg-gray-900 border border-gray-800 shadow-inner'>
              <input
                type="text"
                placeholder=" Search by location, station name"
                className="flex-grow p-3 bg-transparent text-white focus:outline-none placeholder-gray-500"
                onClick={handleInputClick}
              />
              <Link
                to="/filter/Stations"
                className='flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 font-medium'
              >
                <FaFilter />
                Filter
              </Link>
            </div>

            {/*====================== Suggestions Chips======================== */}

            <div className='flex flex-wrap gap-2 justify-center lg:justify-start'>
              {stationSuggestions.map((suggestion) => (
                <button
                  key={suggestion.id}
                  onClick={handleInputClick}
                  className='px-4 py-1.5 text-xs sm:text-sm rounded-full border border-gray-700 text-gray-300 bg-gray-800 hover:border-blue-500 hover:text-blue-400 transition-all duration-200'
                >
                  {suggestion.text}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/*====================== RIGHT SECTION: Details & Map ======================== */}
        <div className='w-full lg:w-1/2 flex flex-col gap-6'>
          <div className='flex-1 min-h-[200px] bg-gray-900/50 rounded-xl border border-gray-800 shadow-lg overflow-hidden'>
            <DetailsCard />
          </div>
          <div
            onClick={MapHandle}
            className='w-full h-[250px] sm:h-[300px] md:h-[350px] border-2 border-amber-900/50 rounded-xl overflow-hidden cursor-pointer shadow-lg'
          >
            <GoogleMapp />
          </div>

        </div>
      </div>
    </div>
  );
};

export default FindEv;