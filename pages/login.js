import React from 'react'

class FBLogin extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.innerHTML = `
        
            window.fbAsyncInit = function() {
            FB.init({
                appId      : '{your-app-id}',
                cookie     : true,
                xfbml      : true,
                version    : '{api-version}'
            });
                
            FB.AppEvents.logPageView();   

            FB.getLoginStatus(function(response) {
                statusChangeCallback(response);
            });
                
            };

            (function(d, s, id){
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {return;}
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
           
        `;
        this.instance.appendChild(script);
    }

    render(){
        return(
            <div>
                
            </div>
        );
    }
}

export default FBLogin

/*
<fb:login-button 
                scope="public_profile,email"
                onlogin="checkLoginState();">
                </fb:login-button>
                */