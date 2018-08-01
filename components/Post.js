import React from 'react'

class Post extends React.Component {
    render(){
        return(
            <div>
                <div className="post">
                    Post
                </div>
                
                <style jsx>{`
                   .post {
                       border: 1px solid black;
                       margin: 5px;
                       padding: 5px;
                       width: 350px;
                   }
                   /*viewport, Responsive*/
                `}</style>
            </div>
        );
    }
}

export default Post