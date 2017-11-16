var globalVariables = [];
var brandName;

$(document).ready(function() {
    ImpletementSocekt();
})

// LAN IpAddress
// var host = 'http://172.16.230.84:3030';

// WiFi ipAddress
var host = 'http://172.16.230.152:3030';

// Local IpAddress
// var host = 'http://localhost:3030';

function ImpletementSocekt() {
  var socket = io(host);
  var client = feathers()
      .configure(feathers.hooks())
      .configure(feathers.socketio(socket));
  var flowzDirectoryService = client.service('flows-dir-listing');

  flowzDirectoryService.on('created', function(flowzDirectoryService) {
      console.log('File Created:', flowzDirectoryService);
        
      // Get Config Data
      $.getJSON( "../assets/config.json", function( data ) {  
          var configData = data;
          brandName = configData[1].projectSettings[0].BrandName;
          globalVariables = configData[1].projectSettings[1].GlobalVariables;
      });

      // Variable Replacements
      setTimeout(async function(){
          $('body [id="brandName"]').html(brandName);
          $('body [id="brandLogo"]').attr('src', '../assets/brand-logo.png');
        
          // Replace all global variables
          for (var i = 0; i < globalVariables.length; i++){

              switch(globalVariables[i].variableType){
                  case 'text':
                      if(($('body [data-id="' + globalVariables[i].variableId + '"]').length > 0)){
                          $('body [data-id="' + globalVariables[i].variableId + '"]').text(globalVariables[i].variableValue);
                      } 
                      break;
                  case 'image':
                      var _varId = globalVariables[i].variableId;
                      var _varValue = globalVariables[i].variableValue;
                      if(($('body [data-id="' + _varId + '"]').length > 0)){

                          if(globalVariables[i].isImageUrl == true){
                              $('body [data-id="' + _varId + '"]').children('img').attr('src', _varValue);
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
                                  $('body [data-id="' + _varId + '"]').children('img').attr('src', res);
                                  return true;
                                }
                              });
                          }
                        
                      } 
                      break;
                  case 'hyperlink':
                      if(($('body [data-id="' + globalVariables[i].variableId + '"]').length > 0)){
                          $('body [data-id="' + globalVariables[i].variableId + '"]').children('a')[0].text = globalVariables[i].variableTitle;
                          $('body [data-id="' + globalVariables[i].variableId + '"]').children('a')[0].href = globalVariables[i].variableValue;
                      }
                      break; 
                  case 'html':
                      if(($('body [data-id="' + globalVariables[i].variableId + '"]').length > 0)){
                          $('body [data-id="' + globalVariables[i].variableId + '"]').html(globalVariables[i].variableValue);
                      } 
                      break;
                  default:
                      console.log('No Variables Found'); 
              }

          }
      }, 1000);
  });
}