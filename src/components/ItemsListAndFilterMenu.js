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

        let filteredTypes = this.state.data.filter(item => {
            if (types.length === 0 && query === '') {
                return true
            }
            else if (types.indexOf(item.type) !== -1 || item.title.toLowerCase().indexOf(query) !== -1) {
                return true
            } else {
                return false
            }
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