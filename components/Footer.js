import React from 'react'

class Footer extends React.Component {
    render(){
        return(
            <div className="footer">
                <div className="footer-item">
                    PARTYPPLE Inc.
                </div>

                <style jsx>{`
                     .footer {
                        margin-top: 30px;
                        border-top: 1px solid #e6e6e6;
                        padding: 10px 10% 40px 10%;
                        background-color: #EEEEEE;
                    }

                    .footer-item {
                        color: #b3b3b3;
                    }

                    @media screen and (max-width: 992px) {
                        .footer {
                            padding: 10px 40px 40px 40px;
                        }
                    }
                    
                    @media screen and (max-width: 600px) {
                        .footer {
                            padding: 10px 10px 40px 10px;
                        }
                    }
                `}</style>
            </div>
        );
    }
}

export default Footer