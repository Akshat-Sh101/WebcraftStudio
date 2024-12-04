import React from 'react'

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all'

import '../App.css'
gsap.registerPlugin(ScrollTrigger)
function Carousel() {
    window.addEventListener("wheel",function(dets){
        if(dets.deltaY >= 0){
            gsap.to('.content',{
                transform:"translateX(-200%)",
                duration:8,
                repeat:true,
                ease:"none",
    
            })
            gsap.to('.arrow',{
                rotate:180,
            })
        }
        else{
            gsap.to('.content',{
                transform:"translateX(0%)",
                duration:8,
                repeat: true,
                ease:"none",
            })
            gsap.to('.arrow',{
                rotate:0,
            })
        }
    })
  return (
    <div id="page7">
            <div id="marque"  className='border-4 border-t-* border-b-*'>
                <div className="content">
                    <h1>Make Home On Web</h1>
                    <img src="src\assets\arrow-right-line.svg" className='h-[80px] w-[80px] arrow'  alt="" />
                </div>
                <div className="content">
                    <h1>Make Home On Web</h1>
                    <img src="src\assets\arrow-right-line.svg" className='h-[80px] w-[80px] arrow'  alt="" />
                </div>
                <div className="content">
                    <h1>Make Home On Web</h1>
                    <img src="src\assets\arrow-right-line.svg" className='h-[80px] w-[80px] arrow'  alt="" />
                </div>
                <div className="content">
                    <h1>Make Home On Web</h1>
                    <img src="src\assets\arrow-right-line.svg" className='h-[80px] w-[80px] arrow'  alt="" />
                </div>
                <div className="content">
                    <h1>Make Home On Web</h1>
                    <img src="src\assets\arrow-right-line.svg" className='h-[80px] w-[80px] arrow'  alt="" />
                </div>
            </div>
        </div>
  )
}

export default Carousel
