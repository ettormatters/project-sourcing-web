import React from 'react'

class StageBanner extends React.Component {
    render(){
        return(
            <div>
                <img src="https://wallpapercave.com/wp/jLw8Rbf.jpg"/>
                <style jsx>{`
                    img {
                        width: 100%;
                        height: 400px;
                        /*높이 고정 시 배율!!*/
                    }

                `}</style>
            </div>
        );
    }
}

export default StageBanner