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
    pluginsPath : '/var/www/html/plugins',
    websitesPath : '/var/www/html/websites',
    metalpath: '/var/www/html/node_modules/',
    baseURL : url,
    ipAddress: 'http://localhost'
    // ipAddress: 'http://auth.flowz.com:8080'
}