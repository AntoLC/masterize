import React from 'react';
import './collection-preview.styles.scss';
import CollectionItem from '../collection-item/collection-item.cpnt';

const CollectionPreview = ({ category }) => (
    <div className="collection-preview">
        <h1 className="title">{category.title.toUpperCase()}</h1>
        <div className="preview">
        { 
            category.items.filter((item, index) => index < 4).map((item, index) => 
                <CollectionItem key={item.id} item={item}/> 
            )
        }
        </div>
    </div>
);

export default CollectionPreview;