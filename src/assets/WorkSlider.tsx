import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { SiNextdotjs, SiVite, SiTailwindcss, SiCss3 } from "react-icons/si";
import Link from "next/link";
const WorkSlide = {
  slides: [
    {
      slide: [
        {
          title: "Portfolio",
          image: "/project1.jpg",
          icons: [<SiVite />, <SiTailwindcss />, <SiCss3 />],
          link: "https://github.com/ilyassKrem-dev/Portfolio"
        },
        {
          title: "To do list",
          image: "/project3.jpg",
          icons: [<SiNextdotjs />, <SiTailwindcss />],
          link: "https://github.com/ilyassKrem-dev/to-do-list"
        },
      ],
    },
    {
      slide: [
        {
          title: "Weather",
          image: "/project2.jpg",
          icons: [<SiNextdotjs />, <SiTailwindcss />],
          link: "https://github.com/ilyassKrem-dev/Weather-website"
        },
        {
          title: "Quiz",
          image: "/project4.jpg",
          icons: [<SiVite />, <SiCss3 />],
          link:"https://github.com/ilyassKrem-dev/Trevia-Game"
        },
        
      ],
    },
    {
      slide: [
        {
          title: "Tenzies",
          image: "/project5.jpg",
          icons: [<SiVite />, <SiCss3 />],
          link: "https://github.com/ilyassKrem-dev/Tenzies-Game"
        },
      ],
    },
  ],
};

export default function WorkSlider() {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[260px] xl:h-[280px]"
    >
      {WorkSlide.slides.map((slider, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2  gap-4 cursor-pointer xl:gap-0">
              {slider.slide.map((item, index) => {
                return (
                  <Link key={index} href={item.link}
                  target={'_blank'} className="relative  overflow-hidden flex items-center justify-center group">
                    <div className=" items-center justify-center  relative overflow-hidden w-[300px] h-[200px] rounded-lg border-2 border-solid border-blue-400">
                      <Image
                        src={item.image}
                        fill
                        className=" object-cover"
                        alt="Project Image"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 1200px"
                        
                      />
                      <div className="absolute inset-0 bg-gradient-to-l from-blue-400/80 via-blue-400/50 to-blue-400/80 flex flex-col items-center justify-center transition-all duration-700 opacity-0 group-hover:opacity-80">
                        <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-28 group-hover:xl:-translate-y-20 mt-20 transition-all duration-300">
                          <div className="text-black font-semibold flex flex-col items-center gap-y-2">
                            <div 
                            className="delay-200 text-xl">{item.title}</div>
                            <div className="flex gap-x-3 translate-y-[500%] group-hover:translate-y-20
                               transition-all duration-300 delay-200 group-hover:xl:translate-y-0">
                              {item.icons.map((item, index) => {
                                return <div className="text-red-700 text-2xl"
                                key={index}>{item}</div>;
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
