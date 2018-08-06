import React from 'react'

class Post extends React.Component {
    constructor(props) {
        super(props);

        this._happen = this._happen.bind(this);
      }
    
    _happen () {
        let cnt = document.getElementById(this.props.clapCntId);
        cnt.innerHTML = parseInt(cnt.innerHTML, 10) + 1;
    }

    render(){
        return(
            <div className="post">
                <div className="post-popup">
                    <span className="talk-balloon"><img src="#" alt="balloon"/></span>
                    <span className="headTag">head hashTag</span>
                </div>
                <div className="post-item">
                    <div className="post-icon"><img src="#" alt="Icon" width="65" height="75"/></div>
                    <div className="post-text">
                        <div className="post-header">
                            <div className="post-header-title">{this.props.title}</div>
                            <div className="post-header-subtitle"><span>{this.props.partyHead}</span> ∙ <span>{this.props.author}</span> | <span>{this.props.date}</span> ~ <span>Due Day</span></div>
                        </div>
                        <div className="post-content">
                            <div className="post-content-oneLine">
                                <span>"<span>{this.props.oneLine}</span>"</span>
                            </div>
                            <div className="post-content-desc">
                                {this.props.desc}
                            </div>
                            <div className="post-content-hashTag"><a href="#">#<span>{this.props.hashTag}</span></a></div>
                        </div>
                    </div>
                </div>
                <div className="post-footer">
                    <pre><span>Category | <span>{this.props.category}</span>   </span>
                    <span>Wanted | <span>{this.props.memberNumber}</span>   </span>
                    <span>Clapped | <span id={this.props.clapCntId}>{this.props.clap}</span> <button id={this.props.title} onClick={(event)=>{this.props.clapChange(event); this._happen();}}>Clap</button></span></pre>  
                </div>

                <style jsx>{`
                   .post {
                        background-color: white;
                        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.36), 0 0 0 1px rgba(0, 0, 0, 0.28);
                        cusor: pointer;
                        transition-duration: 200ms;
                        transition-property: transform, box-shadow, margin, opacity, width;
                        border-radius: 3px;
                        box-sizing: border-box;
                        margin: 10px;
                        padding-right: 20px;
                        padding-left: 20px; 
                        padding-bottom: 0px;
                        height: 300px;
                        min-width: 350px; /*screen size*/
                    }

                    .post .post-popup {
                        visibility: hidden;
                    }
                    
                    .post .post-text .post-content .post-content-desc {
                        display: none;
                    }

                    .post:hover {
                        box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.36), 0 0 0 2px rgba(0, 0, 0, 0.28);
                    }

                    .post:hover .post-popup {
                        visibility: visible;
                    }

                    .post:hover .post-text .post-content .post-content-desc {
                        display: block;
                    }

                    .post-item {
                        display: flex;
                    }

                    .post-text {
                        margin-left: 10px;
                    }

                    .post-icon {
                        border: 0.5px solid black;
                        border-radius: 5px;
                    }

                    .post-header-title {
                        font-size: 30px;
                        font-weight: bold;
                    }

                    .post-header-subtitle {
                        font-size: 15px;
                        color: #C4C4C4;
                    }

                    .post-content {
                        margin-top: 10px;
                        margin-bottom: 20px;
                    }
                    .post-content-oneLine {
                        font-size: 20px;
                    }

                    .post-content-desc {
                        font-size: 15px;
                    }

                    .post-content-hashTag a:link, .post-content-hashTag a:visited {
                        font-size: 15px;
                        color: #707070;
                        text-decoration: none;
                    }

                    .post-content-hashTag a:hover, .post-content-hashTag a:active {
                        font-size: 15px;
                        color: black;
                        text-decoration: none;
                    }

                    .post-footer {
                        font-size: 12px;
                        color: #C4C4C4;
                        text-align: right;
                    }
                `}</style>
            </div>
        );
    }
}

export default Post