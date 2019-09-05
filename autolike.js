//==UserScript==
// @name AutoLike.js
// @version 1.2
// @grant https://free.facebook.com
// ==/UserScript==

var sv=[],vs=[];
function cariTombolSuka(){
var x=document.querySelectorAll("a");
for(var i=0;i<x.length;i++){
if(x[i].href.indexOf("like.php")!=-1&&x[i].innerText==="Suka"){
sv.push(i);
}else if(x[i].href.indexOf("profile/timeline/stream/?cursor")!=-1&&x[i].innerText==="Lihat Berita Lain"){
vs.push(i);
}
}

}
cariTombolSuka();
function klikOtomatis(){
var x=document.getElementsByTagName("a");
var i=1;
if(sv.length===1){
i=0;
}else if(sv.length===0){
if(vs.length!=0){
pindahHalaman();
}
}
do{
if(i>sv.length){
pindahHalaman();
break;
}
x[sv[i]].click();
i++;
}while(true);

}
klikOtomatis();
function pindahHalaman(){
var x=document.getElementByTagName("a");
for(var i=0;i<vs.length;i++){
x[vs[i]].click();
}
}

/*Created by handrawan*/
/*The JavaScript Developer pure*/
/*This program can you run at Addons mozilla firefox Greasemonkey for android OS */
/*But program this work in mode free facebook*/







