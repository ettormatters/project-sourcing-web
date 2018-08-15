import React from 'react'
import Layout from '../components/Layout'

class Login extends React.Component {
    render(){
        return(
            <Layout>
                <div>
                    Name <input type="text" placeholder="NAME" /> <br/>
                    EMAIL <input type="email" placeholder="EMAIL" /> <br/>
                    ID <input type="text" placeholder="ID" />  <br/>
                    PW <input type="password" placeholder="PW" /> <br/>
                </div>
            </Layout>
        );
    }
}

export default Login