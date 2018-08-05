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
                        border-top: 1px solid #262626;
                        padding: 10px 10% 40px 10%;
                        background-color: hsl(0, 0%, 8.5%);;
                    }

                    .footer-item {
                        color: #383838;
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