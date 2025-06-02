"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import GsapAnimation from "./Gsap";
import { Power3 } from "gsap";

const WorkCarousel = ({ works, accentColor }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % works.length);
    }, 10000);

    return () => clearInterval(intervalRef.current);
  }, [works.length]);

  const handlePrev = () => {
    clearInterval(intervalRef.current);
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + works.length) % works.length
    );

    intervalRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % works.length);
    }, 10000);
  };

  const handleNext = () => {
    clearInterval(intervalRef.current);
    setActiveIndex((prevIndex) => (prevIndex + 1) % works.length);

    intervalRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % works.length);
    }, 10000);
  };

  return (
    <GsapAnimation
      className={`bg-[linear-gradient(135deg,rgba(${accentColor},0.1),transparent)] rounded-[20px] p-8 sm:p-10 backdrop-blur-md border border-white/10 h-full opacity-0`}
      animation={{
        opacity: 1,
        scale: 1,
        duration: 1,
        delay: 0.3,
        ease: Power3.easeOut,
        from: { opacity: 0, scale: 0.9 },
      }}
    >
      <div className="text-center mb-6">
        <h3 className="text-2xl text-white font-semibold">Work Showcase</h3>
      </div>

      <div className="relative">
        <div className="overflow-hidden rounded-lg mb-6">
          <Link 
            href={works[activeIndex].url || "#"} 
            target="_blank" 
            rel="noopener noreferrer"
            className="block relative aspect-[16/9] w-full cursor-pointer transform transition-transform duration-300 hover:scale-105"
          >
            <Image
              src={works[activeIndex].image}
              alt={works[activeIndex].title}
              fill
              className="object-cover transition-all duration-500"
              priority
            />
          </Link>
        </div>

        <div className="text-left mb-4">
          <h4 className="text-xl text-white font-medium mb-2">
            {works[activeIndex].title}
          </h4>
          <p className="text-white/80 mb-4">{works[activeIndex].description}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {works[activeIndex].metrics.map((metric, i) => (
              <span
                key={i}
                className={`inline-block px-3 py-1 rounded-full text-sm bg-gradient-to-r from-[rgba(${accentColor},0.8)] to-[rgba(${accentColor},0.3)] text-white shadow-md backdrop-blur-sm border border-white/10 hover:scale-105 transition-all duration-300`}
              >
                {metric}
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-between mt-4">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all duration-300"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 18L9 12L15 6"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="flex flex-col gap-3">
            <div className="grid grid-cols-5 gap-2">
              {works.slice(0, 5).map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    clearInterval(intervalRef.current);
                    setActiveIndex(i);
                    intervalRef.current = setInterval(() => {
                      setActiveIndex(
                        (prevIndex) => (prevIndex + 1) % works.length
                      );
                    }, 10000);
                  }}
                  className={`w-7 h-7 flex items-center justify-center rounded-full text-xs font-medium ${
                    i === activeIndex
                      ? `bg-gradient-to-r from-[rgba(${accentColor},1)] to-[rgba(${accentColor},0.6)] text-white shadow-md`
                      : "bg-white/10 text-white/70 hover:bg-white/20"
                  } transition-all duration-300`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-5 gap-2">
              {works.slice(5, 10).map((_, i) => (
                <button
                  key={i + 5}
                  onClick={() => {
                    clearInterval(intervalRef.current);
                    setActiveIndex(i + 5);
                    intervalRef.current = setInterval(() => {
                      setActiveIndex(
                        (prevIndex) => (prevIndex + 1) % works.length
                      );
                    }, 10000);
                  }}
                  className={`w-7 h-7 flex items-center justify-center rounded-full text-xs font-medium ${
                    i + 5 === activeIndex
                      ? `bg-gradient-to-r from-[rgba(${accentColor},1)] to-[rgba(${accentColor},0.6)] text-white shadow-md`
                      : "bg-white/10 text-white/70 hover:bg-white/20"
                  } transition-all duration-300`}
                >
                  {i + 6}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all duration-300"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 6L15 12L9 18"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </GsapAnimation>
  );
};

export default WorkCarousel;