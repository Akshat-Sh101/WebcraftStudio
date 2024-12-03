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
            gsap.to('.ri-arrow-right-line',{
                rotate:180,
            })
        }
        else{
            gsap.to('.content',{
                transform:"translateX(0%)",
                duration:10,
                repeat: true,
                ease:"none",
            })
            gsap.to('.ri-arrow-right-line',{
                rotate:0,
            })
        }
    })
  return (
    <div id="page7">
            <div id="marque">
                <div className="content">
                    <h1>Make Your Home On Web</h1>
                    <i className="ri-arrow-right-line"></i>
                </div>
                <div className="content">
                    <h1>Make Your Home On Web</h1>
                    <i className="ri-arrow-right-line"></i>
                </div>
                <div className="content">
                    <h1>Make Your Home On Web</h1>
                    <i className="ri-arrow-right-line h-5 w-5"></i>
                </div>
                <div className="content">
                    <h1>Make Your Home On Web</h1>
                    <i className="ri-arrow-right-line"></i>
                </div>
                <div className="content">
                    <h1>Make Your Home On Web</h1>
                    <i className="ri-arrow-right-line"></i>
                </div>
            </div>
        </div>
  )
}

export default Carousel
