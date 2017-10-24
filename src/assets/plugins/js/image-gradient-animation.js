var color1 = $('imageanimation').attr('color1');
var color2 = $('imageanimation').attr('color2');
var color3 = $('imageanimation').attr('color3');
var color4 = $('imageanimation').attr('color4');
var color5 = $('imageanimation').attr('color5');
var color6 = $('imageanimation').attr('color6');

 console.log("Color1",color1)
 console.log("Color2",color2)
 console.log("Color3",color3)
 console.log("Color4",color4)
 console.log("Color5",color5)
 console.log("Color6",color6)

function hex_to_RGB(hex) {
    var m = hex.match(/^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i);
    return [parseInt(m[1], 16),parseInt(m[2], 16),parseInt(m[3], 16) ]
}

var color1 = hex_to_RGB(color1) 
var color2 = hex_to_RGB(color2) 
var color3 = hex_to_RGB(color3) 
var color4 = hex_to_RGB(color4) 
var color5 = hex_to_RGB(color5) 
var color6 = hex_to_RGB(color6) 

 var colors = new Array(
  color1,
  color2,
  color3,
  color4,
  color5,
  color6);
 console.log(colors)

var step = 0;
//color table indices for: 
// current color left
// next color left
// current color right
// next color right
var colorIndices = [0,1,2,3];

//transition speed
var gradientSpeed = 0.002;

function updateGradient()
{
  
  if ( $===undefined ) return;
  
var c0_0 = colors[colorIndices[0]];
var c0_1 = colors[colorIndices[1]];
var c1_0 = colors[colorIndices[2]];
var c1_1 = colors[colorIndices[3]];

var istep = 1 - step;
var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
var color1 = "rgb("+r1+","+g1+","+b1+")";

var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
var color2 = "rgb("+r2+","+g2+","+b2+")";

 $('#gradient').css({
   background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
    background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});
  
  step += gradientSpeed;
  if ( step >= 1 )
  {
    step %= 1;
    colorIndices[0] = colorIndices[1];
    colorIndices[2] = colorIndices[3];
    
    //pick two new target color indices
    //do not pick the same as the current one
    colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    
  }
}

setInterval(updateGradient,10);