import React from 'react'

class CheckBox extends React.Component {
    render(){
        return(
            <div>
                <div className={this.props.className}>
                    <input type="checkbox" id={this.props.value} name={this.props.name} value={this.props.value} />
                    <label htmlFor={this.props.value}>{this.props.text}</label>
                </div>
                <style jsx>{`
                    .category-order-item {
                        color: red;
                    }

                    .category-list-item {
                        color: blue;
                    }

                `}</style>
            </div>
        );
    }
}

export default CheckBox