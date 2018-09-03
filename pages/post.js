import React from 'react'
import { request } from 'graphql-request'
import {withRouter} from 'next/router'
import Link from 'next/link'
import Layout from '../components/Layout'

import { Button } from 'react-bootstrap';

class aPostView extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            post : "uhoh",
            category : "category",
            oneLine : "oneLine",
            desc : "desc",
            hashTag : "hashTag",
            memberNumber : "memberNumber",
            initRouter : this.props.router
        };
        
        //this._queryTest = this._queryTest.bind(this);
    }

    componentDidMount() {
        let titleStr = this.props.router.query.title;
        
        let variables = {
            titleStr: titleStr,
        }

        let initQuery = `
            query ByHead($titleStr: String!){
                getByTitle(titleInput:
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
        request('http://localhost:4000/graphql', initQuery, variables)
            .then((data)=>{
                let init = data.getByTitle;

                this.setState((prevState, props) => {
                    this.state.post = init;
                    this.state.category = init.data.category;
                    this.state.oneLine = init.data.oneLine;
                    this.state.desc = init.data.desc;
                    this.state.hashTag = init.data.hashTag;
                    this.state.memberNumber = init.data.memberNumber;
                    return true;
               });
            });
    }

    render(){
        return(
            <Layout>
                <div className="aPost-view">
                    <div className="aPost-title">
                        {this.state.post.title}
                    </div>
                    <div className="apost-oneLine">
                        {this.state.oneLine}
                    </div>
                    <div className="aPost-header">
                        <span>{this.state.post.partyHead}</span>
                        <span>{this.state.post.author}</span>
                        <span>{this.state.post.date}</span>
                        <span>{this.state.memberNumber}</span>
                        <span>{this.state.category}</span>
                    </div>
                    <div className="aPost-popUp">
                        <span>{this.state.post.clap}</span>
                        <span>{this.state.hashTag}</span>
                    </div>
                    <div className="aPost-desc">
                        {this.state.desc}
                    </div>
                </div>
                <Button>Default</Button>
            </Layout>
        );
    }
}

export default withRouter(aPostView);