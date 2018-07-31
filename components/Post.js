import React from 'react'

class Post extends React.Component {
    render(){
        return(
            <div>
                <div>
                    <img src="http://t.wallpaperweb.org/wallpaper/nature/3840x1024/9XMedia1280TripleHorizontalMountainsclouds.jpg"/>
                </div>
                <style jsx>{`
                    img {
                        width: 1000px;
                        height: 200px;
                        padding: 10px;
                    }
                `}</style>
            </div>
        );
    }
}

export default Post