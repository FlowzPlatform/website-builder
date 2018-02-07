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

    loginUrl = 'https://auth.'+domainkey+'/api/login';
    ldapUrl = 'https://api.'+domainkey+'/auth/api/ldapauth';
    registerUrl = 'https://auth.'+domainkey+'/api/setup';
    forgotPasswordUrl = 'https://auth.'+domainkey+'/api/forgetpassword';
    userDetail = 'https://auth.'+domainkey+'/api/userdetails';
    socialUrl = 'https://auth.'+domainkey+'/api';

    loginWithFacebookUrl = 'https://auth.'+domainkey+'/auth/facebook';
    loginWithGoogleUrl = 'https://auth.'+domainkey+'/auth/Gplus';
    loginWithTwitterUrl = 'https://auth.'+domainkey+'/auth/twitter';
    loginWithGithubUrl = 'https://auth.'+domainkey+'/auth/github';
    loginWithLinkedInUrl = 'https://auth.'+domainkey+'/auth/linkedin';
    inviteAPI = 'https://api.flowzcluster.tk/crm/invite';
    paymentApiGateway = 'https://api.' + domainkey + '/payment/availablegateway';
} else {
    ipAdd = 'http://localhost';
    // socketURL = 'ws://devws.flowz.com:4032';
    socketURL = 'http://localhost:4032';
    frontEndUrl = 'http://localhost:8080/editor';

    loginUrl = 'https://api.flowzcluster.tk/auth/api/login';
    ldapUrl = 'http://api.flowzcluster.tk/auth/api/ldapauth';
    registerUrl = 'http://auth.flowzcluster.tk/api/setup';
    forgotPasswordUrl = 'http://auth.flowzcluster.tk/api/forgetpassword';
    userDetail = 'https://api.flowzcluster.tk/auth/api/userdetails';
    socialUrl = 'http://auth.flowzcluster.tk/api';
    subscriptionApi = 'https://api.flowzcluster.tk/subscription/user-subscription/';
    loginWithFacebookUrl = 'http://auth.flowzcluster.tk/auth/facebook';
    loginWithGoogleUrl = 'http://auth.flowzcluster.tk/auth/Gplus';
    loginWithTwitterUrl = 'http://auth.flowzcluster.tk/auth/twitter';
    loginWithGithubUrl = 'http://auth.flowzcluster.tk/auth/github';
    loginWithLinkedInUrl = 'http://auth.flowzcluster.tk/auth/linkedin';
    inviteAPI = 'https://api.flowzcluster.tk/crm/invite';
    paymentApiGateway = 'https://api.flowzcluster.tk/payment/availablegateway';
}

module.exports = {

    domainkey: domainkey,

    loginUrl: loginUrl,
    ldapUrl: ldapUrl,
    registerUrl: registerUrl,
    userDetail: userDetail,
    socialUrl: socialUrl,
    inviteAPI:inviteAPI,
    subscriptionApi:subscriptionApi,
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
