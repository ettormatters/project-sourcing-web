import React from 'react'
import Layout from '../components/Layout'

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            ID: "",
            PW: ""
        }
    }

    render(){
        return(
            <Layout>
                <div>
                    Name <input type="text" placeholder="NAME" /> <br/>
                    EMAIL <input type="email" placeholder="EMAIL" /> <br/>
                    ID <input type="text" placeholder="ID" />  <br/>
                    PW <input type="password" placeholder="PW" /> <br/>
                </div>
                <style jsx>{`
                
                `}</style>
            </Layout>
        );
    }
}

export default SignUp
