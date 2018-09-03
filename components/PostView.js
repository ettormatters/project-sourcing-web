import React from 'react'
import { connect } from 'react-redux';
import Post from './Post'
import css from '../style/hwistyle.css'

class PostView extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className={css.PostView}>
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