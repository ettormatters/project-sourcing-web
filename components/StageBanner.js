import React from 'react'

class StageBanner extends React.Component {
    render(){
        return(
            <div>
                <img src="http://www.v3wall.com/wallpaper/1920_1080/1101/1920_1080_20110115093323292435.jpg"/>
                <style jsx>{`
                    img {
                        width: 1300px;
                        height: 600px;
                    }
                `}</style>
            </div>
        );
    }
}

export default StageBanner