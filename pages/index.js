import React from 'react';
import Layout from '../components/Layout'
import StageBanner from '../components/StageBanner'
import Category from '../components/Category'

class Index extends React.Component {
    render(){
        return(
            <Layout>
                <StageBanner />
                <Category />
            </Layout>
        );
    }
}

export default Index