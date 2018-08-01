import React from 'react'

class CheckBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
      }

    render(){
        return(
                <div className="category-list-item">
                    <input type="checkbox" id={this.props.id} onChange={this.props.onChange}/>
                    <label htmlFor={this.props.id}>{this.props.text}</label>
                    <style jsx>{`
                        .category-list-item {
                            color: blue;
                        }
                    `}</style>
                </div>
        );
    }
}



export default CheckBox

//name={this.props.name} value={this.props.value}