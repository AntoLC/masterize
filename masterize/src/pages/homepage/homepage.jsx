
import React, {Profiler} from 'react';
import MenuContainer from '../../components/menu-container/menu-container';
import { HomePageContainer } from './homepage.styles'

const Homepage = () => (
    <HomePageContainer>
        <Profiler 
            id='Directory' 
            onRender={(id, phase, actualDuration) => {
            console.log({id, phase, actualDuration});
            }}>
            <MenuContainer/>
        </Profiler>
    </HomePageContainer>
)

export default Homepage;