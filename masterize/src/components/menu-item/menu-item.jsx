import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-item.scss';

const MenuItem = ({ menu, history, match }) => (
    <div 
        className={`menu-item ${menu.size}`} 
        onClick={() => history.push(`${match.url}${menu.linkUrl}`)}
    >
        <div
            style={{backgroundImage: `url(${menu.imageUrl})`}} 
            className='background-image'>
        </div>
        <div className="content">
            <p className="title">{menu.title.toUpperCase()}</p>
            <p className="subtitle">SHOP NOW</p>
        </div>
    </div>
);

export default withRouter(MenuItem);