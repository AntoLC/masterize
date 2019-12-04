import React, {useEffect, useState} from "react";
import "./hero-caroussel.scss";
import PixiGame from '../pixi-game/pixiGame.component';

import Video from "./img/video.mp4";
import Laptop from "./img/laptop2.png";
import Tablet from "./img/tablet.png";
import Phone from "./img/phoneOboo.png";
import Img1 from "./img/indian-1800-opt.jpg";
import Img2 from "./img/african-1800-opt.jpg";
import Img3 from "./img/asian-1800-opt.jpg";

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
            const nb_item = active.slice(-1) >= 3 ? 1 : parseInt(active.slice(-1))+1;
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
                    <li className={"carousel__item "+((active === "item3") ? "active" : "")}>
                        <div className="carousel__demo-content"><img src={Img3} alt="Background3"/></div>
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
                        <img className="phone" src={Phone} alt="Phone Mockup"/>
                        <div className="carousel__list_txt_txt">
                            <p><span>Front</span> End Developer</p>
                            <p>Back<span> End</span> Developer</p>
                            <p>Make very <span>Good</span> Coffee</p>
                        </div>
                    </li>
                    <li className={"carousel__item "+((active === "item3") ? "active" : "")} id="carousel__item3">
                        <div className="carousel__list_txt_txt">
                            <p><span>Web</span> Application</p>
                            <p>Mobile <span>Application</span></p>
                            <p>With High Quality <span>Code</span></p>
                        </div>
                        <div className="carousel__list_txt_img">
                            <img controls className="tablet" src={Tablet} alt="Tablet Mockup" type="video/mp4"/>
                            <video autoPlay loop controls width="250">
                                <source src={Video} type="video/mp4"/>
                                Sorry, your browser doesn't support embedded videos.
                            </video>
                        </div>
                    </li>
                </ol>
            </div>
        
            <nav className="carousel__controls">
                <ul>
                    <li id="carousel__control1" className={"carousel__control "+((active === "item1") ? "active" : "")} onClick={() => setActive("item1")}> </li>
                    <li id="carousel__control2" className={"carousel__control "+((active === "item2") ? "active" : "")} onClick={() => setActive("item2")}> </li>
                    <li id="carousel__control3" className={"carousel__control "+((active === "item3") ? "active" : "")} onClick={() => setActive("item3")}> </li> 
                </ul>
            </nav>
        </div>
    );
}


export default HeroCaroussel;
