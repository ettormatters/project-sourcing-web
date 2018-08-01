import React from 'react'
import OrderButton from '../components/OrderButton'
import CheckBox from '../components/CheckBox'

class Category extends React.Component {
    render(){
        return (
            <div className="container-category">
                <div>
                    <fieldset className="category-order">
                        <legend>Order</legend>
                        {this.props.order.map((orderItem, i) => {
                            return (
                                <OrderButton key={i} id={orderItem.id} text={orderItem.text} onClick={this.props.onClick} />
                            )
                        })}
                    </fieldset>
                </div>
                <div>
                    <fieldset className="category-list">
                        <legend>List</legend>
                        {this.props.list.map((listItem, i) => {
                            return (
                                <CheckBox key={i} id={listItem.id} text={listItem.text} onChange={this.props.onChange} />
                            )
                        })}
                    </fieldset>
                </div>
                <style jsx>{`
                    .container-category {
                        margin: 10px 10px 10px 10%;
                        padding: 10px;
                        width: 200px;
                        border: 1px solid black;
                    }

                    .category-order {
                        display: flex;
                        flex-direction: row; /*적용안됨*/
                        padding: 10px;
                    }

                    .category-list {
                        padding: 10px;
                    }

                    @media screen and (max-width: 992px) {
                        .container-category {
                            margin: 40px 40px 10px 40px;
                        }
                    }

                    @media screen and (max-width: 600px) {
                        .container-category {
                            margin: 40px 10px 10px 10px;
                        }
                    }
                `}</style>
            </div>
        );
    }
}

export default Category