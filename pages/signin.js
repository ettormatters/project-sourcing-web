import React from 'react';
import Link from 'next/link';
import crypto from 'crypto';
const randomBytes = require('randombytes');
import axios from 'axios'
import Layout from '../components/Layout'
import css from '../style/hwistyle.css'

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            pw: ""
        }

        this._handleEMAILInput = this._handleEMAILInput.bind(this);
        this._handlePWInput = this._handlePWInput.bind(this);
        this._handleSignInSubmit = this._handleSignInSubmit.bind(this);
    }

    _handleEMAILInput(event) {
        let email = event.target.value;

        this.setState({
          email : email
        });
    }

    _handlePWInput(event) {
        let pw = event.target.value;

        this.setState({
          pw : pw
        });
    }

    async _handleSignInSubmit(event) {
        let email = this.state.email;
        let pw = this.state.pw;

        let hashed = crypto.createHash('sha512').update(pw).digest('base64');

        let variables = {
            email: email,
            pw: hashed
        }

        let query = `
            query SignIn ($email: String!, $pw: String!){
                signIn(input:{
                    email: $email
                    pw: $pw
                }){
                    status
                    token
                }
            }
        `

        let result = await axios({
            url: 'http://localhost:4000/graphql',
            method: 'post',
            //headers:  {'Content-Type': 'application/json'}
            data: { query, variables }
        })
        
        result.token == null
        if(result.status == 404) {
            alert("이메일 오류");
        } else if(result.status == 405){
            alert("패스워드 오류")
        } else if(result.status == 406){
            alert("토큰생성 오류");
        } else if(result.status == 202 && result.token != null) {
            location.replace("http://localhost:3000/success_secret");
            return true;
        }
    }

    render(){
        return(
            <Layout>
                <form className={css.Sign}>
                    <div className={css.SignInInput}>
                        <input className={css.SIInputItem} type="text" placeholder="EMAIL" onChange={this._handleEMAILInput}/>
                    </div>
                    <div className={css.SignInInput}>
                        <input className={css.SIInputItem} type="password" placeholder="PW" onChange={this._handlePWInput} />
                    </div>
                    <div className={css.AfterInput}>
                        <div className={css.SetSignIn}>
                            <input type="checkbox" value="true" id="SetCheck" className={css.SetCheck} />
                            <label htmlFor="SetCheck" className={css.SetLabel}><span>Set State Sign In.</span></label>
                        </div>
                        <Link href="/signup"><a className={css.InUpLink}>Sign up</a></Link>
                    </div>
                    <input type="button" className={css.SignButton} value="Sign In" onClick={this._handleSignInSubmit} />
                    <div className={css.SignInApi}>
                        <p>Sign in APIs.</p>
                    </div>
                </form>
            </Layout>
        );
    }
}

export default SignIn

//graphql schema design
//crypto , salt , 단방향 암호화 이후 검사
//email , pw -> mongoose -> return