import React from 'react'

class CheckBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {checked: false};
      }

    render(){
        return(
                <div className={this.props.className}>
                    <input type={this.props.type} id={this.props.value} name={this.props.name} value={this.props.value} />
                    <label htmlFor={this.props.value}>{this.props.text}</label>

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