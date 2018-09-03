import React from 'react'
import { connect } from 'react-redux';
import CheckBox from '../components/CheckBox'
import css from '../style/hwistyle.css'

class Category extends React.Component {
    render(){
        return (
            <div className={css.CategoryBox}>
                <div>
                    <div className={css.CategoryOrder}>
                        <select className={css.OrderItem} onChange={this.props.selChange}>
                            <option value={this.props.order[0].id}>{this.props.order[0].text}</option>
                            <option value={this.props.order[1].id}>{this.props.order[1].text}</option>
                            <option value={this.props.order[2].id}>{this.props.order[2].text}</option>
                            <option value={this.props.order[3].id}>{this.props.order[3].text}</option>
                        </select>
                    </div>
                </div>
                <div>
                    <div className={css.CategoryList}>
                        {this.props.list.map((listItem, i) => {
                            return (
                                <CheckBox key={i} id={listItem.id} text={listItem.text} />
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        order: state.homebase.order,
        list: state.homebase.list
    };
}

Category = connect(mapStateToProps)(Category);

export default Category