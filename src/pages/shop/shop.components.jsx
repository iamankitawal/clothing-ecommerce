import React from 'react';
import { withRouter } from 'react-router-dom';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.components'

class ShopPage extends React.Component {
    constructor(props){
        super();

        this.state = {
            collections: SHOP_DATA
        }
    }

    render(){
        const {collections} = this.state
        return(
            <div className="shop-page">
                {collections.map(({id, ...collectionProps }) => {
                   return <CollectionPreview key={id} {...collectionProps} />
                })}
            </div>
        )
    }
}

export default withRouter(ShopPage);