import React from 'react';
import { request } from 'graphql-request'
import Layout from '../components/Layout'
import StageBanner from '../components/StageBanner'
import Category from '../components/Category'
import PostView from '../components/PostView'

class Index extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            order : [
                { id: "recent", text: "Recently" },
                { id: "high-clapped", text: "High Clapped" },
                { id: "d-day", text: "D-Day" },
                { id: "verified", text: "Verified" }
            ],
            list : [
                { id: "0", val: "somethingNew", text: "Something New", checked:false },
                { id: "1", val: "side-project", text: "Side Project", checked:false },
                { id: "2", val: "club", text: "Club", checked:false },
                { id: "3", val: "competition", text: "Competition", checked:false },
                { id: "4", val: "study", text: "Study", checked:false },
                { id: "5", val: "business", text: "Business", checked:false },
                { id: "6", val: "body-training", text: "Body Training", checked:false },
                { id: "7", val: "music", text: "Music", checked:false },
                { id: "8", val: "video",text: "Video", checked:false },
                { id: "9", val: "art", text: "Art", checked:false },
                { id: "10", val: "travel", text: "Travel", checked:false },
                { id: "11", val: "game", text: "Game", checked:false },
                { id: "12", val: "activity", text: "Activity", checked:false }
            ],
            posts : this.props.init,
            checkArray : [0,0,0,0,0,0,0,0,0,0,0,0,0]
        };

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

    render(){
        return(
            <Layout>
                <StageBanner />
                <div className="container">
                    <Category 
                        order={this.state.order} 
                        list={this.state.list} 
                        boxChange={this._checkBoxOnChange} 
                        selChange={this._orderSelectOnChange}
                    />
                    <PostView 
                        posts={this.state.posts} 
                        clapChange={this._clapOnChange} 
                    />
                </div>

                <style jsx global>{`
                    body {
                        margin: 0;
                        background-color: #FFFBEE;
                    }
                `}</style>
                <style jsx>{`
                    .container {
                        display: flex;
                        align-items: flex-start;
                    }
                `} </style>
            </Layout>
        );
    }
}

Index.getInitialProps = async function() {
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
    const res = await request('http://localhost:4000/graphql', initQuery);

    return {
        init: res.getInitialPosts
    }
}

export default Index