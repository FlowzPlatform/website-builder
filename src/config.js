if(process.env.baseURL == undefined){
    url = 'http://api.flowz.com/serverapi'
} else {
    url = process.env.baseURL;
    console.log('Custom BaseURL set: ', url);
}

if (process.env.NODE_ENV !== 'development') {
    ipAdd = 'http://auth.flowz.com:8080',
    socketURL = 'http://ws.flowz.com:4032',
    frontEndUrl = 'http://webbuilder.flowz.com'    
} else {
    ipAdd = 'http://localhost',
    socketURL = 'http://localhost:4032',
    frontEndUrl = 'http://localhost:8080/dashboard'
}

console.log('frontEndUrl: ', frontEndUrl);

module.exports = {
    loginUrl: 'http://auth.flowz.com/api/login',
    registerUrl: 'http://auth.flowz.com/api/setup',
    userDetail: 'http://auth.flowz.com/api/userdetails',
    socialUrl: 'http://auth.flowz.com/api',

    facebookSuccessCallbackUrl: frontEndUrl,
    loginWithFacebookUrl: 'http://auth.flowz.com/auth/facebook',
    googleSuccessCallbackUrl: frontEndUrl,
    loginWithGoogleUrl: 'http://auth.flowz.com/auth/Gplus',
    twitterSuccessCallbackUrl: frontEndUrl,
    loginWithTwitterUrl: 'http://auth.flowz.com/auth/twitter',
    githubSuccessCallbackUrl: frontEndUrl,
    loginWithGithubUrl: 'http://auth.flowz.com/auth/github',
    linkedInSuccessCallbackUrl: frontEndUrl,
    loginWithLinkedInUrl: 'http://auth.flowz.com/auth/linkedin',

    pluginsPath : '/var/www/html/plugins',
    websitesPath : '/var/www/html/websites',
    metalpath: '/var/www/html/node_modules/',
    webpackPath: '/var/www/html/node_modules/',
    baseURL : url,
    ipAddress: ipAdd,
    socketURL: socketURL
}