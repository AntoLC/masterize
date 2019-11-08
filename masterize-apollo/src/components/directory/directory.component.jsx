import React from 'react';
import SECTIONS from './sections';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

const Directory = () => (
  <div className='directory-menu'>
    {SECTIONS.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);

export default Directory;
