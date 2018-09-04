import React from 'react'
import Layout from '../components/Layout'

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            nickName: null,
            email: null,
            pw: null,
            age: "20"
        }

        this._handleNickChange = this._handleNickChange.bind(this);
        this._handleEmailChange = this._handleEmailChange.bind(this);
        this._handlePassChange = this._handlePassChange.bind(this);
        this._handleAgeChange = this._handleAgeChange.bind(this);
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

    _handleSubmit(event) {
        console.log(this.state)
        //null 값체크
        //if nickname 중복검사  -> graphQL query <= axios 같은 처리로 못할까? <= 가능
        //이상없으면 state 변화
        //if email 중복검사  -> graphQL query
        //axios -> graphQL mutation (pw 는 hash 변환)
        //redirect? 뒤로가기 못하게.
        //input xsscripting 방지.
    }

    render(){
        return(
            <Layout>
                <div>
                    <form onSubmit={this._handleSubmit}>
                        <input name="nickName" type="text" placeholder="NICKNAME" onChange={this._handleNickChange} />
                        <br/>
                        <input name="email" type="email" placeholder="EMAIL" onChange={this._handleEmailChange} />
                        <br/>
                        <input name="password" type="password" placeholder="PW" onChange={this._handlePassChange} />
                        <br/>
                        <select name="age" onChange={this._handleAgeChange} defaultValue="20">
                            <option value="10">10대</option>
                            <option value="20">20대</option>
                            <option value="30">30대</option>
                            <option value="40">40대</option>
                            <option value="50">50대</option>
                            <option value="60">60대</option>
                            <option value="70">70대</option>
                            <option value="80">80대</option>
                        </select>
                        <br/>
                        <input type="button" value="Submit" onClick={this._handleSubmit} />
                    </form>
                </div>
            </Layout>
        );
    }
}

export default SignUp

//event.preventDefault();
