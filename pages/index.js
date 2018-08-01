import React from 'react';
import Layout from '../components/Layout'
import StageBanner from '../components/StageBanner'
import Category from '../components/Category'
import PostView from '../components/PostView'

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list : [
                { id: "0", val: "somethingNew", checked:false },
                { id: "1", val: "side-project", checked:false },
                { id: "2", val: "club", checked:false },
                { id: "3", val: "competition", checked:false },
                { id: "4", val: "study", checked:false },
                { id: "5", val: "business", checked:false },
                { id: "6", val: "body-training", checked:false },
                { id: "7", val: "music", checked:false },
                { id: "8", val: "video", checked:false },
                { id: "9", val: "art", checked:false },
                { id: "10", val: "travel", checked:false },
                { id: "11", val: "game", checked:false },
                { id: "12", val: "activity", checked:false }
            ]       
        };

        this._checkBoxOnChange = this._checkBoxOnChange.bind(this);
      }

    _checkBoxOnChange (event) {
        const id = event.target.id;
        if(event.target.checked==true){
            this.setState(()=>{
                this.state.list[id].checked = true;
                console.log(this.state.list);
            });
        } else {
            this.setState(()=>{
                this.state.list[id].checked = false;
                console.log(this.state.list);
            });
        }
    }

    render(){
        return(
            <Layout>
                <StageBanner />
                <div className="container">
                    <Category list={this.state.list} onChange={this._checkBoxOnChange}/>
                    <PostView />
                </div>
            </Layout>
        );
    }
}

export default Index