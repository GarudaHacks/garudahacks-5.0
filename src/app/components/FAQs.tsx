import React from 'react'
import Accordion from "./Accordion"
import { useState } from 'react';

const FAQs = () => {

    return (
        <main className="w-full h-[130vh]">
            <h1 className="text-white text-center font-pptelegraf pt-8">
                Got Questions? We've Got Answers! 
            </h1>
            <h2 className="text-white text-center text-3xl font-bold">
                Your Guide to Navigating 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-300 via-purple-500 to-gray-100"> Garuda Hacks 5.0</span>
            </h2> 

            <div className="flex w-10/12 lg:w-[1040px] mx-auto mt-3 pl-3 pb-3 py-3 rounded-md border border-white  hover:bg-slate-900">
                <Accordion title="What is a hackathon?" answer="A hackathon is a programming competition in which competitors use technology to build innovative projects within 36 hours. There will be opportunities to win cool prizes, learn from our key-note speakers, and network with our sponsors."/> 
            </div>

            <div className="flex w-10/12 lg:w-[1040px] mx-auto mt-3 pl-3 pb-3 py-3 rounded-md border border-white  hover:bg-slate-900">
                <Accordion title="Where will it be hosted?" answer="Universitas Multimedia Nusantara (UMN) Tangerang, just outside Jakarta, Indonesia"/> 
            </div>

            <div className="flex w-10/12 lg:w-[1040px] mx-auto mt-3 pl-3 pb-3 py-3 rounded-md border border-white  hover:bg-slate-900">
                <Accordion title="Who can participate?" answer="Everyone can participate! We encourage anyone who is interested in learning more about hackathons, programming, and the tech industry to join Garuda Hacks!"/> 
            </div>

            <div className="flex w-10/12 lg:w-[1040px] mx-auto mt-3 pl-3 pb-3 py-3 rounded-md border border-white  hover:bg-slate-900">
                <Accordion title="Do I have to know code?" answer="Nope! You can learn along the way or team up with experienced programmers. Skills such as designing, business planning, and others are all going to impact the projects in various ways!"/> 
            </div>

            <div className="flex w-10/12 lg:w-[1040px] mx-auto mt-3 pl-3 pb-3 py-3 rounded-md border border-white  hover:bg-slate-900">
                <Accordion title="How much does it cost?" answer="Nothing at all! However, food and transportation is not included."/> 
            </div>

            <div className="flex w-10/12 lg:w-[1040px] mx-auto mt-3 pl-3 pb-3 py-3 rounded-md border border-white  hover:bg-slate-900">
                <Accordion title="How do I apply?" answer="You can apply as an individual or as a team (up to 4 participants max). If you are looking for teammates, you can form teams with other participating hackers at the start of the event. Don't worry, we will help you pair up with other hackers!"/> 
            </div>

            <div className="flex w-10/12 lg:w-[1040px] mx-auto mt-3 pl-3 pb-3 py-3 rounded-md border border-white  hover:bg-slate-900">
                <Accordion title="What can I make?" answer="We welcome all software and hardware hacks that align with our tracks. We will accept no-code alternatives as a hack, however we do not have a separate judging criteria specifically tailored to it."/> 
            </div>

            <div className="flex w-10/12 lg:w-[1040px] mx-auto mt-3 pl-3 pb-3 py-3 rounded-md border border-white  hover:bg-slate-900">
                <Accordion title="How will projects be judged?" answer="Projects will be judged based on originality, (un)conventionality, practicality and scalability. We are looking for projects that bring awareness to issues that not many people are currently trying to solve, while still having the potential to scale."/> 
            </div>
            
        </main>
    )
}

export default FAQs 