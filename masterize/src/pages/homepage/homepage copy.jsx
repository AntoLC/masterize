
import React, {Profiler} from 'react';
import MenuContainer from '../../components/menu-container/menu-container';
//import { HomePageContainer } from './homepage.styles';
import './homepage.styles.scss';

import Video from "./video.mp4";

const Homepage = () => (
    <div className="homepage">
        <Profiler 
            id='Directory' 
            onRender={(id, phase, actualDuration) => {
            console.log({id, phase, actualDuration});
            }}>
            <div className="container-video">
                <video autoPlay muted loop id="myVideo">
                    <source src={Video} type="video/mp4" />
                </video>
                <div className="filter-video" />
            </div>
            <MenuContainer/>
        </Profiler>
    </div>
)

export default Homepage;