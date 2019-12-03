
import React, {useEffect, useState} from 'react';
import Menu from '../menu-item/menu-item';
import './directory.styles.scss';

import { connect } from 'react-redux';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import { createStructuredSelector } from 'reselect';

const MenuContainer = ({ sections }) => {
    const [scrollTop, setScrollTop] = useState(false);
    useEffect(() => {
        //const directoryMenu = document.getElementById("directory-menu");
        const scrollListener = (event) => {
            (event.target.scrollingElement.scrollTop >= 200)
                ? setScrollTop(true) : setScrollTop(false);
        };
        window.addEventListener('scroll', scrollListener);

        return () => {
            window.removeEventListener('scroll', scrollListener);
        };
    }, []);

    return (
        <div className={"directory-menu "+ ((scrollTop) ? "scroll" : "")} id="directory-menu">
            {sections.map((menu) => <Menu key={ menu.id } menu={ menu } />)}
        </div>
    );
}
    

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})
export default connect(mapStateToProps)(MenuContainer);