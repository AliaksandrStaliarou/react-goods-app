import React from "react";


class Overlay extends React.Component {
    render() {
        return (
            <div className={this.props.class}></div>
        )
    }
}

export { Overlay }