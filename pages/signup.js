import React from 'react'
import axios from 'axios'
import Layout from '../components/Layout'

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            nickName: "",
            email: "",
            pw: "",
            age: "20",
            nickOver: false,
            emailOver: false
        }

        this._handleNickChange = this._handleNickChange.bind(this);
        this._handleEmailChange = this._handleEmailChange.bind(this);
        this._handlePassChange = this._handlePassChange.bind(this);
        this._handleAgeChange = this._handleAgeChange.bind(this);
        this._nickOverlap = this._nickOverlap.bind(this);
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
             //if nickname 중복검사  -> graphQL query <= axios 같은 처리로 못할까? <= 가능
            console.log(await this._nickOverlap(this.state.nickName))
             //if(this._nickOverlap(this.state.nickName)){}

        }

       
        //각각 이상없으면 check state 변화


        //if email 중복검사  -> graphQL query
        //각각 이상없으면 check state 변화

        //age number 로 parse 해야함

        //axios -> graphQL mutation (pw 는 hash-salt 변환)

        //redirect? 뒤로가기 못하게.
        //input xsscripting 방지.
    }

    _nickOverlap(nick) {
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

        let result = axios({
            url: 'http://localhost:4000/graphql',
            method: 'post',
            //headers:  {'Content-Type': 'application/json'}
            data: { query, variables } //JSON.stringify({})
        })

        return result; // status , data.data
        /*
        if(result == null){

        } else if()
        */
}

    render(){
        return(
            <Layout>
                <div>
                    <div>
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
                    </div>
                </div>
            </Layout>
        );
    }
}

export default SignUp

//event.preventDefault();
