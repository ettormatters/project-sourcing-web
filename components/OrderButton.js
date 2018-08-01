import React from 'react'

class OrderButton extends React.Component {
    render(){
        return(
            <div className="category-order-item">
                <button type="button" id={this.props.id} onClick={this.props.onClick}>{this.props.text}</button>
                <style jsx>{`
                    button {
                        border: none;
                        background-color: #555555;
                        color: white;
                        padding: 5px;
                        text-align: center;
                        text-decoration: none;
                        font-size: 5px;
                        margin: 5px 0;
                    }
                `}</style>
            </div>
        );
    }
}

export default OrderButton