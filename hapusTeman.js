// ==UserScript==
// @name     HapusTeman
// @version  2.12
// @grant    https://www.facebook.com
// ==/UserScript==
"use strict";
try {
var identitas="Woa Attack";
var teman=[
"Indah"
          ];
/*Masukan nama teman di variabel teman*/
var idNama=[],nama=[];
function buka(){ window.location.assign(arguments[0]);
}
function dTeman(){
  try {
  var x=document.getElementsByTagName("a");
  for(var i=0;i<x.length;i++){
    if(x[i].href.indexOf("friends?lst")!=-1){
      buka(x[i].href);
      break;
    }
  }
  }catch(e){
    alert("dTeman  : "+e);
  }
}
function kumpulkanInformasi(){
  try {
    var x=document.getElementsByTagName("a");
    for(var i=0;i<x.length;i++){ if(x[i].href.indexOf("fref=fr_tab")!=-1&&x[i].className==="cq"){
        idNama.push(x[i].href);
        nama.push(x[i].innerText.toUpperCase());
      }
    }
  }catch(e){
    alert("kumpulkanInformasi "+e);
  }
}
function cari_teman(){
  var x=document.getElementsByTagName("a");
  for(var i=0;i<x.length;i++){ if(x[i].href.indexOf("friends?unit_cursor=")!=-1&&x[i].innerText==="Lihat Teman Lain"){
      idNama.push(x[i].href);
      nama.push(x[i].innerText);
    }
  }
}
function proses_teman(){
  for(var i=0;i<nama.length;i++){
    buka(idNama[i]);
    break;
  }
}
function pilih_teman(){
  for(var i=0;i<teman.length;i++){
    for(var ix=0;ix<nama.length;ix++){
      if(nama.indexOf(teman[i].toUpperCase())!=-1){
        var num=nama.indexOf(teman[i].toUpperCase());
        nama.splice(num,1);
        idNama.splice(num,1);
      }
    }
  }
}
function bukaUrl(){
  var x=document.getElementsByTagName("a");
  for(var i=0;i<x.length;i++){ if(x[i].href.indexOf(arguments[0])!=-1&&x[i].innerText===arguments[1]){
      buka(x[i].href);
      break;
    }
  }
}
function hapusTeman(){
var x=document.getElementsByTagName("form");
  for(var i=0;i<x.length;i++){
    if(x[i].action.indexOf("a/removefriend.php")!=-1){
      document.forms[i].submit();
      break;
    }
  }
}

function lanjut(){
if(document.title===identitas){
  dTeman();
  } if(document.URL.indexOf("friends?lst")!=-1){
  kumpulkanInformasi();
  cari_teman();
  pilih_teman();
  proses_teman(); if(nama.length===1&&nama[0]==="Lihat Teman Lain"){
    buka(idNama[0]);
  }
  } if(document.URL.indexOf("fref=fr_tab")!=-1){
  bukaUrl("mbasic/more/?owner_id=","Lainnya");
  }
if(document.URL.indexOf("mbasic/more/?owner_id=")!=-1){ bukaUrl("removefriend.php?friend_id=","Batalkan pertemanan");
  } if(document.URL.indexOf("removefriend.php?friend_id")!=-1&&document.URL.indexOf("unref=profile_gear")!=-1){
  hapusTeman();
  } if(document.URL.indexOf("removefriend.php?friend_id")!=-1&&document.URL.indexOf("removed")!=-1){
  buka("https://free.facebook.com/aida.salsabila.589?ref_component=mfreebasic_home_header&ref_page=/wap/home.php&refid=8");
  }
}


function load(){
  if(document.title===identitas){
  dTeman();
  } if(document.URL.indexOf("friends?lst")!=-1){
  kumpulkanInformasi();
  cari_teman();
  pilih_teman();
  proses_teman(); if(nama.length===1&&nama[0]==="Lihat Teman Lain"){
    buka(idNama[0]);
  }
  } if(document.URL.indexOf("fref=fr_tab")!=-1){
  bukaUrl("mbasic/more/?owner_id=","Lainnya");
  }


/*Batas*/
if(document.URL.indexOf("friends?unit_cursor=")!=-1){
  lanjut();
}
/*end*/



  if(document.URL.indexOf("mbasic/more/?owner_id=")!=-1){ bukaUrl("removefriend.php?friend_id=","Batalkan pertemanan");
  } if(document.URL.indexOf("removefriend.php?friend_id")!=-1&&document.URL.indexOf("unref=profile_gear")!=-1){
  hapusTeman();
  } if(document.URL.indexOf("removefriend.php?friend_id")!=-1&&document.URL.indexOf("removed")!=-1){
  buka("https://free.facebook.com/aida.salsabila.589?ref_component=mfreebasic_home_header&ref_page=/wap/home.php&refid=8");
  }
}
load();
}catch(e){
  alert(e);
}

/*Created by Handrawan*/

