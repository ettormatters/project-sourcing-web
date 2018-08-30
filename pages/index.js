import React from 'react';
import { request } from 'graphql-request'
import { createStore, applyMiddleware } from 'redux';
import { Provider  } from 'react-redux';
import thunk from 'redux-thunk';
import partyApp from '../reducers/reducer';

import Layout from '../components/Layout'
import StageBanner from '../components/StageBanner'
import Category from '../components/Category'
import PostView from '../components/PostView'

import { initPosts } from '../actions/action'

const store = createStore(partyApp, applyMiddleware(thunk));

class Index extends React.Component {
    constructor(props) {
        super(props);

        this._orderSelectOnChange = this._orderSelectOnChange.bind(this);
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