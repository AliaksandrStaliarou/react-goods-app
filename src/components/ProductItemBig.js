import React from "react";


class ProductItemBig extends React.Component {
    state = {
        expanded: false,
        class: '',
    }
    render() {
        let available = this.props.data.available
        let item = this.props.data
        return (
            <div className="itemExp">
                <div className="itemExp_imgAndPrice">
                    <figure>
                        <img src={item.bigImage} alt=""/>
                    </figure>
                </div>
                <div className="itemExp_titleAndDescription">
                    <p onClick={() => {
                        this.props.condition(this.state.expanded)
                        this.props.overlaySwitcher(this.state.class)
                    }}>x</p>
                    <p>{item.title}</p>
                    <div>
                        <p>Краткое описание</p>
                        <p>{item.extraInfo}</p>
                    </div>
                    {available == true ?
                        <p style={{fontSize: "1.2em", color: "green"}}>В наличии</p> :
                        <p style={{fontSize: "1.2em", color: "red"}}>Под заказ</p>
                    }
                    <p>{item.price}</p>
                </div>
            </div>
        )
    }
}


export { ProductItemBig }