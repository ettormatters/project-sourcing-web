import React from 'react'
import CheckBox from '../components/CheckBox'

class Category extends React.Component {
    render(){
        return (
            <div className="category">
                <div>
                    Order
                </div>
                <div className="category-order">
                    <CheckBox className="category-order-item" name="category-order" value="recent" text="Recently"/>
                    <CheckBox className="category-order-item" name="category-order" value="high-clapped" text="High-Clapped"/>
                    <CheckBox className="category-order-item" name="category-order" value="d-day" text="D-Day"/>
                    <CheckBox className="category-order-item" name="category-order" value="verified" text="Verifiedy"/>
                </div>
                <div>
                    List
                </div>
                <div className="category-list">
                    <CheckBox className="category-list-item" name="category-list" value="somethingNew" text="Something New"/>
                    <CheckBox className="category-list-item" name="category-list" value="side-project" text="Side Project"/>
                    <CheckBox className="category-list-item" name="category-list" value="club" text="Club"/>
                    <CheckBox className="category-list-item" name="category-list" value="competition" text="Competition"/>
                    <CheckBox className="category-list-item" name="category-list" value="study" text="Study"/>
                    <CheckBox className="category-list-item" name="category-list" value="business" text="Business"/>
                    <CheckBox className="category-list-item" name="category-list" value="body-training" text="Body Training"/>
                    <CheckBox className="category-list-item" name="category-list" value="music" text="Music"/>
                    <CheckBox className="category-list-item" name="category-list" value="video" text="Video"/>
                    <CheckBox className="category-list-item" name="category-list" value="art" text="Art"/>
                    <CheckBox className="category-list-item" name="category-list" value="travel" text="Travel"/>
                    <CheckBox className="category-list-item" name="category-list" value="game" text="Game"/>
                    <CheckBox className="category-list-item" name="category-list" value="activity" text="Activity"/>
                </div>
                
                <style jsx>{`
                    .category {
                        margin: 10px;
                    }

                    .category-order {
                        display: flex;
                        flex-direction: row;
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