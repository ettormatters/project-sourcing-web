import React from 'react';
import { request } from 'graphql-request'
import { createStore } from 'redux';
import { Provider  } from 'react-redux';
import partyApp from '../reducers/reducer';

import Layout from '../components/Layout'
import StageBanner from '../components/StageBanner'
import Category from '../components/Category'
import PostView from '../components/PostView'

import { initPosts } from '../actions/action'

const store = createStore(partyApp);

class Index extends React.Component {
    constructor(props) {
        super(props);

        this._orderSelectOnChange = this._orderSelectOnChange.bind(this);
        this._checkBoxOnChange = this._checkBoxOnChange.bind(this);
        this._updateByList = this._updateByList.bind(this);
        this._clapOnChange = this._clapOnChange.bind(this); 
    }

    componentWillMount(){
        console.log(">1componentWillMount");
    }

    componentDidMount(){
        console.log(">2componentDidMount");
        
        let initQuery = `
                query {
                    getInitialPosts {
                        partyHead
                        author
                        title
                        data{
                            category
                            oneLine
                            desc
                            hashTag
                            memberNumber
                        }
                        clap
                        date
                    }
                }
            `
        request('http://localhost:4000/graphql', initQuery)
            .then((res)=>{store.dispatch(initPosts(res.getInitialPosts));})
    }

    shouldComponentUpdate(){
        console.log(">01shouldComponentUpdate");
        return true;
    }

    componentWillUpdate(){
        console.log(">02componentWillUpdate");
    }

    componentDidUpdate(){
        console.log(">03componentDidUpdate");
    }
    
    render(){
        return(
            <Provider store = {store}>
                <Layout>
                    <StageBanner />
                    <div className="container">
                        <Category 
                            boxChange={this._checkBoxOnChange} 
                            selChange={this._orderSelectOnChange}
                        />
                        <PostView
                            clapChange={this._clapOnChange} 
                        />
                    </div>

                    <style jsx global>{`
                        body {
                            margin: 0;
                            background-color: #FFFFFF;
                        }
                    `}</style>
                    <style jsx>{`
                        .container {
                            display: flex;
                            justify-content: center;
                            align-items: flex-start;
                        }
                    `} </style>
                </Layout>
            </Provider>
        );
    }

    _orderSelectOnChange (event) {
        console.log(event.target.value);
    }

    async _checkBoxOnChange (event) {

        const boxChecked = event.target.checked;
        const id = event.target.id;

        let _list = this.state.list;
        let _array = this.state.checkArray;
        let _posts = this.state.posts;

        if(boxChecked==true) {
            _list[id].checked = true;

            for(let d in _list) {
                if(_list[d].checked == true) {
                    _array[d] = 1;
                }
            }
            _posts = await this._updateByList(_array);

            this.setState((prevState, props) => {
                prevState.list = _list;
                prevState.checkArray = _array;
                prevState.posts = _posts;
                return true;
            });
        } else {
            _list[id].checked = false;

            for(let d in _list) {
                if(_list[d].checked == false) {
                    _array[d] = 0;
                }
            }

            let cnt = 0;
            for(let i in _array) {
                if(_array[i] == 0){
                    cnt = cnt + 1;
                }
            }

            if(cnt == 13) {
                for(let i in _array) {
                    _array[i] = 1;
                }
                _posts = await this._updateByList(_array);
                for(let i in _array) {
                    _array[i] = 0;
                }
            } else {
                _posts = await this._updateByList(_array);
            }
            
            this.setState((prevState, props) => {
                prevState.list = _list;
                prevState.checkArray = _array;
                prevState.posts = _posts;
                return true;
           });
        }
    }

    async _updateByList (checkArray) {
        let updateArray = [];
    
        for(let i in checkArray) {
            if(checkArray[i]==1) {
                updateArray.push(this.state.list[i].text);
            }
        }
    
        let variables = {
            arrStr: updateArray,
        }
    
        const updateQuery = `
            query UpdatePosts($arrStr: [String]) {
                getUpdatePosts(cateCheck:
                    {category: $arrStr}
                ){
                    partyHead
                    author
                    title
                    data{
                        category
                        oneLine
                        desc
                        hashTag
                        memberNumber
                    }
                    clap
                    date
                }
        }
        `
        const upRes = await request('http://localhost:4000/graphql', updateQuery, variables)
        return upRes.getUpdatePosts;
    }

    async _clapOnChange (event) {
        let titleStr = event.target.id;
        
        let variables = {
            titleStr: titleStr,
        }
    
        const clapQuery = `
            mutation UpdateClap($titleStr: String!){
                updateClap (titleInput:
                    {title: $titleStr}
                ){
                    partyHead
                    author
                    title
                    data{
                        category
                        oneLine
                        desc
                        hashTag
                        memberNumber
                    }
                    clap
                    date
                }
            }
        `
        await request('http://localhost:4000/graphql', clapQuery, variables);
        return true;
    }
}

export default Index