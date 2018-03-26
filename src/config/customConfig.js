// console.log(process.env.domainkey)
// module.exports =  {
//     default : {
//         loginUrl : "https://auth.flowz.com/api/login",
//         ldapLoginUrl : "https://auth.flowz.com/api/ldapauth",
//         registrationUrl : "https://api.flowz.com/serverapi/register",
//         signupUrl:          "https://auth.flowz.com/api/setup",
//         userDetail:             "https://auth.flowz.com/api/userdetails",
//         forgotPasswordUrl :         "https://auth.flowz.com/api/forgetpassword",
//         resetpassword :                 "https://auth.flowz.com/api/resetpassword",
//         feathersServiceBaseUrl :            "https://api.flowz.com/serverapi/",
//         facebookSuccessCallbackUrl :            "https://dashboard.flowz.com",
//         loginWithFacebookUrl :                      "https://auth.flowz.com/auth/facebook",
//         googleSuccessCallbackUrl :                      "https://dashboard.flowz.com",
//         loginWithGoogleUrl :                                "https://auth.flowz.com/auth/Gplus",
//         serviceUrl :                                            "https://api.flowz.com/crm/",
//        //serviceUrl :                                                "https://localhost:3037/",
//         projecturl :                                                       'https://api.flowz.com/mom/',
//         assigneeapi :                                                           'https://api.flowz.com/user/alluserdetails/'
//     }

// }


console.log("???????????????????????? ", process.env.domainkey)

//let frontEndUrl = 'https://localhost:8081/#/login';
let frontEndUrl = 'https://crm.' + process.env.domainkey + '/#/login';

module.exports = {
    default: {



        loginUrl: "https://api." + process.env.domainkey + "/auth/api/login",
        ldapLoginUrl: "https://api." + process.env.domainkey + "/auth/api/ldapauth",
        registrationUrl: "https://api." + process.env.domainkey + "/auth/serverapi/register",
        signupUrl: "https://api." + process.env.domainkey + "/auth/api/setup",
        userDetail: "https://api." + process.env.domainkey + "/auth/api/userdetails",
        forgotPasswordUrl: "https://api." + process.env.domainkey + "/auth/api/forgetpassword",

        // resetpassword :                 "https://auth."+process.env.domainkey+"/api/resetpassword",
        resetPasswordRedirectUrl :          "https://crm."+process.env.domainkey+"/#/reset-password",
        resetPasswordUrl :                  "https://api."+process.env.domainkey+"/auth/api/resetpassword",
        changepassword: "https://api." + process.env.domainkey + "/auth/api/changepassword",
        feathersServiceBaseUrl: "https://api." + process.env.domainkey + "/auth/serverapi/",
        varifyEmailUrl: "https://api." + process.env.domainkey + "/auth/api/verifyemail",

        filterColorUrl: "https://api."+process.env.domainkey+"/pdmnew/filters/colors",
        colorTableUrl: "https://api."+process.env.domainkey+"/serverapi/color-table",




        facebookSuccessCallbackUrl: frontEndUrl,
        googleSuccessCallbackUrl: frontEndUrl,
        twitterSuccessCallbackUrl: frontEndUrl,
        githubSuccessCallbackUrl: frontEndUrl,
        linkedInSuccessCallbackUrl: frontEndUrl,



        flowzDashboardUrl: 'https://www.dashboard.' + process.env.domainkey,
        flowzBuilderUrl: 'https://www.webbuilder.' + process.env.domainkey,
        flowzVmailUrl: 'https://www.vmail.' + process.env.domainkey,
        flowzUploaderUrl: 'https://www.uploader.' + process.env.domainkey,
        flowzDbetlUrl: 'https://www.dbetl.' + process.env.domainkey,

        loginWithFacebookUrl : 'https://auth.'+process.env.domainkey+'/auth/facebook',
        loginWithGoogleUrl : 'https://auth.'+process.env.domainkey+'/auth/Gplus',
        loginWithTwitterUrl : 'https://auth.'+process.env.domainkey+'/auth/twitter',
        loginWithGithubUrl : 'https://auth.'+process.env.domainkey+'/auth/github',
        loginWithLinkedInUrl : 'https://auth.'+process.env.domainkey+'/auth/linkedin',

        // loginWithFacebookUrl: 'https://auth.flowzcluster.tk/auth/facebook',
        // loginWithGoogleUrl: 'https://auth.flowzcluster.tk/auth/Gplus',
        // loginWithTwitterUrl: 'https://auth.flowzcluster.tk/auth/twitter',
        // loginWithGithubUrl: 'https://auth.flowzcluster.tk/auth/github',
        // loginWithLinkedInUrl: 'https://auth.flowzcluster.tk/auth/linkedin',

        serviceUrl: 'https://api.' + process.env.domainkey + '/crm/',
        // serviceUrl :            'http://localhost:3037/',
        baseUrl: 'https://api.' + process.env.domainkey,
        subscriptionUrl: 'https://api.' + process.env.domainkey + '/subscription/',
        projecturl: 'https://api.' + process.env.domainkey + '/mom/',
        assigneeapi: 'https://api.' + process.env.domainkey + '/user/alluserdetails/',
        orderapi: 'https://api.' + process.env.domainkey + '/serverapi/myOrders',

        requestinfoapi: 'https://api.' + process.env.domainkey + '/serverapi/request-info',
        requestquoteapi: 'https://api.' + process.env.domainkey + '/serverapi/request-quote',
        subscriptionWebsitesapi: 'https://api.' + process.env.domainkey + '/serverapi/subscription-websites'
    }

}