import React from 'react'
import Post from './Post'

class PostView extends React.Component {
    render(){
        return(
            <div className="post-view">
                {this.props.posts.map((post, i) => {
                    return (
                        <Post key={i} data={JSON.stringify(post,null,2)}/>
                    )
                })}
                <style jsx>{`
                    .post-view {
                        border: 1px solid black;
                        margin: 10px;
                        padding: 10px;
                    }
                `}</style>
            </div>
        );
    }
}

export default PostView