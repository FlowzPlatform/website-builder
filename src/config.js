domainkey = process.env.domainkey;
console.log('Domain Key: ', domainkey);

if(process.env.baseURL == undefined){
    url = 'http://api.'+domainkey+'/serverapi'
} else {
    url = process.env.baseURL;
    // url = 'http://devapi.flowz.com/serverapi';
}

localStorage.setItem('baseURL', url);

// If Production Environment
if (process.env.NODE_ENV !== 'development') {
    ipAdd = domainkey;
    socketURL = 'ws://ws.'+domainkey+':4032';
    frontEndUrl = 'http://webbuilder.'+domainkey+'/editor';

    loginUrl = 'http://auth.'+domainkey+'/api/login';
    ldapUrl = 'http://api.'+domainkey+'/auth/api/ldapauth';
    registerUrl = 'http://auth.'+domainkey+'/api/setup';
    forgotPasswordUrl = 'http://auth.'+domainkey+'/api/forgetpassword';
    userDetail = 'http://auth.'+domainkey+'/api/userdetails';
    socialUrl = 'http://auth.'+domainkey+'/api';

    loginWithFacebookUrl = 'http://auth.'+domainkey+'/auth/facebook';
    loginWithGoogleUrl = 'http://auth.'+domainkey+'/auth/Gplus';
    loginWithTwitterUrl = 'http://auth.'+domainkey+'/auth/twitter';
    loginWithGithubUrl = 'http://auth.'+domainkey+'/auth/github';
    loginWithLinkedInUrl = 'http://auth.'+domainkey+'/auth/linkedin';
} else {
    ipAdd = 'http://localhost';
    // socketURL = 'ws://devws.flowz.com:4032';
    socketURL = 'http://localhost:4032';
    frontEndUrl = 'http://localhost:8080/editor';

    loginUrl = 'http://auth.flowzcluster.tk/api/login';
    ldapUrl = 'http://api.flowzcluster.tk/auth/api/ldapauth';
    registerUrl = 'http://auth.flowzcluster.tk/api/setup';
    forgotPasswordUrl = 'http://auth.flowzcluster.tk/api/forgetpassword';
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
    ldapUrl: ldapUrl,
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
