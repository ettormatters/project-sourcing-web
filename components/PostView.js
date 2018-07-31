import React from 'react'
import Post from './Post'

class PostView extends React.Component {
    render(){
        return(
            <div className="post-view">
                <div className="post-desc">
                    description here.
                </div>
                <div className="post-post">
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                </div>
                <style jsx>{`
                    .post-view {
                        border: 1px solid grey;
                        margin: 10px;
                    }
                `}</style>
            </div>
        );
    }
}

export default PostView