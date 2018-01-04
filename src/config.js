if(process.env.baseURL == undefined){
    url = 'http://api.flowz.com/serverapi'
} else {
    url = process.env.baseURL;
    // url = 'http://devapi.flowz.com/serverapi';
    console.log('Custom BaseURL set: ', url);
}

// If Production Environment
if (process.env.NODE_ENV !== 'development') {
    serverkey = JSON.stringify(process.env.serverkey);
    ipAdd = 'flowzcluster.tk';
    socketURL = 'ws://ws.flowz.com:4032';
    frontEndUrl = 'http://webbuilder.flowzcluster.tk/dashboard';

    loginUrl = 'http://'+ serverkey+'.flowz.com/api/login';
    registerUrl = 'http://'+ serverkey+'.flowz.com/api/setup';
    userDetail = 'http://'+ serverkey+'.flowz.com/api/userdetails';
    socialUrl = 'http://'+ serverkey+'.flowz.com/api';

    loginWithFacebookUrl = 'http://'+ serverkey+'.flowz.com/auth/facebook';
    loginWithGoogleUrl = 'http://'+ serverkey+'.flowz.com/auth/Gplus';
    loginWithTwitterUrl = 'http://'+ serverkey+'.flowz.com/auth/twitter';
    loginWithGithubUrl = 'http://'+ serverkey+'.flowz.com/auth/github';
    loginWithLinkedInUrl = 'http://'+ serverkey+'.flowz.com/auth/linkedin';
} else {
    ipAdd = 'http://localhost';
    // socketURL = 'ws://devws.flowz.com:4032';
    socketURL = 'http://localhost:4032';
    frontEndUrl = 'http://localhost:8080/dashboard';

    loginUrl = 'http://devauth.flowz.com/api/login';
    registerUrl = 'http://devauth.flowz.com/api/setup';
    userDetail = 'http://devauth.flowz.com/api/userdetails';
    socialUrl = 'http://devauth.flowz.com/api';

    loginWithFacebookUrl = 'http://devauth.flowz.com/auth/facebook';
    loginWithGoogleUrl = 'http://devauth.flowz.com/auth/Gplus';
    loginWithTwitterUrl = 'http://devauth.flowz.com/auth/twitter';
    loginWithGithubUrl = 'http://devauth.flowz.com/auth/github';
    loginWithLinkedInUrl = 'http://devauth.flowz.com/auth/linkedin';
}

console.log('frontEndUrl: ', frontEndUrl);

module.exports = {
    loginUrl: loginUrl,
    registerUrl: registerUrl,
    userDetail: userDetail,
    socialUrl: socialUrl,

    facebookSuccessCallbackUrl: frontEndUrl,
    googleSuccessCallbackUrl: frontEndUrl,
    twitterSuccessCallbackUrl: frontEndUrl,
    githubSuccessCallbackUrl: frontEndUrl,
    linkedInSuccessCallbackUrl: frontEndUrl,

    loginWithFacebookUrl: loginWithFacebookUrl,
    loginWithGoogleUrl: loginWithGoogleUrl,
    loginWithTwitterUrl: loginWithTwitterUrl,
    loginWithGithubUrl: loginWithGithubUrl,
    loginWithLinkedInUrl: loginWithLinkedInUrl,

    pluginsPath : '/var/www/html/plugins',
    websitesPath : '/var/www/html/websites',
    metalpath: '/var/www/html/node_modules/',
    webpackPath: '/var/www/html/node_modules/',

    baseURL : url,
    ipAddress: ipAdd,
    socketURL: socketURL,
    gitLabIpAddress: 'http://162.209.122.250/'
}
