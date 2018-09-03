import React from 'react'

class FBLogin extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        const s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.innerHTML = `

        window.fbAsyncInit = function() {
            FB.init({
                appId      : '650717358631482',
                cookie     : true,
                xfbml      : true,
                version    : 'v3.1'
            }); 
            FB.AppEvents.logPageView();   
        };

        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.1&appId=650717358631482";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));

        function checkLoginState() {
            FB.getLoginStatus(function(response) {
                statusChangeCallback(response);
            });
        }

        function statusChangeCallback(response) {
            console.log(response)
            if (response.status === 'connected') {
                FB.api('/me', function (response) {
                    console.log('Successful login for: ' + response.name);
                });
            } else {
                document.getElementById('status').innerHTML = 'Please log ' +
                  'into this app.';
            }
        }

        `;
        document.body.appendChild(s);
    }

    render(){
        return(
            <div>
                <div id="status"></div>
                <div className="fb-login-button" data-size="medium" data-auto-logout-link="true" data-onlogin="checkLoginState();"></div>
            </div>
        );
    }
}

export default FBLogin
