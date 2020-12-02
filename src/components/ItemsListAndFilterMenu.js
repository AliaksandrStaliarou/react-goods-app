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


        this.applyOrder(filteredList);

    };

    onSortChange(field, order) {
        this.setState({sortField: field, sortOrder: order}, () => {
            this.applyOrder();
        });

    };

    applyOrder(filteredList) {
        const { sortField, sortOrder } = this.state;
        if (!filteredList) {
            filteredList = (this.state.filteredData || this.state.data).slice(); // копируем список, чтобы не отсортировать по ссылке
        }
        filteredList.sort((a, b) => { // сортировка по полю
            if (a[sortField] > b[sortField]) return 1;
            if (a[sortField] < b[sortField]) return -1;
            return 0;
        });
        if (sortOrder === 'asc') filteredList.reverse();
        this.setState({filteredData: filteredList});
    }

    render() {
        return (
            <div>
                <div className="sortingMenu">
                    <p>Сортировать по:</p>
                    <SortingMenu className={this.props.class}
                        //filter={this.onFilterChange}
                                 sortingChange={this.onSortChange.bind(this)}
                        //filteredData={this.state.filteredData}
                        //transferringSortedDataDecr={this.transferringSortedDataDecr}

                    />
                </div>
                <div className="itemsListAndFilter">
                    <FilterMenu filter={this.onFilterChange.bind(this)}
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