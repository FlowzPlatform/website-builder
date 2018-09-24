domainkey = process.env.domainkey;
gitlabtoken=process.env.gitlabtoken
netlifytoken=process.env.netlifytoken
console.log('gitlabtoken:',gitlabtoken)

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

    initLdap = 'https://api.' + domainkey + '/authldap/init';

    loginUrl = 'https://api.'+domainkey+'/auth/api/login';
    ldapUrl = 'https://api.'+domainkey+'/auth/api/ldapauth';
    registerUrl = 'https://api.'+domainkey+'/auth/api/setup';
    forgotPasswordUrl = 'https://api.' + domainkey + '/auth/api/forgetpassword';
    forgotPasswordRedirectUrl = 'https://webbuilder.'+domainkey+'/reset-password';
    resetPasswordUrl = 'https://api.' + domainkey + '/auth/api/resetpassword';
    userDetail = 'https://api.'+domainkey+'/auth/api/userdetails';
    socialUrl = 'https://api.'+domainkey+'/auth/api';
    subscriptionApi = 'https://api.'+domainkey+'/subscription/';
    loginWithFacebookUrl = 'https://auth.'+domainkey+'/auth/facebook';
    loginWithGoogleUrl = 'https://auth.'+domainkey+'/auth/google';
    loginWithTwitterUrl = 'https://auth.'+domainkey+'/auth/twitter';
    loginWithGithubUrl = 'https://auth.'+domainkey+'/auth/github';
    loginWithLinkedInUrl = 'https://auth.'+domainkey+'/auth/linkedin';

    // paymentApiGateway = 'https://api.' + domainkey + '/payment/availablegateway';
    vshopApi = 'https://api.' + domainkey + '/pdmnew/vshop-list';
    crmsettingapi='https://api.'+domainkey+'/crm/settings'
    flowzDashboardUrl = 'https://dashboard.' + domainkey
    buildersettings='https://api.'+domainkey+'/crm/buildersettings/',
    menuCategoriesUrl='https://api.'+domainkey+'/pdmnew/categories',
    colorSwatchUrl='https://api.'+domainkey+'/pdmnew/filters/'
    productApiUrl='https://api.'+domainkey+'/pdmnew/pdm/US'
} else {
    ipAdd = 'http://localhost';
    // socketURL = 'ws://devws.flowz.com:4032';
    socketURL = 'http://localhost:4032';
    frontEndUrl = 'http://localhost:8080/editor';

    initLdap = 'https://api.flowzcluster.tk/authldap/init';

    loginUrl = 'https://api.flowzcluster.tk/auth/api/login';
    ldapUrl = 'https://api.flowzcluster.tk/auth/api/ldapauth';
    registerUrl = 'https://api.flowzcluster.tk/auth/api/setup';
    forgotPasswordUrl = 'https://api.flowzcluster.tk/auth/api/forgetpassword';
    forgotPasswordRedirectUrl = 'http://localhost:8080/reset-password';
    resetPasswordUrl = 'https://api.flowzcluster.tk/auth/api/resetpassword';
    userDetail = 'https://api.flowzcluster.tk/auth/api/userdetails';
    socialUrl = 'https://api.flowzcluster.tk/auth/api';
    subscriptionApi = 'https://api.flowzcluster.tk/subscription/';
    loginWithFacebookUrl = 'https://auth.flowzcluster.tk/auth/facebook';
    loginWithGoogleUrl = 'https://auth.flowzcluster.tk/auth/google';
    loginWithTwitterUrl = 'https://auth.flowzcluster.tk/auth/twitter';
    loginWithGithubUrl = 'https://auth.flowzcluster.tk/auth/github';
    loginWithLinkedInUrl = 'https://auth.flowzcluster.tk/auth/linkedin';
    // paymentApiGateway = 'https://api.flowzcluster.tk/payment/availablegateway';
    vshopApi = 'https://api.flowzcluster.tk/pdmnew/vshop-list';
    crmsettingapi='https://api.flowzcluster.tk/crm/settings'
    flowzDashboardUrl = 'https://dashboard.flowzcluster.tk'
    buildersettings='https://api.flowzcluster.tk/crm/buildersettings/'
    menuCategoriesUrl='https://api.flowzcluster.tk/pdmnew/categories',
    colorSwatchUrl='https://api.flowzcluster.tk/pdmnew/filters/'
    productApiUrl = 'https://api.flowzcluster.tk/pdmnew/pdm/US'
    //productLocalApiUrl = 'http://localhost:9200/pdm1/product'  //temperary
}

module.exports = {
    buildersettings:buildersettings,
    frontEndUrl: frontEndUrl,
    flowzDashboardUrl: flowzDashboardUrl,
    domainkey: domainkey,
    crmsettingapi:crmsettingapi,
    loginUrl: loginUrl,
    ldapUrl: ldapUrl,
    registerUrl: registerUrl,
    forgotPasswordUrl: forgotPasswordUrl,
    forgotPasswordRedirectUrl: forgotPasswordRedirectUrl,
    resetPasswordUrl: resetPasswordUrl,
    userDetail: userDetail,
    socialUrl: socialUrl,
    initLdap: initLdap,
    subscriptionApi: subscriptionApi,
    facebookSuccessCallbackUrl: frontEndUrl,
    googleSuccessCallbackUrl: frontEndUrl,
    googleFailureCallbackUrl: frontEndUrl,
    twitterSuccessCallbackUrl: frontEndUrl,
    twitterFailureCallbackUrl: frontEndUrl,
    githubSuccessCallbackUrl: frontEndUrl,
    githubFailureCallbackUrl: frontEndUrl,
    linkedInSuccessCallbackUrl: frontEndUrl,
    linkedInFailureCallbackUrl: frontEndUrl,

    loginWithFacebookUrl: loginWithFacebookUrl,
    loginWithGoogleUrl: loginWithGoogleUrl,
    loginWithTwitterUrl: loginWithTwitterUrl,
    loginWithGithubUrl: loginWithGithubUrl,
    loginWithLinkedInUrl: loginWithLinkedInUrl,

    // paymentApiGateway: paymentApiGateway,

    vshopApi : vshopApi,
    menuCategoriesUrl : menuCategoriesUrl,
    colorSwatchUrl : colorSwatchUrl,
    productApiUrl : productApiUrl,
    // productLocalApiUrl : productLocalApiUrl,  //temperary
    pluginsPath : '/var/www/html/plugins',
    websitesPath : '/var/www/html/websites',
    metalpath: '/var/www/html/node_modules/',
    webpackPath: '/var/www/html/node_modules/',
    gitlabtoken: gitlabtoken,
    netlifytoken:netlifytoken,
    baseURL : url,
    ipAddress: ipAdd,
    socketURL: socketURL,
    gitLabIpAddress: 'https://gitlab.com/cenacle-devops/',
    // primarygitlabaccesstoken:'UbYWRfyi44mGR_PJr9nh',
    default:{
    flowzDashboardUrl: 'https://www.dashboard.' + process.env.domainkey,
    serviceUrl: 'https://api.' + process.env.domainkey + '/crm/',
    }
}
