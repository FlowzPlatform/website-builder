domainkey = process.env.domainkey;
console.log('Domain Key: ', domainkey);

if(process.env.baseURL == undefined){
    url = 'https://api.'+domainkey+'/serverapi'
} else {
    url = process.env.baseURL;
    // url = 'http://devapi.flowz.com/serverapi';
}

// If Production Environment
if (process.env.NODE_ENV !== 'development') {
    ipAdd = domainkey;
    socketURL = 'wss://ws.'+domainkey+':4032';
    frontEndUrl = 'https://webbuilder.'+domainkey+'/editor';

    loginUrl = 'https://auth.'+domainkey+'/api/login';
    registerUrl = 'https://auth.'+domainkey+'/api/setup';
    userDetail = 'https://auth.'+domainkey+'/api/userdetails';
    socialUrl = 'https://auth.'+domainkey+'/api';

    loginWithFacebookUrl = 'https://auth.'+domainkey+'/auth/facebook';
    loginWithGoogleUrl = 'https://auth.'+domainkey+'/auth/Gplus';
    loginWithTwitterUrl = 'https://auth.'+domainkey+'/auth/twitter';
    loginWithGithubUrl = 'https://auth.'+domainkey+'/auth/github';
    loginWithLinkedInUrl = 'https://auth.'+domainkey+'/auth/linkedin';
} else {
    ipAdd = 'http://localhost';
    // socketURL = 'ws://devws.flowz.com:4032';
    socketURL = 'http://localhost:4032';
    frontEndUrl = 'http://localhost:8080/editor';

    loginUrl = 'http://auth.flowzcluster.tk/api/login';
    registerUrl = 'http://auth.flowzcluster.tk/api/setup';
    userDetail = 'http://auth.flowzcluster.tk/api/userdetails';
    socialUrl = 'http://auth.flowzcluster.tk/api';

    loginWithFacebookUrl = 'http://auth.flowzcluster.tk/auth/facebook';
    loginWithGoogleUrl = 'http://auth.flowzcluster.tk/auth/Gplus';
    loginWithTwitterUrl = 'http://auth.flowzcluster.tk/auth/twitter';
    loginWithGithubUrl = 'http://auth.flowzcluster.tk/auth/github';
    loginWithLinkedInUrl = 'http://auth.flowzcluster.tk/auth/linkedin';
}

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
