import React from 'react';
import Layout from '../components/Layout'
import StageBanner from '../components/StageBanner'
import Category from '../components/Category'
import PostView from '../components/PostView'
import fakeData from '../assets/fakeData.js';

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
            posts : fakeData
        };

        this._checkBoxOnChange = this._checkBoxOnChange.bind(this);
        this._orderSelectOnChange = this._orderSelectOnChange.bind(this);
      }

    componentWillMount(){
        console.log(">1componentWillMount");
        async function dataCall (){
            try {
                /*console.log("here");
                await fetch("")
                    .then(res => res.json())
                    .then(data => console.log(data))*/
                //const data = Users.findOne({}).exec();
                //user.name = 'zero';
                //user = await user.save();
                //user = await Users.findOne({ gender: 'm' }).exec();
            } catch (err) {
                console.error(err);
            }
        }
        dataCall();
    }

    componentDidMount(){
        console.log(">2componentDidMount");
        //network req
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
        //비교 condition
        //network req
    }

    _orderSelectOnChange (event) {
        console.log(event.target.value);
    }
    
    _checkBoxOnChange (event) {
        const checked = event.target.checked;
        const id = event.target.id;
        if(checked==true){
            this.setState((prevState, props)=>{
                prevState.list[id].checked = true;
                return true;
            });
        } else {
            this.setState((prevState, props)=>{
                prevState.list[id].checked = false;
                return true;
            });
        }
    }

    render(){
        return(
            <Layout>
                <StageBanner />
                <div className="container">
                    <Category order={this.state.order} list={this.state.list} boxChange={this._checkBoxOnChange} selChange={this._orderSelectOnChange}/>
                    <PostView posts={this.state.posts} />
                </div>
                <style jsx global>{`
                    body {
                        margin: 0;
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

export default Index