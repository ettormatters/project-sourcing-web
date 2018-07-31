import React from 'react'

class Footer extends React.Component {
    render(){
        return(
            <div className="footer">
                <div>
                    PARTYPPLE Inc.
                </div>

                <style jsx>{`
                    .footer {
                        border-top: 1px solid black;
                    }
                `}</style>
            </div>
        );
    }
}

export default Footer