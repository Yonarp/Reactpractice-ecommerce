import React from 'react';
import shopData from './shop.data';
import ColllectionPreview from '../../Components/collection-preview/collection-preview.component'

class Shop extends React.Component{
    constructor(props)
    {
        super(props)

        this.state = {
            collection: shopData,
        }
    }

    render(){
        const collection = this.state.collection;
        return(
            <div>
                {collection.map(({id, ...otherCollectionProps}) => (
                    <ColllectionPreview key= {id} {...otherCollectionProps}></ColllectionPreview>
                ))}
            </div>
        )
    }
}

export default Shop;