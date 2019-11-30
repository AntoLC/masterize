
import React, {Profiler} from 'react';
import MenuContainer from '../../components/menu-container/menu-container';
//import { HomePageContainer } from './homepage.styles';
import './homepage.styles.scss';

import HeroCaroussel from "../../components/hero-caroussel/hero-caroussel.component.jsx";

const Homepage = () => (
    <div className="homepage">
        <Profiler 
            id='Directory' 
            onRender={(id, phase, actualDuration) => {
            console.log({id, phase, actualDuration});
            }}>
            <HeroCaroussel/>
            <MenuContainer/>
        </Profiler>
    </div>
)

export default Homepage;