var img1 = $('Slider').attr('Image1');
var img2 = $('Slider').attr('Image2');
var img3 = $('Slider').attr('Image3');
var img4 = $('Slider').attr('Image4');
var img5 = $('Slider').attr('Image5');
var temp="http://placehold.it/1146x466";
var i1=temp;
var i2=temp;
var i3=temp;
var i4=temp;
var i5=temp;

if (img1 !='') {
  i1=img1

}
if(img2 !=''){
  i2=img2
}
if(img3 !=''){
  i3=img3
}
if(img4 !=''){
  i4=img4
}
if(img5 !=''){
  i5=img5
}
var SliderHtml='<Slider style="display: block; min-height: 50px"> <style>body{padding: 20px 0;}#slider{margin: 0 auto; width: 1146px; position: relative;}#slides{background: #fff; padding: 5px; -webkit-box-shadow: 2px 2px 4px #333, inset 1px 1px 0 #ddd; -moz-box-shadow: 2px 2px 4px #333, inset 1px 1px 0 #ddd; -o-box-shadow: 2px 2px 4px #333, inset 1px 1px 0 #ddd; -ms-box-shadow: 2px 2px 4px #333, inset 1px 1px 0 #ddd; box-shadow: 2px 2px 4px #333, inset 1px 1px 0 #ddd; -webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px;}.inner{width: 500%;}.inner:after{display: block; height: 0; clear: both;}.page{float: left; width: 20%;}.page img{width: 100%; height: 466px;}#overflow{overflow: hidden;}#slider input{display: none;}#controls{position: absolute; width: 100%; top: 216px; left: 0; height: 50px;}#controls label{display: none; opacity: 0.3; cursor: pointer;}#controls label:hover{opacity: 0.8;}#slide1:checked ~ #controls label:nth-child(2), #slide2:checked ~ #controls label:nth-child(3), #slide3:checked ~ #controls label:nth-child(4), #slide4:checked ~ #controls label:nth-child(5), #slide5:checked ~ #controls label:nth-child(1){width: 0; height: 0; border-top: 20px solid transparent; border-left: 20px solid #333; border-bottom: 20px solid transparent; float: right; margin-right: -30px; display: block;}#slide1:checked ~ #controls label:nth-child(5), #slide2:checked ~ #controls label:nth-child(1), #slide3:checked ~ #controls label:nth-child(2), #slide4:checked ~ #controls label:nth-child(3), #slide5:checked ~ #controls label:nth-child(4){width: 0; height: 0; border-top: 20px solid transparent; border-bottom: 20px solid transparent; border-right: 20px solid rgb(51, 51, 51); float: left; display: block; margin-left: -27px;}#slide1:checked ~ #slides .inner{margin-left: 0;}#slide2:checked ~ #slides .inner{margin-left: -100%;}#slide3:checked ~ #slides .inner{margin-left: -200%;}#slide4:checked ~ #slides .inner{margin-left: -300%;}#slide5:checked ~ #slides .inner{margin-left: -400%;}#active{text-align: center; margin-top: 10px; text-align: center; vertical-align: middle; padding-right: 3px;}#active label{padding: 6px; width: 230px; height: 53px; background: #f1f1f1; display: table-cell; cursor: pointer; -webkit-border-radius: 2px; -moz-border-radius: 2px; border-radius: 2px; line-height: 19px; font-family: sans-serif; font-size: small;}#active label:hover{background: #c4bebe;}#slide1:checked ~ #active label:nth-child(1), #slide2:checked ~ #active label:nth-child(2), #slide3:checked ~ #active label:nth-child(3), #slide4:checked ~ #active label:nth-child(4), #slide5:checked ~ #active label:nth-child(5){background: #dddddd;}#slides .inner{-webkit-transition: all 0.8s ease-in-out; -moz-transition: all 0.8s ease-in-out; -ms-transition: all 0.8s ease-in-out; -o-transition: all 0.8s ease-in-out; transition: all 0.8s ease-in-out;}</style> <div id="slider"> <input type="radio" id="slide1" name="slider" checked/> <input type="radio" id="slide2" name="slider"/> <input type="radio" id="slide3" name="slider"/> <input type="radio" id="slide4" name="slider"/> <input type="radio" id="slide5" name="slider"/> <div id="slides"> <div id="overflow"> <div class="inner"> <div class="page"><img src="'+i1+'" alt=""/> </div><div class="page"><img src="'+i2+'" alt=""/> </div><div class="page"><img src="'+i3+'" alt=""/> </div><div class="page"><img src="'+i4+'" alt=""/> </div><div class="page"><img src="'+i5+'" alt=""/> </div></div></div></div><div id="controls"> <label for="slide1"></label> <label for="slide2"></label> <label for="slide3"></label> <label for="slide4"></label> <label for="slide5"></label> </div><div id="active"> <label for="slide1"> <p>IT\'S A WRAP</p></label> <label for="slide2"> <p>CHECK OUT OUR <br>Autumn Savings</p></label> <label for="slide3"> <p>New! <br>Light Up Pen!</p></label> <label for="slide4"> <p>INTRODUCING... <br>Sweda Outlet</p></label> <label for="slide5"> <p>Take 40% Off</p></label> </div></div></Slider>';
$('Slider').html(SliderHtml);
