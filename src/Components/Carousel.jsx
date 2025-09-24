import React from 'react';
import Slider from 'react-slick';
import { getData } from '../Context/DataContext';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // arrow icon
import Category from './Category';

// Custom Arrow Left
const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-5 top-1/2 -translate-y-1/2 z-10 bg-white/70 hover:bg-white p-2 cursor-pointer rounded-full shadow hidden md:block"
  >
    <ChevronLeft className="w-6 h-6 text-purple-700" />
  </button>
);

// Custom Arrow Right
const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-5 top-1/2 -translate-y-1/2 z-10 bg-white/70 hover:bg-white p-2 cursor-pointer rounded-full shadow hidden md:block"
  >
    <ChevronRight className="w-6 h-6 text-purple-700" />
  </button>
);

const Carousel = () => {
  const { data } = getData();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="relative bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e]">
      <Slider {...settings}>
        {data?.slice(0, 7)?.map((item, index) => (
          <div key={index}>
            <div className="flex flex-col md:flex-row gap-10 justify-center h-[600px] items-center px-4">
              {/* Left Side */}
              <div className="space-y-6 text-center md:text-left">
                <h3 className="text-red-500 font-semibold font-sans text-sm">
                  Powering Your World with the Best in Electronics
                </h3>
                <h1 className="text-4xl font-bold uppercase line-clamp-3 md:w-[500px] text-white">
                  {item.title}
                </h1>
                <p className="md:w-[500px] line-clamp-3 text-gray-300 pr-7">
                  {item.description}
                </p>
                <button className="bg-gradient-to-r from-red-500 to-purple-500 text-white px-5 py-2 rounded-md cursor-pointer mt-3 shadow-lg hover:scale-105 transition">
                  Shop Now
                </button>
              </div>

              {/* Right Side */}
              <div>
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-full w-[400px] md:w-[500px] hover:scale-105 transition-all shadow-2xl shadow-red-400"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <Category />
    </div>
  );
};

export default Carousel;
