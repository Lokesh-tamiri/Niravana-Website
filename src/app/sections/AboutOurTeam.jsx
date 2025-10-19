"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// style
import "swiper/css";

const TeamData = [
  {
    img: "/assets/img/lokeshprofile.png",
    name: "Lokesh Sai Tamiri",
    designation: "Founder & Director",
  },
  {
    img: "/assets/img/omkarprofile.png",
    name: "Omkar Bolisetti",
    designation: "Web Development",
  },
  {
    img: "/assets/img/harikaprofile.png",
    name: "Harika Tammina",
    designation: "Branding & UX",
  },
  {
    img: "/assets/img/harikaprofile.png",
    name: "Saran Jasty",
    designation: "Mobile App Development",
  },
  {
    img: "/assets/img/harikaprofile.png",
    name: "Sheshadri Chamarty",
    designation: "AI/ML Specialist",
  },
  {
    img: "/assets/img/harikaprofile.png",
    name: "Prudhvi Balusu",
    designation: "Branding & UX",
  },
  {
    img: "/assets/img/harikaprofile.png",
    name: "Gafoor Shaik",
    designation: "Digital Marketing",
  },
  {
    img: "/assets/img/harikaprofile.png",
    name: "Vasanthi Tapa",
    designation: "Frontend Developer",
  },
  {
    img: "/assets/img/harikaprofile.png",
    name: "Chaitanya Eggigani",
    designation: "Tester & QA",
  },
];

const AboutOurTeam = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 767px)");
    if (isMobile.matches) {
      setIsMobile(true);
    }

    window.matchMedia("(max-width: 767px)").onchange = (e) => {
      if (e.matches) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
  }, []);

  return (
    <section>
      <div className="container">
        <div className="row justify-center mb-[90px]">
          <div className="col-xl-6 col-lg-8 col-md-10 text-center">
            <h2 className="mb-[30px] text-white font-semibold">Our Team</h2>
            <p>
              {" "}
              Our team is dedicated to creating a website or app that best
              represents your brand, boosts online presence & drives sales
              growth
            </p>
          </div>
        </div>

        {isMobile ? (
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            spaceBetween={50}
            autoplay={{ disableOnInteraction: true, delay: 2000 }}
            breakpoints={{
              768: {
                autoplay: false,
              },
            }}
          >
            {TeamData?.map((item, i) => {
              return (
                <SwiperSlide key={i} className="flex">
                  <Team item={item} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        ) : (
          <div className="row justify-center gap-y-[30px]">
            {TeamData?.map((item, i) => {
              return <Team key={i} item={item} />;
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default AboutOurTeam;

const Team = ({ item }) => {
  return (
    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-9 col-12 sm:mx-auto">
      <div className="text-center h-full">
        <div className=" mb-[25px] bg-darkgray w-full h-full rounded-[25px] flex gap-3 justify-center items-center px-[15px] py-[15px]">
          <div className="text-center">
            <h3 className="text-[20px] leading-none text-white font-medium">
              {item.name}
            </h3>
            <p className="text-center">{item.designation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
