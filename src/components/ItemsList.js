import React from "react";
import { ProductItem } from'./ProductItem';


class ItemsList extends React.Component {
    render() {
        // let overlaySwitcher = this.props.overlaySwitcher
        let productList = this.props.data.map(item => {
            return <ProductItem key={item.id} data={item} overlaySwitcher={this.props.overlaySwitcher}/>
        });

        return(
            <div className="itemsList">
                {productList}
               {/* {productList.sort( () => {
                    return 0.5 - Math.random();
                })}*/}
            </div>
        )
    }
}


export { ItemsList }