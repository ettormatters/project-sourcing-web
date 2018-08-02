import React from 'react'

class Post extends React.Component {
    render(){
        return(
            <div>
                <div className="post">
                    {this.props.data}
                </div>
                <style jsx>{`
                   .post {
                        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
                        cusor: pointer;
                        transition-duration: 200ms;
                        transition-property: transform, box-shadow, margin, opacity, width;
                        border-radius: 2px;
                        box-sizing: border-box;
                        margin: 10px;
                        padding: 5px;
                        min-width: 350px; /*screen size*/
                    }
                    .post:hover {
                        box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.16), 0 0 0 2px rgba(0, 0, 0, 0.08);
                    }
                   /*viewport, Responsive*/
                `}</style>
            </div>
        );
    }
}

export default Post