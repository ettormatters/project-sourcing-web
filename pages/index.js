import React from 'react';
import Layout from '../components/Layout'
import StageBanner from '../components/StageBanner'
import Category from '../components/Category'
import PostView from '../components/PostView'

class Index extends React.Component {
    render(){
        return(
            <Layout>
                <StageBanner />
                <div className="container">
                    <Category />
                    <PostView />
                </div>
            </Layout>
        );
    }
}

export default Index