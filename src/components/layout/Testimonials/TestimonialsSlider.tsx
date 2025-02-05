"use client";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
function TestimonialsSlider() {
  return (
    <div className="">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 10000,
          disableOnInteraction: true,
        }}
        loop={true}
      >
        <SwiperSlide>
          <TestimonialsSliderCard />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialsSliderCard />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialsSliderCard />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialsSliderCard />
        </SwiperSlide>
        <div className="md:absolute bottom-0  right-0 md:left-auto left-0 mx-auto md:inline-block flex justify-center items-center md:w-auto md:mt-0 mt-5 w-full  z-20">
          <SlideNextButton />
        </div>
      </Swiper>
    </div>
  );
}

export default TestimonialsSlider;

export function SlideNextButton() {
  const swiper = useSwiper();

  return (
    <div className="flex md:justify-start justify-between items-center gap-4 mt-4 z-0">
      <button
        className="w-12 h-12 bg-white/10 flex justify-center items-center rounded-2xl backdrop-blur-xl"
        onClick={() => swiper.slidePrev()}
      >
        <IoIosArrowBack size={20} />
      </button>
      <button
        className="w-12 h-12 bg-white/10 flex justify-center items-center rounded-2xl backdrop-blur-xl"
        onClick={() => swiper.slideNext()}
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
}

function TestimonialsSliderCard() {
  return (
    <div className="flex md:justify-start justify-center md:items-start items-center md:text-left text-center flex-col gap-4">
      <div className="flex justify-start items-center gap-4">
        <div className="w-8 h-8 rounded-full bg-primary flex justify-center items-center"></div>
        <p className="text-xl  font-semibold text-white">Gray To Green</p>
      </div>
      <div className="flex justify-center items-center gap-1 text-xl mt-4 text-primary">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
      <p className="md:text-2xl font-semibold text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
        dignissimos atque nulla quis provident aut rerum recusandae accusamus
        omnis! Ea delectus voluptatibus, placeat voluptatum similique assumenda
        vitae laudantium hic nobis!
      </p>
      <div className="flex justify-start items-center gap-5 mt-6">
        <Image
          src="/user.png"
          width={140}
          height={140}
          alt="arrow"
          className="w-14 h-14 rounded-full object-cover"
        />
        <div className="">
          <h1 className="font-bold text-xl">John Doe</h1>
          <p className=" text-white/50">CEO,Founder</p>
        </div>
      </div>
    </div>
  );
}
