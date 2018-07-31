import React from 'react';
import Layout from '../components/Layout'
import StageBanner from '../components/StageBanner'
import Category from '../components/Category'
import Post from '../components/Post'

class Index extends React.Component {
    render(){
        return(
            <Layout>
                <StageBanner />
                <Category />
                <Post />
            </Layout>
        );
    }
}

export default Index