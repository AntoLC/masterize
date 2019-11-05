
import React, {useContext} from 'react';
import Menu from '../menu-item/menu-item';
import './directory.styles.scss';
import DirectoryContext from '../../contexts/directory/directory.context';


const MenuContainer = () => {
    const { sections } = useContext(DirectoryContext);
    
    return (
        <div className="directory-menu">
        {sections.map((menu) => <Menu key={ menu.id } menu={ menu } />)}
        </div>
    )
};

export default MenuContainer;