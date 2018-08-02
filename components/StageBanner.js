import React from 'react'

class StageBanner extends React.Component {
    render(){
        return(
            <div>
                <div className="StageBanner-Wrapper">
                    <div className="StageBanner-item">
                        <div className="Centering">
                            <img src="https://wallpapercave.com/wp/jLw8Rbf.jpg"/>
                        </div>
                    </div>
                </div>
                <style jsx>{`
                    .StageBanner-Wrapper {
                        width: 100%;
                        background-color: hsl(0, 0%, 8.5%);
                    }
                    
                    .StageBanner-item {
                        position: relative;
                        height: 400px;
                        overflow: hidden;
                    }

                    .Centering {
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        -webkit-transform: translate(50%,50%);
                        -ms-transform: translate(50%,50%);
                        transform: translate(50%,50%);
                    }

                    img {
                        position: absolute;
                        top: 0;
                        left: 0;
                        max-height: 100%;
                        width: auto;
                        min-width: 640px;
                        -webkit-transform: translate(-50%,-50%);
                        -ms-transform: translate(-50%,-50%);
                        transform: translate(-50%,-50%);
                    }
                `}</style>
            </div>
        );
    }
}

export default StageBanner