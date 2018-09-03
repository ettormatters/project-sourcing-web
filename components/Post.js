import React from 'react'
import Link from 'next/link'
import { connect } from 'react-redux';
import { clapOnChange } from '../actions/action';
import css from '../style/hwistyle.css'
import getConfig from 'next/config'
const {publicRuntimeConfig} = getConfig()

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
            <div className={css.Post}>
                
                <div className={css.Popup}>
                    <span className={css.TalkBalloon}><img src="#" alt="balloon"/></span>
                    <span className={css.HeadTag}>head hashTag</span>
                </div>
                
                <div className={css.ItemBox}>
                    <div className={css.Item}>
                        <div className={css.Icon}>
                          <img src="#" alt="Icon" width="65" height="75"/>
                        </div>
                        <div className={css.Text}>
                            <div className={css.Category}>{this.props.category}</div>
                            <div className={css.Title}>{this.props.title}</div>
                            <div className={css.Content}>
                                <div className={css.OneLine}>
                                    <span>"<span>{this.props.oneLine}</span>"</span>
                                </div>
                                <div className={css.Desc}>
                                    {this.props.desc}
                                </div>
                                    <div className={css.HashTagBox}><a className={css.HashTag}  href="#">#<span>{this.props.hashTag}</span></a></div>
                                </div>
                            <div className={css.Info}><span>{this.props.partyHead}</span> ∙ <span>{this.props.author}</span> | <span>{this.props.date}</span> ~ <span>Due Day</span></div>

                        </div>
                    </div>
                </div>

                <div className={css.PostFooter}>
                    <div className={css.ToesTemp}>
                        <div className={css.WantedBox}>
                            <img className={css.WantedItem} src={`${publicRuntimeConfig.staticFolder}/image/wanted.png`}/>
                        </div>
                        <span>{this.props.memberNumber}</span>
                        <div className={css.ClapBox}>
                        <button id={this.props.title} className={css.ClapOff} onClick={(event)=>{this.props.clapChange(event); this._happen();}}>
                            <img className={css.OffItem} src={`${publicRuntimeConfig.staticFolder}/image/clap_off.png`}/>
                        </button>
                        </div>
                        <span id={this.props.clapCntId}>{this.props.clap}</span>
                    </div>
                    <Link href={{ pathname: '/post', query: { title: this.props.title } }}>
                        <a>View more...</a>
                    </Link>
                </div>
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