import React from 'react'
import Link from 'next/link'
import { connect } from 'react-redux';
import { clapOnChange } from '../actions/action';

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

                <div className="post-itembox">
                    <div className="post-item">
                        <div className="post-icon">
                            <img src="#" alt="Icon" width="65" height="75"/>
                        </div>
                        <div className="post-text">
                            <div className="post-header">
                                <div className="post-header-title">
                                    {this.props.title}
                                </div>
                                <div className="post-header-subtitle">
                                    <span>{this.props.partyHead}</span> ∙ <span>{this.props.author}</span> | <span>{this.props.date}</span> ~ <span>Due Day</span>
                                </div>
                            </div>
                            <div className="post-content">
                                <div className="post-content-oneLine">
                                    <span>"<span>{this.props.oneLine}</span>"</span>
                                </div>
                                <div className="post-content-desc">
                                    {this.props.desc}
                                </div>
                                <div className="post-content-hashTag">
                                    <a href="#">#<span>{this.props.hashTag}</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="post-footer">
                    <pre><span><span className="optional-del">Category | </span><span>{this.props.category}</span><span className="optional-del"> </span><span className="optioanl-add"> ∙ </span></span>
                    <span><span className="optional-del">Wanted | </span><span>{this.props.memberNumber}</span><span className="optional-del"> </span><span className="optioanl-add"> ∙ </span></span>
                    <span>Clapped | <span id={this.props.clapCntId}>{this.props.clap}</span> <button id={this.props.title} onClick={(event)=>{this.props.clapChange(event); this._happen();}}>Clap</button></span></pre>  
                    <Link href={{ pathname: '/post', query: { title: this.props.title } }}>
                        <a>View more...</a>
                    </Link>
                </div>

                <style jsx>{`
                   .post {
                        background-color: white;
                        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.36), 0 0 0 1px rgba(0, 0, 0, 0.28);
                        border-radius: 3px;

                        transition-property: transform, box-shadow, margin, opacity, width;
                        transition-duration: 200ms;
                        cusor: pointer;

                        margin: 10px;
                        padding-right: 20px;
                        padding-bottom: 0px;
                        padding-left: 20px;
                        height: 300px;
                        min-width: 700px; /*screen size*/
                        
                        position: relative;
                    }

                    .post .post-popup {
                        display: none;
                    }
                    
                    .post .post-text .post-content .post-content-desc {
                        display: none;
                    }

                    .post:hover {
                        box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.36), 0 0 0 2px rgba(0, 0, 0, 0.28);
                        height: 300px;
                    }

                    .post:hover .post-popup {
                        visibility: visible;
                    }

                    .post:hover .post-text .post-content .post-content-desc {
                        display: block;
                    }

                    .post-itembox {
                        height: 218px;
                        margin: 20px 0;
                        position: relative;
                    }

                    .post-item {
                        margin: 0;
                        position: absolute;
                        top: 50%;
                        transform: translate(0, -50%);
                        display: flex;
                    }

                    .post-text {
                        margin-left: 10px;
                        max-width: 640px;
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
                        margin: 0;
                        position: absolute;
                        bottom: 10px;
                        right: 20px;
                    }

                    .optional-add {
                        display: none;
                    }

                    @media screen and (max-width: 992px) {
                        .post {
                            min-width: 600px;
                        }
                    }

                    @media screen and (max-width: 800px) {
                        .post {
                            min-width: 450px;
                        }
                    }

                    @media screen and (max-width: 600px) {
                        .post {
                            min-width: 300px;
                        }
                        .optional-del {
                            display: none;
                        }
                        .optional-add {
                            display: inline;
                        }
                    }
                `}</style>
            </div>
        );
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        clapChange: (e) => dispatch(clapOnChange(e))
    }
}

Post = connect(undefined, mapDispatchToProps)(Post);

export default Post