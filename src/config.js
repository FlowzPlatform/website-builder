if(process.env.baseURL == undefined){
    url = 'http://api.flowz.com/serverapi'
} else {
    url = process.env.baseURL;
    console.log('Custom BaseURL set: ', url);
}

module.exports = {
    loginUrl: 'http://auth.flowz.com/api/login',
    registerUrl: 'http://auth.flowz.com/api/setup',
    userDetail: 'http://auth.flowz.com/api/userdetails',
    socialUrl: 'http://auth.flowz.com/api',

    facebookSuccessCallbackUrl: 'http://localhost:8080/dashboard',
    loginWithFacebookUrl: 'http://auth.flowz.com/auth/facebook',
    googleSuccessCallbackUrl: 'http://localhost:8080/dashboard',
    loginWithGoogleUrl: 'http://auth.flowz.com/auth/Gplus',
    twitterSuccessCallbackUrl: 'http://localhost:8080/dashboard',
    loginWithTwitterUrl: 'http://auth.flowz.com/auth/twitter',
    githubSuccessCallbackUrl: 'http://localhost:8080/dashboard',
    loginWithGithubUrl: 'http://auth.flowz.com/auth/github',
    linkedInSuccessCallbackUrl: 'http://localhost:8080/dashboard',
    loginWithLinkedInUrl: 'http://auth.flowz.com/auth/linkedin',

    pluginsPath : '/var/www/html/plugins',
    websitesPath : '/var/www/html/websites',
    metalpath: '/var/www/html/node_modules/',
    webpackPath: '/var/www/html/node_modules/',
    baseURL : url,
    // ipAddress: 'http://localhost'
    ipAddress: 'http://auth.flowz.com:8080'
}