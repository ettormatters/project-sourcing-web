import React from 'react'

class OrderButton extends React.Component {
    render(){
        return(
            <div className="category-order-item">
                <button type="button" id={this.props.id} onClick={this.props.onClick}>{this.props.text}</button>
                <style jsx>{`
                    .category-order-item {
                    
                    }
                `}</style>
            </div>
        );
    }
}

export default OrderButton