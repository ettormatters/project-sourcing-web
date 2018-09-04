import React from 'react'
import Layout from '../components/Layout'

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
                <div>
                    ID <input type="text" placeholder="ID" />  <br/>
                    PW <input type="password" placeholder="PW" /> <br/>
                </div>
                <style jsx>{`
                
                `}</style>
            </Layout>
        );
    }
}

export default SignIn