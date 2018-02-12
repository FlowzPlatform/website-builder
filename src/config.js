domainkey = process.env.domainkey;
console.log('Domain Key: ', domainkey);

if(process.env.baseURL == undefined){
    url = 'https://api.'+domainkey+'/serverapi'
} else {
    url = process.env.baseURL;
    // url = 'http://devapi.flowz.com/serverapi';
}

localStorage.setItem('baseURL', url);

// If Production Environment
if (process.env.NODE_ENV !== 'development') {
    ipAdd = domainkey;
    socketURL = 'wss://ws.'+domainkey+':4032';
    frontEndUrl = 'https://webbuilder.'+domainkey+'/editor';

    loginUrl = 'https://api.'+domainkey+'/auth/api/login';
    ldapUrl = 'https://api.'+domainkey+'/auth/api/ldapauth';
    registerUrl = 'https://api.'+domainkey+'/auth/api/setup';
    forgotPasswordUrl = 'https://api.'+domainkey+'/auth/api/forgetpassword';
    userDetail = 'https://api.'+domainkey+'/auth/api/userdetails';
    socialUrl = 'https://api.'+domainkey+'/auth/api';
    subscriptionApi = 'https://api.flowzcluster.tk/subscription/user-subscription/';
    loginWithFacebookUrl = 'https://auth.'+domainkey+'/auth/facebook';
    loginWithGoogleUrl = 'https://auth.'+domainkey+'/auth/Gplus';
    loginWithTwitterUrl = 'https://auth.'+domainkey+'/auth/twitter';
    loginWithGithubUrl = 'https://auth.'+domainkey+'/auth/github';
    loginWithLinkedInUrl = 'https://auth.'+domainkey+'/auth/linkedin';

    paymentApiGateway = 'https://api.' + domainkey + '/payment/availablegateway';
} else {
    ipAdd = 'http://localhost';
    // socketURL = 'ws://devws.flowz.com:4032';
    socketURL = 'http://localhost:4032';
    frontEndUrl = 'http://localhost:8080/editor';

    loginUrl = 'https://api.flowzcluster.tk/auth/api/login';
    ldapUrl = 'https://api.flowzcluster.tk/auth/api/ldapauth';
    registerUrl = 'https://api.flowzcluster.tk/auth/api/setup';
    forgotPasswordUrl = 'https://api.flowzcluster.tk/auth/api/forgetpassword';
    userDetail = 'https://api.flowzcluster.tk/auth/api/userdetails';
    socialUrl = 'https://api.flowzcluster.tk/auth/api';
    subscriptionApi = 'https://api.flowzcluster.tk/subscription/user-subscription/';
    loginWithFacebookUrl = 'https://auth.flowzcluster.tk/auth/facebook';
    loginWithGoogleUrl = 'https://auth.flowzcluster.tk/auth/Gplus';
    loginWithTwitterUrl = 'https://auth.flowzcluster.tk/auth/twitter';
    loginWithGithubUrl = 'https://auth.flowzcluster.tk/auth/github';
    loginWithLinkedInUrl = 'https://auth.flowzcluster.tk/auth/linkedin';
    paymentApiGateway = 'https://api.flowzcluster.tk/payment/availablegateway';
}

module.exports = {

    domainkey: domainkey,

    loginUrl: loginUrl,
    ldapUrl: ldapUrl,
    registerUrl: registerUrl,
    userDetail: userDetail,
    socialUrl: socialUrl,
    subscriptionApi: subscriptionApi,
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

    paymentApiGateway: paymentApiGateway,

    pluginsPath : '/var/www/html/plugins',
    websitesPath : '/var/www/html/websites',
    metalpath: '/var/www/html/node_modules/',
    webpackPath: '/var/www/html/node_modules/',

    baseURL : url,
    ipAddress: ipAdd,
    socketURL: socketURL,
    gitLabIpAddress: 'http://47.88.50.66/'
}
