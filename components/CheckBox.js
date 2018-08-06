import React from 'react'

class CheckBox extends React.Component {
    render(){
        return(
            <div className="category-list-item">
                <a><input type="checkbox" id={this.props.id} onChange={this.props.boxChange}/>
                <label htmlFor={this.props.id}>{this.props.text}</label></a>
                <style jsx>{`
                    .category-list-item {
                        border-radius: 5px;
                        color: #A97000;
                    }
                    
                    .category-list-item:hover {
                        color: black;
                        background-color: #FFF5D2;
                    }
                `}</style>
            </div>
        );
    }
}

export default CheckBox