import React from "react";
import products from '../productsData/products'
import { FilterMenu } from'./FilterMenu';
import { ItemsList } from'./ItemsList';


class ItemsListAndFilterMenu extends React.Component {
    state = {
        data: products,
        filteredData: products.slice(),
    };

    onFilterChange = (filterData) => {
        let query = filterData.query.toLowerCase();
        let types = filterData.type;
        let priceFrom = filterData.price.from;
        let priceTo = filterData.price.to;

        let filteredTypes = this.state.data.filter(item => {
            if (types.length === 0 && query === '' && priceFrom === null) {
                return true
            }
            let isTypeMatching = types.indexOf(item.type) !== -1;
            let isQueryMatching = query.length > 0 && item.title.toLowerCase().indexOf(query) !== -1;
            let isPriceFromMatching;
            if (priceFrom === null) {
                isPriceFromMatching = false;
            } else {
                isPriceFromMatching = item.priceNum >= priceFrom;
            }
            //let isPriceToMatching = priceTo <= item.priceNum;

            return isQueryMatching || isTypeMatching || isPriceFromMatching;
        });
        this.setState({filteredData: filteredTypes})
    };

    render() {
        return (
            <div className="itemsListAndFilter">
                <FilterMenu filter={this.onFilterChange}/>
                <ItemsList data={this.state.filteredData} overlaySwitcher={this.props.overlaySwitcher}/>
            </div>
        )
    }
}


export { ItemsListAndFilterMenu }