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
                <form className={css.Sign}>
                    <div className={css.SignInInput}>
                        <input className={css.SIInputItem} type="text" placeholder="ID" />
                    </div>
                    <div className={css.SignInInput}>
                        <input className={css.SIInputItem} type="password" placeholder="PW" />
                    </div>
                    <div className={css.AfterInput}>
                        <div className={css.SetSignIn}>
                            <input type="checkbox" value="true" id="SetCheck" className={css.SetCheck} />
                            <label htmlFor="SetCheck" className={css.SetLabel}><span>Set State Sign In.</span></label>
                        </div>
                        <Link href="/signup"><a className={css.InUpLink}>Sign up</a></Link>
                    </div>
                    <button type="submit" className={css.SignButton}>Sign In</button>
                    <div className={css.SignInApi}>
                        <p>Sign in APIs.</p>
                    </div>
                </form>
            </Layout>
        );
    }
}

export default SignIn

//graphql query 나 mutation 둘다 상황에 불필요하므로, 그냥 mongoose schema found 로 return 처리 하는게 좋겠군.
//crypto , salt , 단방향 암호화 이후 검사
//email , pw -> mongoose -> return