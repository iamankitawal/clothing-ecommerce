import React from 'react';
import CollectionItem from '../collection-item/collection-item.components';
import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items }) => {
    return (
    <div className="collection-preview">
        <h1 className="title">{title}</h1>
            <div className="preview">
               {items.filter((item,idx) => idx < 4)
               .map(({id, ...otherPropsItem })=>{
                   return <CollectionItem key={id} {...otherPropsItem} />
               })}
            </div>
    </div>
    )
}

export default CollectionPreview;