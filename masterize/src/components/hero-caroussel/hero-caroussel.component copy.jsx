import React, {useEffect, useState, useRef} from "react";
import "./hero-caroussel.scss";
import PixiGame from '../pixi-game/pixiGame.component';

import Laptop from "./img/laptop2.png";
import Phone from "./img/phoneOboo.png";
import Img1 from "./img/indian-1800.jpg";
import Img2 from "./img/african-1800.jpg";
import Img3 from "./img/asian-1800.jpg";

import { gsap } from "gsap";
import { TweenLite } from "gsap/all";

function useDidUpdate (callback, deps) {
    const hasMount = useRef(false);
    
    useEffect(() => {
        if (hasMount.current) {
            callback()
        } else {
            hasMount.current = true
        }
    }, deps)
}

const HeroCaroussel = () => {
    const [active, setActive] = useState("item3");
    const [animation_item1_txt, setAnimation_item1_txt] = useState(gsap.timeline());
    const [timeOutChangeImage, setTimeOutChangeImage] = useState(null);

    useDidUpdate(() => {
        /*TweenLite.to(".header", { duration: 2.5, ease: "elastic.out(1, 0.3)", top:"0px"});*/
        gsapAnimTxt(animation_item1_txt);
    });

    useEffect(() => {
        console.debug("HEERE:"+active);

        // Restart the animation "Developer"
        (active == "item1") 
            ? setTimeout(() => {animation_item1_txt.restart()}, 1000) 
            : setTimeout(() => {animation_item1_txt.pause(0)}, 1000);

        // Resetup the changement of image
        /*clearTimeout(timeOutChangeImage);
        setTimeOutChangeImage(setTimeout(() => {
            const nb_item = active.slice(-1) == 3 ? 1 : parseInt(active.slice(-1))+1;
            setActive(active.slice(0, -1)+nb_item);
        }, 8000));*/
    }, [active])

    function gsapAnimTxt (animation_item1_txt){
        animation_item1_txt.to(".d1", {opacity: 1, duration: 0.3})
            .to(".d2", {opacity: 1, duration: 0.3})
            .to(".d3", {opacity: 1, duration: 0.3})
            .to(".d4", {opacity: 1, duration: 0.3})
            .to(".d5", {opacity: 1, duration: 0.3})
            .to(".d6", {opacity: 1, duration: 0.3})
            .to(".d7", {opacity: 1, duration: 0.3})
            .to(".d8", {opacity: 1, duration: 0.3})
            .to(".d9", {opacity: 1, duration: 0.3});

        setAnimation_item1_txt(animation_item1_txt);
    }

    return (
        <div className="carousel js-carousel" data-drag="on">
            <div className="carousel__wrapper">
                <ol className={"carousel__list_img "+active}>
                    <li className={"carousel__item "+((active=="item1") ? "active" : "")}>
                        <div className="carousel__demo-content"><img src={Img1}/></div>
                    </li>
            
                    <li className={"carousel__item "+((active=="item2") ? "active" : "")}>
                        <div className="carousel__demo-content"><img src={Img2}/></div>
                    </li>
                    
                    <li className={"carousel__item "+((active=="item3") ? "active" : "")}>
                        <div className="carousel__demo-content"><img src={Img3}/></div>
                    </li>
                </ol>
                <ol className={"carousel__list_txt "+active}>
                    <li className={"carousel__item "+((active=="item1") ? "active" : "")} id="carousel__item1">
                        <div className="carousel__list_txt_txt">
                            <p>Anthony Le Courric</p>
                            <p>Software <span className="d1">D</span>
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
                        <img className="laptop" src={Laptop}/>
                    </li>
            
                    <li className={"carousel__item "+((active=="item2") ? "active" : "")} id="carousel__item2">
                        <img className="laptop" src={Phone}/>
                        <div className="carousel__list_txt_txt">
                            <p><span>Web</span> Application</p>
                            <p>Mobile <span>Application</span></p>
                            <p>With High Quality <span>Code.</span></p>
                        </div>
                    </li>
                    
                    <li className={"carousel__item "+((active=="item3") ? "active" : "")} id="carousel__item3">
                        <PixiGame/>
                        <p>Original Design</p>
                        <p><span>Features</span></p>
                        <p>With High Quality <span>Code.</span></p>
                    </li>
                </ol>
            </div>
        
            <nav className="carousel__controls">
                <ul>
                    <li id="carousel__control1" className={"carousel__control "+((active=="item1") ? "active" : "")} onClick={() => setActive("item1")}> </li>
                    <li id="carousel__control2" className={"carousel__control "+((active=="item2") ? "active" : "")} onClick={() => setActive("item2")}> </li> 
                    <li id="carousel__control3" className={"carousel__control "+((active=="item3") ? "active" : "")} onClick={() => setActive("item3")}> </li>
                </ul>
            </nav>
        </div>
    );
}


export default HeroCaroussel;
