import React, {useEffect} from 'react';
import { SpinnerContainer, SpinnerOverlay } from './spinner.styles';

const Spinner = () => {
    useEffect(()=>{
        console.debug("Spinner");
        if(document.documentElement.scrollTop > 0)
            document.documentElement.scrollTop = 0;
    }, []);

    return (
        <SpinnerOverlay>
            <SpinnerContainer/>
        </SpinnerOverlay>
    );
};

export default Spinner;