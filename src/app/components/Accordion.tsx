"use client"; 
import React, {useState, ReactNode} from "react"; 
import { Collapse } from "react-collapse"; 

interface AccordionProps {
    title: string; 
    answer: string; 
}


const Accordion = ({title, answer}: AccordionProps) => {
    const [accordionOpen, setAccordionOpen] = useState(false); 
    return (
    <div className="w-full h-full">
        <button onClick={() => setAccordionOpen(!accordionOpen)} className="w-full h-full lg:w-[1000px] flex justify-between pr-8">
            <span className="text-white font-bold">{title}</span>
            {accordionOpen ? <span className="text-white">-</span> : <span className="text-white">+</span>}
        </button>
        <div className={`grid ove(0 rflow-hidden transition-all duration-300 ease-in-out ${
                accordionOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[1em] opacity-0'
            }`}>
            <div className="text-white overflow-hidden w-full">{answer}</div>
        </div> 

    </div>
    );
};

export default Accordion;


// const Accordion = () => {
//     const [accordionOpen, setAccordionOpen] = useState(false); 

//     return (
//     <div className="py-2">
//         <button className="flex justify-between w-full">
//             <span>
//                 This is the title
//             </span>
//             <span>+</span>
//         </button>
//         <div className= {"grid overflow-hidden transition-all duration-300 ease-in-out ${
//             accordionOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
//         }"}>
//             <div>
//                 This is the answer
//             </div>
//         </div>

//     </div>
//     ); 
// }

// export default Accordion; 