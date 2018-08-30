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
                
                <div className="popup">
                    <span className="talk-balloon"><img src="#" alt="balloon"/></span>
                    <span className="headTag">head hashTag</span>
                </div>
                
                <div className="itembox">
                    <div className="item">
                        <div className="icon">
                          <img src="#" alt="Icon" width="65" height="75"/>
                        </div>
                        <div className="text">
                            <div className="category">{this.props.category}</div>
                            <div className="title">{this.props.title}</div>
                            <div className="content">
                                <div className="oneLine">
                                    <span>"<span>{this.props.oneLine}</span>"</span>
                                </div>
                                <div className="desc">
                                    {this.props.desc}
                                </div>
                                    <div className="hashTag"><a href="#">#<span>{this.props.hashTag}</span></a></div>
                                </div>
                            <div className="info"><span>{this.props.partyHead}</span> ∙ <span>{this.props.author}</span> | <span>{this.props.date}</span> ~ <span>Due Day</span></div>

                        </div>
                    </div>
                </div>

                <div className="footer">
                    <pre><span><span className="optional-del">Wanted | </span><span>{this.props.memberNumber}</span><span className="optional-del"> </span><span className="optioanl-add"> ∙ </span></span>
                    <span>Clapped | <span id={this.props.clapCntId}>{this.props.clap}</span> <button id={this.props.title} onClick={(event)=>{this.props.clapChange(event); this._happen();}}>Clap</button></span></pre>  
                    <Link href={{ pathname: '/post', query: { title: this.props.title } }}>
                        <a>View more...</a>
                    </Link>
                </div>

                <style jsx>{`
                   .post {
                        background-color: white;
                        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.36), 0 0 0 1px rgba(0, 0, 0, 0.28);
                        border-radius: 5px;

                        transition-property: transform, box-shadow, margin, opacity, width;
                        transition-duration: 200ms;
                        cusor: pointer;

                        margin: 10px;
                        padding-right: 20px;
                        padding-bottom: 0px;
                        padding-left: 20px;
                        height: 250px;
                        min-width: 700px; /*screen size*/
                        
                        position: relative;
                    }

                    .post .popup {
                        display: none;
                    }
                    
                    .post .text .content .desc {
                        display: none;
                    }

                    .post:hover {
                        box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.36), 0 0 0 2px rgba(0, 0, 0, 0.28);
                        height: 300px;
                    }

                    .post:hover .popup {
                        visibility: visible;
                    }

                    .post:hover .text .content .desc {
                        display: block;
                    }

                    .itembox {
                        height: 218px;
                        margin: 20px 0;
                        position: relative;
                    }

                    .item {
                        margin: 0;
                        position: absolute;
                        top: 50%;
                        transform: translate(0, -70%);
                        display: flex;
                    }

                    .text {
                        margin-left: 10px;
                        max-width: 640px;
                    }

                    .icon {
                        border: 0.5px solid black;
                        border-radius: 5px;
                    }

                    .category {
                        font-size: 13px;
                        text-transform: uppercase;
                        color: rgba(0,0,0,.54);
                    }
                    .title {
                        font-size: 24px;
                        font-weight: bold;
                    }

                    .subtitle {
                        font-size: 13px;
                        color: rgba(0,0,0,.54);
                    }

                    .content {
                        margin-top: 10px;
                        margin-bottom: 10px;
                    }

                    .oneLine {
                        font-size: 16px;
                    }

                    .desc {
                        font-size: 13px;
                    }

                    .hashTag a:link, .hashTag a:visited {
                        font-size: 13px;
                        color: #707070;
                        text-decoration: none;
                    }

                    .hashTag a:hover, .hashTag a:active {
                        font-size: 15px;
                        color: black;
                        text-decoration: none;
                    }

                    .footer {
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