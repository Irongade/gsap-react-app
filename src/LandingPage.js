import React, {useRef, useEffect} from "react";
import {
    useHistory
} from "react-router-dom";

import './Landing.scss';

// ASSETS
import arrow from "./images/arrow-right.svg";
import imgGirl from "./images/girl.webp";
import imgBoy from "./images/boy.webp";

import gsap from "gsap";

function Landing() {

  const history =  useHistory()

  let app = useRef(null)
  let images = useRef(null)
  let content = useRef(null)

  useEffect(() => {

    const headlineFirst = content.children[0].children[0];
    const headlineSecond = headlineFirst.nextSibling;
    const headlineThird= headlineSecond.nextSibling;
    const contentP = content.children[1];
    const contentButton = content.children[2];


    const girlImage = images.firstElementChild;
    const boyImage = images.lastElementChild;

    const tl = gsap.timeline().delay(.8);

    gsap.to(app, {duration: 1, css: {visibility: "visible"}})

    tl
    .from(girlImage, {duration: 1.2, y: 1280, ease: "power2.out"}, "Start")
    .from(girlImage.firstElementChild, {duration: 2, scale: 1.6, ease: "power2.out"}, .2)
    .from(boyImage, {duration: 1.2, y: 1280, ease: "power2.out"}, .2)
    .from(boyImage.firstElementChild, {duration: 2, scale: 1.6, ease: "power2.out"}, .2)

    tl.from([headlineFirst.children, headlineSecond.children, headlineThird.children], {
      duration: 1,
      y: 44,
      stagger: {
        each: .15,
        ease: "power2.out"
      }
    }, .8, "Start")
    .from(contentP, {duration: 1, y:20, opacity: 0, ease: "power2.out"}, 1.4)
    .from(contentButton, {duration: 1, y:20, opacity: 0, ease: "power2.out"}, 1.6)

  }, [])

  const viewImagePage = () => {
      history.push("/image")
  }

  return (
    <div className="hero" ref={el => app = el}>
    <div className="container">
      <div className="hero-inner">
        <div className="hero-content">
          <div className="hero-content-inner" ref={el => content = el}>
            <h1>
              <div className="hero-content-line">
                <div className="hero-content-line-inner">Relieving the burden</div>
              </div>
              <div className="hero-content-line">
                <div className="hero-content-line-inner">of disease caused</div>  
              </div>
              <div className="hero-content-line">
                <div className="hero-content-line-inner">by behaviors.</div>
              </div>
            </h1>
            <p>
              Better treats serious cardiometabolic diseases to transform
              lives and reduce healthcare utilization through the use of
              digital therapeutics.
            </p>
            <div className="btn-row">
              <button onClick={viewImagePage} className="explore-button">Explore
                <div className="arrow-icon">
                  <img src={arrow} alt="row"/>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="hero-images">
          <div   className="hero-images-inner" ref={el => images = el}>
            <div className="hero-image girl">
              <img src={imgGirl} alt="girl" />
            </div>
            <div className="hero-image boy">
              <img src={imgBoy} alt="boy" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  );
}

export default Landing;
