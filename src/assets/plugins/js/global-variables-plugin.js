var globalVariables = [];
var brandName;

var userEmail = '';
var projectName = '';
var configDataUrl = '';

$(document).ready(function() {
    getProjectInfo();
    ImpletementSocekt();
});

async function getProjectInfo() {
    await $.getJSON( "../assets/project-details.json", function( data ) {  
        var configData = data;
        console.log('Project details: ', configData);
        userEmail = data[0].projectOwner;
        projectName = data[0].projectName;

        configDataUrl = "http://localhost:3032/project-configuration?userEmail=" + userEmail + "&websiteName=" + projectName;
    });

    getConfigData();
}

async function getConfigData () {
    console.log('Config Data URL:', configDataUrl);

    await $.getJSON( configDataUrl , function( data ) {  
        var configData = data.data[0].configData;
        globalVariables = configData[1].projectSettings[1].GlobalVariables;
    }); 

    updateGlobalVariables();
}

async function updateGlobalVariables () {
    $('body [id="brandName"]').html(brandName);
  
    // Replace all global variables
    for (var i = 0; i < globalVariables.length; i++){

        switch(globalVariables[i].variableType){
            case 'text':
                if(($('body [data-global-id="' + globalVariables[i].variableId + '"]').length > 0)){
                    $('body [data-global-id="' + globalVariables[i].variableId + '"]').text(globalVariables[i].variableValue);
                } 
                break;
            case 'image':
                var _varId = globalVariables[i].variableId;
                var _varValue = globalVariables[i].variableValue;
                if(($('body [data-global-id="' + _varId + '"]').length > 0)){

                    if(globalVariables[i].isImageUrl == true){
                        $('body [data-global-id="' + _varId + '"]').children('img').attr('src', _varValue);
                    } else {
                        var getImageData = await $.ajax({
                          url:'../assets/' + _varValue,
                          method: 'GET',
                          type: 'HEAD',
                          async: true,
                          error: function(err)
                          {
                            return false;
                          },
                          success: function(res)
                          {
                            $('body [data-global-id="' + _varId + '"]').children('img').attr('src', res);
                            return true;
                          }
                        });
                    }
                  
                } 
                break;
            case 'hyperlink':
                if(($('body [data-global-id="' + globalVariables[i].variableId + '"]').length > 0)){
                    $('body [data-global-id="' + globalVariables[i].variableId + '"]').children('a')[0].text = globalVariables[i].variableTitle;
                    $('body [data-global-id="' + globalVariables[i].variableId + '"]').children('a')[0].href = globalVariables[i].variableValue;
                }
                break; 
            case 'html':
                if(($('body [data-global-id="' + globalVariables[i].variableId + '"]').length > 0)){
                    $('body [data-global-id="' + globalVariables[i].variableId + '"]').html(globalVariables[i].variableValue);
                } 
                break;
            default:
                console.log('No Variables Found'); 
        }

    }
}

// LAN IpAddress
// var host = 'http://172.16.230.84:3030';

// WiFi ipAddress
// var host = 'http://172.16.230.152:3030';

// Local IpAddress
var host = 'http://localhost:3032';

function ImpletementSocekt() {
  var socket = io(host);
  var client = feathers()
      .configure(feathers.hooks())
      .configure(feathers.socketio(socket));
  var flowzDirectoryService = client.service('project-configuration');

  flowzDirectoryService.on('updated', async function(flowzDirectoryService) {
    console.log('Configurations Updated:', flowzDirectoryService);

    getConfigData();

    $('body [id="brandName"]').html(brandName);
        $('body [id="brandLogo"]').attr('src', '../assets/brand-logo.png');
    
        // Replace all global variables
        for (var i = 0; i < globalVariables.length; i++){

            switch(globalVariables[i].variableType){
                case 'text':
                    if(($('body [data-global-id="' + globalVariables[i].variableId + '"]').length > 0)){
                        $('body [data-global-id="' + globalVariables[i].variableId + '"]').text(globalVariables[i].variableValue);
                    } 
                    break;
                case 'image':
                    var _varId = globalVariables[i].variableId;
                    var _varValue = globalVariables[i].variableValue;
                    if(($('body [data-global-id="' + _varId + '"]').length > 0)){

                        if(globalVariables[i].isImageUrl == true){
                            $('body [data-global-id="' + _varId + '"]').children('img').attr('src', _varValue);
                        } else {
                            var getImageData = await $.ajax({
                            url:'../assets/' + _varValue,
                            method: 'GET',
                            type: 'HEAD',
                            async: true,
                            error: function(err)
                            {
                                return false;
                            },
                            success: function(res)
                            {
                                $('body [data-global-id="' + _varId + '"]').children('img').attr('src', res);
                                return true;
                            }
                            });
                        }
                    
                    } 
                    break;
                case 'hyperlink':
                    if(($('body [data-global-id="' + globalVariables[i].variableId + '"]').length > 0)){
                        $('body [data-global-id="' + globalVariables[i].variableId + '"]').children('a')[0].text = globalVariables[i].variableTitle;
                        $('body [data-global-id="' + globalVariables[i].variableId + '"]').children('a')[0].href = globalVariables[i].variableValue;
                    }
                    break; 
                case 'html':
                    if(($('body [data-global-id="' + globalVariables[i].variableId + '"]').length > 0)){
                        $('body [data-global-id="' + globalVariables[i].variableId + '"]').html(globalVariables[i].variableValue);
                    } 
                    break;
                default:
                    console.log('No Variables Found'); 
            }

        }    
    
  });
}