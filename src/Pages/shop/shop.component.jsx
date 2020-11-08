import React from 'react';
import shopData from './shop.data';

class Shop extends React.Component{
    constructor(props)
    {
        super(props)

        this.state = {
            collection: shopData,
        }
    }

    render(){
        return(
            <div>
                This is a shop page
            </div>
        )
    }
}

export default Shop;