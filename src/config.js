if(process.env.baseURL == undefined){
    url = 'http://159.203.142.21:3032'
} else {
    url = process.env.baseURL;
}

module.exports = {
    loginUrl: 'http://ec2-54-88-11-110.compute-1.amazonaws.com/api/login',
    registerUrl: 'http://ec2-54-88-11-110.compute-1.amazonaws.com/api/setup',
    userDetail: 'http://ec2-54-88-11-110.compute-1.amazonaws.com/api/userdetails',
    pluginsPath : '/var/www/html/plugins',
    websitesPath : '/var/www/html/websites',
    metalpath: '/var/www/html/node_modules/',
    baseURL : url,
    ipAddress: 'http://159.203.142.21'
}