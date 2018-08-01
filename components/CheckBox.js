import React from 'react'

class CheckBox extends React.Component {
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