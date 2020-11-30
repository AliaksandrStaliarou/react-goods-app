import React from "react";
import products from '../productsData/products'
import { SortingMenu } from'./SortingMenu';
import { FilterMenu } from'./FilterMenu';
import { ItemsList } from'./ItemsList';


class ItemsListAndFilterMenu extends React.Component {
    state = {
        sortField: null,
        sortOrder: null,
        data: products,
        filteredData: products.slice(),
    };

    onFilterChange = (filterData) => {
        let query = filterData.query.toLowerCase();
        let types = filterData.type;
        let priceFrom = filterData.price.from;
        let priceTo = filterData.price.to;

        let isTypeMatching = (item) => {
            if (types.length === 0) {
                return true;
            }
            return types.indexOf(item.type) !== -1;
        };

        let isQueryMatching = (item) => {
            if (query.length === 0) {
                return true;
            }
            return item.title.toLowerCase().indexOf(query) !== -1;
        };

        let isPriceFromMatching = (item) => {
            if (priceFrom === null) {
                return true;
            }
            return item.priceNum >= priceFrom;
        };

        let isPriceToMatching = (item) => {
            if (priceTo === null) {
                return true;
            }
            return item.priceNum <= priceTo;
        };

        let filteredList = this.state.data.filter(item => {
            return isTypeMatching(item)
                && isQueryMatching(item)
                && isPriceFromMatching(item)
                && isPriceToMatching(item);
        });


        this.setState({filteredData: filteredList});

    };

    onSortChange = (field, order) => {
        this.setState({sortField: field, sortOrder: order})
    };

    //передача отсортированных товаров(sortedItems) в this.state.filteredData
    /*transferringSortedDataDecr = (value) => {
        this.setState({filteredData: value})
    };*/


    render() {
        return (
            <div>
                <div className="sortingMenu">
                    <p>Сортировать по:</p>
                    <SortingMenu className={this.props.class}
                                 //filter={this.onFilterChange}
                                 onSortChange={this.onSortChange}
                                 //filteredData={this.state.filteredData}
                                 //transferringSortedDataDecr={this.transferringSortedDataDecr}

                    />
                </div>
                <div className="itemsListAndFilter">
                    <FilterMenu filter={this.onFilterChange}
                                sortField={this.state.sortField}
                                sortOrder={this.state.sortOrder}
                    />
                    <ItemsList data={this.state.filteredData}
                               overlaySwitcher={this.props.overlaySwitcher} />
                </div>
            </div>

        )
    }
}


export { ItemsListAndFilterMenu }