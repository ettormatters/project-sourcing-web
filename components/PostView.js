import React from 'react'
import { connect } from 'react-redux';
import Post from './Post'

class PostView extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className="post-view">
                {this.props.posts.map((post, i) => {
                    return (
                        <Post 
                            key={i} 
                            title={post.title} 
                            partyHead={post.partyHead} 
                            author={post.author} 
                            date={post.date} 
                            category={post.data.category}
                            oneLine={post.data.oneLine}
                            desc={post.data.desc}
                            hashTag={post.data.hashTag}
                            memberNumber={post.data.memberNumber}
                            clap={post.clap}
                            clapCntId={post.title+i}
                        />
                    )
                })}
                <style jsx>{`
                    .post-view {
                        margin-top: 30px;
                        margin-bottom: 10px;
                        margin-left: 0px;
                        display: flex;
                        align-items: center;
                        flex-wrap: wrap;
                        max-width: 700px;
                    }

                    @media screen and (max-width: 992px) {
                        .post-view {
                            margin-top: 30px;
                            margin-bottom: 10px;
                        }
                    }

                    @media screen and (max-width: 600px) {
                        .post-view {
                            margin-top: 30px;
                            margin-bottom: 10px;
                            min-width: 390px;
                        }
                    }
                `}</style>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        posts: state.homebase.posts
    };
}

PostView = connect(mapStateToProps)(PostView);

export default PostView