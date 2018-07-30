import React from 'react';
import Layout from '../components/Layout'
import StageBanner from '../components/StageBanner'

class Index extends React.Component {
    render(){
        return(
            <Layout>
                <div>
                    Stage
                </div>
                <StageBanner />
            </Layout>
        );
    }
}

export default Index