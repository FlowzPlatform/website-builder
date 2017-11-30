let url;

if(process.env.baseURL == undefined){
    url = 'http://162.242.223.167:3034/'
} else {
    url = process.env.baseURL;
}

module.exports = {
    loginUrl: 'http://ec2-54-88-11-110.compute-1.amazonaws.com/api/login',
    registerUrl: 'http://ec2-54-88-11-110.compute-1.amazonaws.com/api/setup',
    pluginsPath : '/home/software/AllProjects/FlowzBuilder/src/assets/plugins',
    websitesPath : '/var/www/html/websites',
    metalpath: '/home/software/AllProjects/FlowzServiceApi/node_modules/',

	// LAN IpAddress
    // baseURL : 'http://172.16.230.84:3030',

    // WiFi ipAddress
    // baseURL : 'http://172.16.230.152:3030',

    // Local IpAddress
    baseURL : url,

    // Local ipaddress
    // Wifi
    // ipAddress : 'http://172.16.230.152',
    // LAN
    // ipAddress : 'http://172.16.230.84',
    // Local
    ipAddress : 'http://localhost'    
    
}