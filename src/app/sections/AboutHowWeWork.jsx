"use client"

import React, { useEffect, useRef } from 'react'
import Bubble from "../components/Bubble"
import { Power3, gsap } from "gsap";
import GsapAnimation from '../components/Gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// Style
import "../scss/sections/AboutHowWeWork.scss"

const AboutHowWeWork = () => {
    const stickySection = useRef()
    const stickyData = [
        {
            title: "01. Project research",
            content: "We begin every project with a deep-dive into market and user insights. Our team conducts comprehensive research, including competitive analysis, customer surveys, and trend studies. This phase is designed to identify key opportunities, understand target demographics, and gather data on industry benchmarks. By mapping out the user journey and pinpointing client pain points, we lay a strategic foundation that informs both the design and functionality of the final product."
        },
        {
            title: "02. Sketches and design",
            content: "In the sketches and design phase, creativity meets strategy. Our designers translate research insights into a range of wireframes and initial mockups. We explore various layouts, typography, and color schemes, merging traditional aesthetics with modern, futuristic elements. Using digital tools like Figma and Photoshop, we refine these sketches into high-fidelity prototypes. This iterative process, combined with regular client feedback, ensures that every design detail not only looks great but also enhances usability and brand messaging."
        },
        {
            title: "03. Seleted concept",
            content: "After evaluating multiple design options, we present a selected concept that best aligns with the brand identity and project objectives. This final design is a synthesis of user-centric research and innovative design practices. It features a minimalist yet dynamic aesthetic, optimized for both web and mobile platforms. The chosen concept integrates responsive elements, a clear visual hierarchy, and scalable design components—ensuring that the brand remains modern, engaging, and adaptable to future growth."
        }
    ]

    const initAnime = () => {
        const timeline = gsap.timeline()
        const animation1 = gsap.to(stickySection.current, { clipPath: "circle(110% at 50% 600px)", duration: 1, ease: Power3.easeInOut })
        const animation2 = gsap.from(stickySection?.current?.querySelector(".container"), { opacity: 0, duration: 1, ease: Power3.easeInOut })
        timeline.add(animation1, 0);
        timeline.add(animation2, 0.3)
        timeline.pause()

        gsap.to(stickySection.current, {
            scrollTrigger: {
                trigger: stickySection.current,
                scrub: true,
                start: "160px top",
                end: `+=500`,
                toggleClass: "active",
                ease: Power3,
                onEnter: () => {
                    timeline.play()
                },
                onLeaveBack: () => {
                    timeline.reverse()
                }
            }
        })
    }

    useEffect(() => {
        let ctx = gsap.context(() => {
            let mm = gsap.matchMedia();

            mm.add("(min-width: 1200px)", () => {
                initAnime()
            });
        }, stickySection);
        return () => ctx.revert()
    }, [])

    return (
        <section ref={stickySection} className="sticky-section relative z-[5] bg-white pt-[1000px] xl:pt-[800px] lg:py-[120px] md:py-[90px] sm:py-[50px]" style={{ "--progress": 0 }}>
            <div className="container relative">
                <div className="row justify-between gap-y-[70px]">
                    <div className="col-lg-5">
                        <div className="sticky top-1/2 -translate-y-1/2 lg:translate-y-0">
                            <Bubble className="md:!opacity-0" style={{ top: -150, left: -250, opacity: 0.7, "--bubble-bg": "linear-gradient(#ec0066, #ff4e18, #384fff)" }} />
                            <div className="flex items-start relative z-10">
                                <GsapAnimation animation={{ opacity: 1, duration: 1, ease: Power3.easeInOut }} className="process-anim mr-[15px] mt-[15px] sm:mt-[10px] opacity-0"><span></span></GsapAnimation>
                                <h2 className="title heading-1 text-black font-semibold md:text-[50px] sm:text-[35px]">How we work.</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 z-10">
                        {
                            stickyData?.map((item, i) => {
                                return (
                                    <div key={i} className={`wrapper${i === stickyData.length - 1 ? "" : " mb-[400px] xl:mb-[250px] lg:mb-[100px] md:mb-[50px]"}`}>
                                        <h3 className="sticky-content-title text-black font-semibold mb-[15px]">{item.title}</h3>
                                        <p className="w-[90%] lg:w-full">{item.content}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutHowWeWork