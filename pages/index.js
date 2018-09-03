import React from 'react';
import { request } from 'graphql-request'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import partyApp from '../reducers/reducer';

import Layout from '../components/Layout';
import StageBanner from '../components/StageBanner';
import Category from '../components/Category';
import PostView from '../components/PostView';

import { initPosts } from '../actions/action';

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
        
        const s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.innerHTML = `

        window.fbAsyncInit = function() {
            FB.init({
                appId      : '650717358631482',
                cookie     : true,
                xfbml      : true,
                version    : 'v3.1'
            }); 
            FB.AppEvents.logPageView();   
        };

        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.1&appId=650717358631482";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));

        function checkLoginState() {
            FB.getLoginStatus(function(response) {
                statusChangeCallback(response);
            });
        }

        function statusChangeCallback(response) {
            console.log(response)
            if (response.status === 'connected') {
                FB.api('/me', function (response) {
                    console.log('Successful login for: ' + response.name);
                });
            } else {
                document.getElementById('status').innerHTML = 'Please log ' +
                    'into this app.';
            }
        }

        `;
        document.body.appendChild(s);
        let scriptList = document.scripts;
        console.log(scriptList)
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
                    <div className={css.Container}>
                        <Category selChange={this._orderSelectOnChange} />
                            <div id="status"></div>
                            <div className="fb-login-button" data-button-type="continue_with" data-size="medium" data-auto-logout-link="true" data-onlogin="checkLoginState();"></div>   
                        <PostView/>
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