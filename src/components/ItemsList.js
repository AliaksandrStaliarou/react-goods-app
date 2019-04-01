import React from "react";
import { ProductItem } from'./ProductItem';


class ItemsList extends React.Component {
    render() {
        // let overlaySwitcher = this.props.overlaySwitcher
        let productList = this.props.data.map(function(item) {
            return <ProductItem key={item.id} data={item} overlaySwitcher={this.props.overlaySwitcher}/>
        }.bind(this));
        return(
            <div className="itemsList">
                {productList}
            </div>
        )
    }
}


export { ItemsList }