import React from 'react'
import { connect } from 'react-redux';
import { checkBoxOnChange } from '../actions/action';

class CheckBox extends React.Component {
    render(){
        return(
            <div className="category-list-item">
                <a><input type="checkbox" id={this.props.id} onChange={this.props.boxChange} />
                <label htmlFor={this.props.id}>{this.props.text}</label></a>
                <style jsx>{`
                    .category-list-item {
                        border-radius: 5px;
                        color: #999999;
                    }
                    
                    .category-list-item:hover {
                        color: #595959;
                        background-color: #E6E6E6;
                    }
                `}</style>
            </div>
        );
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        boxChange: (e) => dispatch(checkBoxOnChange(e))
    }
}

CheckBox = connect(undefined, mapDispatchToProps)(CheckBox);

export default CheckBox