import React from 'react'
import CheckBox from '../components/CheckBox'

class Category extends React.Component {
    render(){
        return (
            <div className="container-category">
                <div>
                    <fieldset className="category-order">
                        <legend>Order</legend>
                        <div className="category-order-item">
                            <select name="category-order-item" onChange={this.props.selChange}>
                                <option value={this.props.order[0].id}>{this.props.order[0].text}</option>
                                <option value={this.props.order[1].id}>{this.props.order[1].text}</option>
                                <option value={this.props.order[2].id}>{this.props.order[2].text}</option>
                                <option value={this.props.order[3].id}>{this.props.order[3].text}</option>
                            </select>
                        </div>
                    </fieldset>
                </div>
                <div>
                    <fieldset className="category-list">
                        <legend>List</legend>
                        {this.props.list.map((listItem, i) => {
                            return (
                                <CheckBox key={i} id={listItem.id} text={listItem.text} boxChange={this.props.boxChange} />
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
                        flex-wrap: wrap;
                        align-items: center;
                    }

                    .category-list {
                        padding: 10px;
                    }

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