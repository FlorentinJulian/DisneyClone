import { useEffect, useRef, useState } from "react";
import GlobalApi from "../Services/GlobalAPI";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const screenWidtth = window.innerWidth;

const Slider = () => {
  const [movielist, setMovielist] = useState([]);
  useEffect(() => {
    getTrendingMovies();
  }, []);

  const elementRef = useRef();

  const getTrendingMovies = () => {
    GlobalApi.getTrendingVideos.then((resp) => {
      setMovielist(resp.data.results);
    });
  };

  const sliderRight = (element) => {
    element.scrollLeft += screenWidtth - 110;
  };
  const sliderLeft = (element) => {
    element.scrollLeft -= screenWidtth - 110;
  };

  return (
    <div>
      <HiChevronLeft
        className=" hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer"
        onClick={() => sliderLeft(elementRef.current)}
      />
      <HiChevronRight
        className="hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] right-0 cursor-pointer"
        onClick={() => sliderRight(elementRef.current)}
      />
      <div
        className="flex overflow-x-auto w-full px-16 py-4 scrollbar-hide scroll-smooth"
        ref={elementRef}
      >
        {movielist.map((item) => (
          <img
            className="min-w-full md:h-[310px] object-cover object-left-top mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all duration-100 ease-in"
            src={IMAGE_BASE_URL + item.backdrop_path}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
