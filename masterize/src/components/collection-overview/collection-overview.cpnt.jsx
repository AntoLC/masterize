import React from 'react';
import './collections-overview.styles.scss';
import CollectionItem from '../collection-item/collection-item.cpnt';

const CollectionOverview = ({ collection }) => (
    <div className="collections-overview">
        <h2 className="title">{collection.title.toUpperCase()}</h2>
        <div className="items">
        { 
            collection.items.map((item, index) => 
                <CollectionItem key={item.id} item={item}/> 
            )
        }
        </div>
    </div>
);

export default CollectionOverview;