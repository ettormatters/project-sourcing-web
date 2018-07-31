import React from 'react'
import CheckBox from '../components/CheckBox'

class Category extends React.Component {
    render(){
        return (
            <div className="container-category">
                <div>
                    <fieldset className="category-order">
                        <legend>Order</legend>
                        <CheckBox type="radio" className="category-order-item" name="category-order" value="recent" text="Recently"/>
                        <CheckBox type="radio" className="category-order-item" name="category-order" value="high-clapped" text="High Clapped"/>
                        <CheckBox type="radio" className="category-order-item" name="category-order" value="d-day" text="D-Day"/>
                        <CheckBox type="radio" className="category-order-item" name="category-order" value="verified" text="Verified"/>
                    </fieldset>
                </div>
                <div>
                    <fieldset className="category-list">
                        <legend>List</legend>
                        <CheckBox type="checkbox" className="category-list-item" name="category-list" value="somethingNew" text="Something New"/>
                        <CheckBox type="checkbox" className="category-list-item" name="category-list" value="side-project" text="Side Project"/>
                        <CheckBox type="checkbox" className="category-list-item" name="category-list" value="club" text="Club"/>
                        <CheckBox type="checkbox" className="category-list-item" name="category-list" value="competition" text="Competition"/>
                        <CheckBox type="checkbox" className="category-list-item" name="category-list" value="study" text="Study"/>
                        <CheckBox type="checkbox" className="category-list-item" name="category-list" value="business" text="Business"/>
                        <CheckBox type="checkbox" className="category-list-item" name="category-list" value="body-training" text="Body Training"/>
                        <CheckBox type="checkbox" className="category-list-item" name="category-list" value="music" text="Music"/>
                        <CheckBox type="checkbox" className="category-list-item" name="category-list" value="video" text="Video"/>
                        <CheckBox type="checkbox" className="category-list-item" name="category-list" value="art" text="Art"/>
                        <CheckBox type="checkbox" className="category-list-item" name="category-list" value="travel" text="Travel"/>
                        <CheckBox type="checkbox" className="category-list-item" name="category-list" value="game" text="Game"/>
                        <CheckBox type="checkbox" className="category-list-item" name="category-list" value="activity" text="Activity"/>
                    </fieldset>
                </div>
                <style jsx>{`
                    .container-category {
                        margin: 10px;
                        padding: 10px;
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
                `}</style>
            </div>
        );
    }
}

export default Category