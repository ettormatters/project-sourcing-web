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
                        margin-top: 10px;
                        margin-right: 10%;
                        margin-bottom: 10px;
                        border: 1px solid black;
                        display: flex; /*최대 2개*/
                        align-items: center;
                        flex-wrap: wrap;
                    }

                    @media screen and (max-width: 992px) {
                        .post-view {
                            margin-top: 40px;
                            margin-right: 40px;
                            margin-bottom: 10px;
                        }
                    }

                    @media screen and (max-width: 600px) {
                        .post-view {
                            margin-top: 40px;
                            margin-right: 10px;
                            margin-bottom: 10px;
                            min-width: 390px;
                        }
                    }
                `}</style>
            </div>
        );
    }
}

export default PostView

/*

                */