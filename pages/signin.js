import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout'
import css from '../style/hwistyle.css'

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ID: "",
            PW: ""
        }
    }

    render(){
        return(
            <Layout>
                <form className={css.SignIn}>
                    <div className={css.SignInInput}>
                        <input className={css.SIInputItem} type="text" placeholder="ID" />
                    </div>
                    <div className={css.SignInInput}>
                        <input className={css.SIInputItem} type="password" placeholder="PW" />
                    </div>
                    <div className={css.AfterInput}>
                        <div className={css.SetSignIn}>
                            <input type="checkbox" value="true" id="SetCheck" className={css.SetCheck} />
                            <label for="SetCheck" className={css.SetLabel}><span>Set State Sign In.</span></label>
                        </div>
                        <Link href="/signup"><a className={css.SignInUp}>Sign up</a></Link>
                    </div>
                    <button type="submit" className={css.SignInButton}>Sign In</button>
                    <div className={css.SignInApi}>
                        <p>Sign in APIs.</p>
                    </div>
                </form>
            </Layout>
        );
    }
}

export default SignIn