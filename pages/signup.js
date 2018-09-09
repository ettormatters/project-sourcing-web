import React from 'react'
let crypto = require("crypto");
let randomBytes = require('randombytes');
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
            repw: "",
            age: "20"
        }

        this._handleNickChange = this._handleNickChange.bind(this);
        this._handleEmailChange = this._handleEmailChange.bind(this);
        this._handlePassChange = this._handlePassChange.bind(this);
        this._handleAgeChange = this._handleAgeChange.bind(this);
        this._handleRePassChange = this._handleRePassChange.bind(this);
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

    _handleRePassChange(event) {
        let rePw = event.target.value

        this.setState({
            repw : rePw
        })
    }

    async _handleSubmit(event) {

        if(this.state.nickName == "") {
            alert("nickName 입력하세요.");
        } else if(this.state.email == "") {
            alert("email 입력하세요.");
        } else if(this.state.pw == "") {
            alert("pw 입력하세요.");
        } else if(this.state.pw != this.state.repw){
            alert("pw가 동일하지 않습니다.")
        } else {
            if(await this._nickOverlap(this.state.nickName)){
                alert("nickName이 중복되었습니다.");
            } else if(await this._emailOverlap(this.state.email)){
                alert("email이 중복되었습니다.");
            } else {
                let nickName = this.state.nickName;
                let email = this.state.email;
                let ageInt = parseInt(this.state.age);
                
                crypto.randomBytes(64, (err, buf) => {
                    crypto.pbkdf2(`${this.state.pw}`, buf.toString('base64'), 100298, 64, 'sha512', async (err, key) => {
                        let pwHash = key.toString('base64');

                        let variables = {
                            nick: nickName,
                            email: email,
                            pw: pwHash,
                            age: ageInt
                        }

                        let query = `
                            mutation NewUser($nick: String!, $email: String!, $pw: String!, $age: Int!){
                                createUser(input:{
                                    nickName: $nick
                                    email: $email
                                    pw: $pw
                                    age: $age
                                }){
                                    id
                                    nickName
                                    email
                                    pw
                                    age
                                }
                            }
                        `

                        let result = await axios({
                            url: 'http://localhost:4000/graphql',
                            method: 'post',
                            //headers:  {'Content-Type': 'application/json'}
                            data: { query, variables }
                        })
                
                        if(result.data.data.createUser == null) {
                            alert("회원가입 오류");
                        } else {
                            location.replace("http://localhost:3000/success_secret");
                            return true;
                        }

                    });   
                })
            }
        }

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

        if(result.data.data.emailOverlap == null) {
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
                        <label htmlFor="Nickname" className={css.SUInputLabel}><span>Nickname</span></label>
                        <div className={css.SignUpInput}>
                            <input className={css.SUInputItem} id="Nickname" name="nickName" type="text" onChange={this._handleNickChange} />
                        </div>
                        <label htmlFor="Email" className={css.SUInputLabel}><span>Your Email</span></label>
                        <div className={css.SignUpInput}>
                            <input className={css.SUInputItem} id="Email" name="email" type="email" onChange={this._handleEmailChange} />
                        </div>
                        <label htmlFor="Password" className={css.SUInputLabel}><span>Password</span></label>
                        <div className={css.SignUpInput}>
                            <input className={css.SUInputItem} id="Password" name="password" type="password" placeholder="8~16 letters" onChange={this._handlePassChange} />
                        </div>
                        <label htmlFor="PWcheck" className={css.SUInputLabel}><span>Check Password</span></label>
                        <div className={css.SignUpInput}>
                            <input className={css.SUInputItem} id="PWcheck" name="pwcheck" type="password" placeholder="Input Password one more time." onChange={this._handleRePassChange} />
                        </div>
                        <label htmlFor="Age" className={css.SUInputLabel}><span>Select Age</span></label>
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
                            <p>If you already have an account, <Link href="/signin"><a>Sign in</a></Link>.</p>
                        </div>
                    </form>
                </div>
            </Layout>
        );
    }
}

export default SignUp

//event.preventDefault();
