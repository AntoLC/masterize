
import React from 'react';
import Menu from '../menu-item/menu-item';
import './directory.styles.scss';
//import sections from './directory.data.js'
import { connect } from 'react-redux';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import { createStructuredSelector } from 'reselect';

const MenuContainer = ({ sections }) => (
    <div className="directory-menu">
    {sections.map((menu) => <Menu key={ menu.id } menu={ menu } />)}
    </div>
)

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})
export default connect(mapStateToProps)(MenuContainer);