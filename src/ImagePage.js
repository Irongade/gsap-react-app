import React, {useRef, useEffect} from "react";
import People from "./images/people.webp"
import CSSRulePlugin from "gsap/CSSRulePlugin";
import gsap, {Power2} from "gsap";

import "./Image.scss"

const ImagePage = () => {

    let container = useRef(null)
    let image = useRef(null)

    
    const tl = gsap.timeline();
    
    useEffect(() => {
        const imageReveal = CSSRulePlugin.getRule(".img-container::after");
        tl.to(container, {duration: 0, css: {visibility: "visible"}})
        .to(imageReveal, {width: "0%", duration: 1.4, ease: Power2.easeInOut})
        .from(image, {duration: 1.4, scale: 1.6, ease: Power2.easeInOut, delay: -1.6})
    }, [])

    return (
        <section className="main">
            <div ref={el => container = el}  className="container">
                <>
                <div className="img-container">
                    <img ref={el => image = el} src={People} alt="people" />
                </div>  
                </>
            </div>
        </section>
    )
}

export default ImagePage;