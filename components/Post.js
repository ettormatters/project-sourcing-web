import React from 'react'

class Post extends React.Component {
    render(){
        return(
            <div className="post">
                    <div className="post-title">
                        <span>{this.props.title}</span>
                    </div>
                    <div className="post-sum">
                        <span>Party Head <span>{this.props.partyHead}</span></span>
                        <span>Author <span>{this.props.author}</span></span>
                        <span>{this.props.date}</span>
                    </div>
                    <div className="post-content">
                        <span>Category <span>{this.props.category}</span></span>
                        <span>#<span>{this.props.hashTag}</span></span>
                        <span>모집멤버수 <span>{this.props.memberNumber}</span></span>
                        <div className="post-content-oneLine">
                            {this.props.oneLine}
                        </div>
                        <div className="post-content-desc">
                            {this.props.desc}
                        </div>
                    </div>
                    <div className="post-footer">
                        <span>{this.props.clap}</span>
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

                    .post-sum span {
                        padding-right: 10px;
                    }

                    .post-content span {
                        padding-right: 15px;
                    }
                   /*viewport, Responsive*/
                `}</style>
            </div>
        );
    }
}

export default Post