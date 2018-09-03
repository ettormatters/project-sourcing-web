import React from 'react'
import { connect } from 'react-redux';
import { checkBoxOnChange } from '../actions/action';
import css from '../style/hwistyle.css'

class CheckBox extends React.Component {
    render(){
        return(
            <div className={css.ListItem}>
                <a><input type="checkbox" id={this.props.id} onChange={this.props.boxChange} />
                <label htmlFor={this.props.id}>{this.props.text}</label></a>
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