import React from 'react'
import { request } from 'graphql-request'
import {withRouter} from 'next/router'
import Link from 'next/link'
import Layout from '../components/Layout'
import { throwServerError } from '../node_modules/apollo-link-http-common';

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
                <div>
                    {this.state.post.title}
                    {this.state.post.partyHead}
                    {this.state.post.author}
                    {this.state.post.date}
                    {this.state.post.clap}
                    {this.state.category}
                    {this.state.oneLine}
                    {this.state.desc}
                    {this.state.hashTag}
                    {this.state.memberNumber}
                </div>
                <style jsx>{`

                `}</style>
            </Layout>
        );
    }
}

export default withRouter(aPostView);

//partyHead -> Link
//clap -> function
//hashTag -> Link