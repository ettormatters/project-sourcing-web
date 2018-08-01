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
                        <OrderButton id="recent" text="Recently"/>
                        <OrderButton id="high-clapped" text="High Clapped"/>
                        <OrderButton id="d-day" text="D-Day"/>
                        <OrderButton id="verified" text="Verified"/>
                    </fieldset>
                </div>
                <div>
                    <fieldset className="category-list">
                        <legend>List</legend>
                        <CheckBox id={this.props.list[0].id} text="Something New" onChange={this.props.onChange}/>
                        <CheckBox id={this.props.list[1].id} text="Side Project" onChange={this.props.onChange}/>
                        <CheckBox id={this.props.list[2].id} text="Club" onChange={this.props.onChange}/>
                        <CheckBox id={this.props.list[3].id} text="Competition" onChange={this.props.onChange}/>
                        <CheckBox id={this.props.list[4].id} text="Study" onChange={this.props.onChange}/>
                        <CheckBox id={this.props.list[5].id} text="Business" onChange={this.props.onChange}/>
                        <CheckBox id={this.props.list[6].id} text="Body Training" onChange={this.props.onChange}/>
                        <CheckBox id={this.props.list[7].id} text="Music" onChange={this.props.onChange}/>
                        <CheckBox id={this.props.list[8].id} text="Video" onChange={this.props.onChange}/>
                        <CheckBox id={this.props.list[9].id} text="Art" onChange={this.props.onChange}/>
                        <CheckBox id={this.props.list[10].id} text="Travel" onChange={this.props.onChange}/>
                        <CheckBox id={this.props.list[11].id} text="Game" onChange={this.props.onChange}/>
                        <CheckBox id={this.props.list[12].id} text="Activity" onChange={this.props.onChange}/>
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