import React from "react";
import { ProductItemSmall } from'./ProductItemSmall';
import { ProductItemBig } from'./ProductItemBig';


class ProductItem extends React.Component {
    state = {
        expanded: false,
    }
    onClickFromSmallToBig = (status) => {
        this.setState({expanded: status})
    }
    render() {
        let expanded = this.state.expanded
        if (expanded == false) {
            return(
                <ProductItemSmall data={this.props.data}
                                  condition={this.onClickFromSmallToBig}
                                  overlaySwitcher={this.props.overlaySwitcher} />
            )
        } else {
            return(
                <ProductItemBig data={this.props.data}
                                condition={this.onClickFromSmallToBig}
                                overlaySwitcher={this.props.overlaySwitcher} />
            )
        }
    }
}


export { ProductItem }