import React, {useEffect, useState, useRef} from "react";

import KingHuman from "./img/kinghuman/Idle/Idle.png";
import KingHumanJson from "./img/kinghuman/Idle/Idle.json";

//import { Graphics } from 'pixi.js';
import * as PIXI from 'pixi.js';
import { PixiComponent, Stage, Container, AnimatedSprite } from '@inlet/react-pixi';


const PixiGame = () => {
    const willMount = useRef(true);
    const [textures, setTextures] = useState([]);

    const loadSpritesheet = () => {
        const baseTexture = PIXI.BaseTexture.from(KingHuman);
        const spritesheet = new PIXI.Spritesheet(baseTexture, KingHumanJson);
        spritesheet.parse(() => {
            setTextures( Object.keys(spritesheet.textures).map((t) => spritesheet.textures[t]));
        });
    }
    
    // Hooks way to do ComponentWillMount
    if (willMount.current) {
        loadSpritesheet();
        willMount.current = false;
    }

    return (
        <Stage width={300} height={300} options={{ backgroundColor: 0xeef1f5 }}>
            <Container position={[150, 150]}>
                <AnimatedSprite
                    anchor={0.5}
                    textures={textures}
                    isPlaying={true}
                    initialFrame={0}
                    animationSpeed={0.1}
                />
            </Container>
        </Stage>
    );
}


export default PixiGame;
