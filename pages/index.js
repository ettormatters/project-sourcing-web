import React from 'react';
import { request } from 'graphql-request'

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import partyApp from '../reducers/reducer';
import { initPosts } from '../actions/action';

import Layout from '../components/Layout';
import StageBanner from '../components/StageBanner';
import Category from '../components/Category';
import PostView from '../components/PostView';
import Rank from '../components/Rank';

import css from '../style/hwistyle.css';

const store = createStore(partyApp, applyMiddleware(thunk));

class Index extends React.Component {
    constructor(props) {
        super(props);

        this._orderSelectOnChange = this._orderSelectOnChange.bind(this);
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
        console.log(">4shouldComponentUpdate");
        return true;
    }

    componentWillUpdate(){
        console.log(">5componentWillUpdate");
    }

    componentDidUpdate(){
        console.log(">6componentDidUpdate");
    }
    
    render(){
        return(
            <Provider store = {store}>
                <Layout>
                    <StageBanner />
                    <div className={css.Container}>
                        <Category selChange={this._orderSelectOnChange} />
                        <PostView />
                        <Rank />
                    </div>
                    <style jsx global>{`
                        body {
                            margin: 0;
                            background-color: #FFFFFF;
                        }
                    `}</style>
                </Layout>
            </Provider>
        );
    }

    _orderSelectOnChange (event) {
        console.log(event.target.value);
    }
}

export default Index