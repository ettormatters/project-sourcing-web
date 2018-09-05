import React from 'react'
import axios from 'axios'
import Link from 'next/link'

import Layout from '../components/Layout'

import css from '../style/hwistyle.css'

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            nickName: "",
            email: "",
            pw: "",
            age: "20"
        }

        this._handleNickChange = this._handleNickChange.bind(this);
        this._handleEmailChange = this._handleEmailChange.bind(this);
        this._handlePassChange = this._handlePassChange.bind(this);
        this._handleAgeChange = this._handleAgeChange.bind(this);
        this._nickOverlap = this._nickOverlap.bind(this);
        this._emailOverlap = this._emailOverlap.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
    }

    _handleNickChange(event) {
        let nickName = event.target.value;

        this.setState({
          nickName : nickName
        });
    }

    _handleEmailChange(event) {
        let email = event.target.value
        
        this.setState({
            email: email
        })
    }

    _handlePassChange(event) {
        let pw = event.target.value
        
        this.setState({
            pw : pw
        })
    }

    _handleAgeChange(event) {
        let age = event.target.value

        this.setState({
            age : age
        })
    }

    async _handleSubmit(event) {
        if(this.state.nickName == "") {
            alert("nickName 입력하세요");
        } else if(this.state.email == "") {
            alert("email 입력하세요");
        } else if(this.state.pw == "") {
            alert("pw 입력하세요");
        } else {
            if(await this._nickOverlap(this.state.nickName)){
                alert("nickName이 중복되었습니다.");
            } else if(await this._emailOverlap(this.state.email)){
                alert("email이 중복되었습니다.");
            } else {
                //
            }
        }

        //age number 로 parse 해야함

        //axios -> graphQL mutation (pw 는 hash-salt 변환)

        //redirect? 뒤로가기 못하게.
        //input xsscripting 방지.
    }

    async _nickOverlap(nick) {
        let variables = {
            nick: nick,
        }

        let query = `
            query overNick ($nick: String!){
                nickOverlap(input:
                    {nickName: $nick}
                ){
                    nickName
                }
            }
        `

        let result = await axios({
            url: 'http://localhost:4000/graphql',
            method: 'post',
            //headers:  {'Content-Type': 'application/json'}
            data: { query, variables }
        })

        if(result.data.data.nickOverlap == null) {
            return false 
        } else {
            return true 
        }
    }

    async _emailOverlap(email) {
        let variables = {
            email: email,
        }

        let query = `
            query overEmail ($email: String!){
                emailOverlap(input:
                    {email: $email}
                ){
                    email
                }
            }
        `

        let result = await axios({
            url: 'http://localhost:4000/graphql',
            method: 'post',
            //headers:  {'Content-Type': 'application/json'}
            data: { query, variables }
        })

        if(result.data.data.emailOverlap == null){
            return false 
        } else {
            return true 
        }
    }

    render(){
        return(
            <Layout>
                <div>
                    <form className={css.Sign} onSubmit={this._handleSubmit}>
                        <label for="Nickname" className={css.SUInputLabel}><span>Nickname</span></label>
                        <div className={css.SignUpInput}>
                            <input className={css.SUInputItem} id="Nickname" name="nickName" type="text" onChange={this._handleNickChange} />
                        </div>
                        <label for="Email" className={css.SUInputLabel}><span>Your Email</span></label>
                        <div className={css.SignUpInput}>
                            <input className={css.SUInputItem} id="Email" name="email" type="email" onChange={this._handleEmailChange} />
                        </div>
                        <label for="Password" className={css.SUInputLabel}><span>Password</span></label>
                        <div className={css.SignUpInput}>
                            <input className={css.SUInputItem} id="Password" name="password" type="password" placeholder="8~16 letters" onChange={this._handlePassChange} />
                        </div>
                        <label for="PWcheck" className={css.SUInputLabel}><span>Check Password</span></label>
                        <div className={css.SignUpInput}>
                            <input className={css.SUInputItem} id="PWcheck" name="pwcheck" type="password" placeholder="Input Password one more time." />
                        </div>
                        <label for="Age" className={css.SUInputLabel}><span>Select Age</span></label>
                        <div>
                            <select className={css.AgeSelect} id="Age" name="age" onChange={this._handleAgeChange} defaultValue="20">
                                <option value="10">10대</option>
                                <option value="20">20대</option>
                                <option value="30">30대</option>
                                <option value="40">40대</option>
                                <option value="50">50대</option>
                                <option value="60">60대</option>
                                <option value="70">70대</option>
                                <option value="80">80대</option>
                            </select>
                        </div>
                        <input type="button" className={css.SignButton} value="Create New Account" onClick={this._handleSubmit} />
                        <div className={css.InUpLink}>
                            <p>If you already have account, <Link href="/signin"><a>Sign in</a></Link>.</p>
                        </div>
                    </form>
                </div>
            </Layout>
        );
    }
}

export default SignUp

//event.preventDefault();
