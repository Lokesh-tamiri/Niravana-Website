import React from 'react'
import '../../app/scss/sections/WorkList.scss'
import Image from 'next/image'

const portfolioData = [
    {
        img: "/assets/img/carefy.webp",
        title: "CareFyInc’s solutions",
        link: "https://carefyinc.com/"
    },
    {
        img: "/assets/img/eficens.webp",
        title: "Eficens Systems",
        link: "https://eficens.ai"
    },
    {
        img: "/assets/img/axisb.webp", 
        title: "AxisB",
        link: "https://www.axisbinc.com/"
    },
    {
        img: "/assets/img/heartcare4life.webp",
        title: "Heartcare4life ",
        link: "https://www.heartcare4life.com/"
    },
    {
        img: "/assets/img/chatpdf.webp",
        title: "Chat With Pdf",
        link: "https://chat-pdf.lokesh-tamiri.in/"
    }
]

const WorkList = () => {
    return (
        <section className='portfolio-list pt-0 pb-[250px] md:pb-[75px] sm:pb-[50px]'>
            <div className="container px-[15px] relative">
                <div className="row gap-y-20">
                    {
                        portfolioData.map((data, index) => {
                        
                            const linkUrl = data.link.startsWith('http') ? data.link : `https://${data.link}`;
                            
                            return (
                                <div key={index} className="col-lg-6">
                                    <a href={linkUrl} target='_blank' rel="noopener noreferrer">
                                        <div className="portfolio-card cursor-pointer">
                                            <Image className="mb-[30px] rounded-3xl overflow-hidden md:w-full md:mb-[15px]" src={data.img} alt={data.title} width={500} height={500} />
                                            <h2 className="worklist-title text-[25px] leading-[30px] text-white before:content-[''] before:w-[85px] before:h-[2px] before:bg-[#fff3] before:inline-block before:align-middle before:mr-[15px] md:text-[20px] md:before:w-[50px]">
                                                {data.title}
                                            </h2>
                                        </div>
                                    </a>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default WorkList
