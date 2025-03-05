import React from 'react'
import MagneticButton from '../components/MagneticButton'
import Image from 'next/image'
import Link from "next/link"
import Bubble from '../components/Bubble'

const HomeBanner = () => {
    return (
        <>
            {/* HomeBanner */}
            <section className="py-[320px] relative flex items-center xl:py-[250px] lg:pt-[200px] lg:pb-[100px] sm:pt-[150px]">
                <Bubble className="opacity-50" style={{ top: 0, left: "auto", right: 0, "--bubble-bg": "linear-gradient(#261362, #F900B7)" }} />
                <Bubble className="opacity-50" style={{ top: 300, left: -150, "--bubble-bg": "linear-gradient(#261362, #F900B7)" }} />
                <div className='row justify-center relative z-0 mx-0 w-full'>
                    <div className='col-xl-6 col-lg-8'>
                        <div className="text-center relative">
                            <h1 className='heading-2 font-bold text-white mb-[50px] w-[82%] mx-auto xl:w-full xl:text-[50px] xl:leading-[60px] sm:text-[40px] sm:mb-[30px]'>Take your ideas to the next level</h1>
                            <p className='text-[18px] w-full mx-auto mb-[50px] xl:w-[65%] sm:mb-[30px] sm:w-[80%] xs:w-full'>We design simple things beautifully <br /> We love what we do.</p>
                            <MagneticButton buttonClass="bg-[#6e5afd] py-[20px] px-[55px] rounded-[35px]">
                                <Link href="/contact" className="text font-poppins">Contact Us</Link>
                            </MagneticButton>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeBanner
