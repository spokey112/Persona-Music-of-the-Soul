// JavaScript File

var artists=
["",
"AliciaKeys",
"J.Cole",
"Beyonce",
"ChildishGambino",
"Beyondthescene",
""];

var artistName= artists[3];

$.ajax({
    url:"https://api.soundcloud.com/tracks?q="+artistName+"&client_id=5aa8e389ba4e24b6106af5159ab3e344",
    method:"GET",
success:function(response) {
    console.log(response)
},    
});