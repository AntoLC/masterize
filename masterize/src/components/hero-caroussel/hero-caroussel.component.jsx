import React, {useEffect, useState} from "react";
import "./hero-caroussel.scss";
import PixiGame from '../pixi-game/pixiGame.component';

import Laptop from "./img/laptop2.png";
import Phone from "./img/phoneOboo.png";
import Img1 from "./img/indian-1800.jpg";
import Img2 from "./img/african-1800.jpg";
import Img3 from "./img/asian-1800.jpg";

import { gsap } from "gsap";

const HeroCaroussel = () => {
    const [active, setActive] = useState("item1");
    const [animation_item1_txt, setAnimation_item1_txt] = useState(null);
    const [timeOutChangeImage, setTimeOutChangeImage] = useState(null);
    const gsapAnimTxt = () => {
        const animation = gsap.timeline().to(".d1", {opacity: 0, duration: 0.7})
            .to(".d1", {opacity: 1, duration: 0.3})
            .to(".d2", {opacity: 1, duration: 0.3})
            .to(".d3", {opacity: 1, duration: 0.3})
            .to(".d4", {opacity: 1, duration: 0.3})
            .to(".d5", {opacity: 1, duration: 0.3})
            .to(".d6", {opacity: 1, duration: 0.3})
            .to(".d7", {opacity: 1, duration: 0.3})
            .to(".d8", {opacity: 1, duration: 0.3})
            .to(".d9", {opacity: 1, duration: 0.3});
        
        setAnimation_item1_txt(animation);
    }

    useEffect(() => {
        //console.debug("HeroCaroussel:"+active);
        // Restart the animation "Developer"
        if(animation_item1_txt){
            (active === "item1") 
                ? setTimeout(() => {animation_item1_txt.restart()}, 1000) 
                : setTimeout(() => {animation_item1_txt.pause(0)}, 1000);
        }
        else
            gsapAnimTxt();

        // Resetup the changement of image
        clearTimeout(timeOutChangeImage);
        const currentTimeout = setTimeout(() => {
            const nb_item = active.slice(-1) === 2 ? 1 : parseInt(active.slice(-1))+1;
            setActive(active.slice(0, -1)+nb_item);
        }, 8000);
        setTimeOutChangeImage(currentTimeout);

        return () => clearTimeout(currentTimeout);
    }, [active])

    return (
        <div className="carousel js-carousel" data-drag="on">
            <div className="carousel__wrapper">
                <ol className={"carousel__list_img "+active}>
                    <li className={"carousel__item "+((active === "item1") ? "active" : "")}>
                        <div className="carousel__demo-content"><img src={Img1} alt="Background1"/></div>
                    </li>
            
                    <li className={"carousel__item "+((active === "item2") ? "active" : "")}>
                        <div className="carousel__demo-content"><img src={Img2} alt="Background2"/></div>
                    </li>
                </ol>
                <ol className={"carousel__list_txt "+active}>
                    <li className={"carousel__item "+((active === "item1") ? "active" : "")} id="carousel__item1">
                        <div className="carousel__list_txt_txt">
                            <p>Anthony Le Courric</p>
                            <p>Software <span className="hidden d1">D</span>
                                <span className="hidden d2">e</span>
                                <span className="hidden d3">v</span>
                                <span className="hidden d4">e</span>
                                <span className="hidden d5">l</span>
                                <span className="hidden d6">o</span>
                                <span className="hidden d7">p</span>
                                <span className="hidden d8">e</span>
                                <span className="hidden d9">r</span>
                            </p>
                            <p><span>From</span> France</p>
                        </div>
                        <img className="laptop" src={Laptop} alt="Laptop Mockup"/>
                    </li>
                    <li className={"carousel__item "+((active === "item2") ? "active" : "")} id="carousel__item2">
                        <img className="laptop" src={Phone} alt="Phone Mockup"/>
                        <div className="carousel__list_txt_txt">
                            <p><span>Web</span> Application</p>
                            <p>Mobile <span>Application</span></p>
                            <p>With High Quality <span>Code.</span></p>
                        </div>
                    </li>
                </ol>
            </div>
        
            <nav className="carousel__controls">
                <ul>
                    <li id="carousel__control1" className={"carousel__control "+((active === "item1") ? "active" : "")} onClick={() => setActive("item1")}> </li>
                    <li id="carousel__control2" className={"carousel__control "+((active === "item2") ? "active" : "")} onClick={() => setActive("item2")}> </li> 
                </ul>
            </nav>
        </div>
    );
}


export default HeroCaroussel;
