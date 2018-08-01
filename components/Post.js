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
                       border: 1px solid black;
                       margin: 10px;
                       padding: 5px;
                       min-width: 350px; /*screen size*/
                       max-width: 749px; /*안늘어남*/
                   }
                   /*viewport, Responsive*/
                `}</style>
            </div>
        );
    }
}

export default Post