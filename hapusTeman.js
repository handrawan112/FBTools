// ==UserScript==
// @name     HapusTeman
// @version  2.12
// @grant    https://www.facebook.com
// ==/UserScript==
"use strict";
try {
var saveX=localStorage;

var identitas="Wawan Kaum Urbanis";
var teman=[
"Fitroh Saqinah","Andikochan","Ajie Slankers","Winzip Warrock","Tc Oji Rangers","Delia Sepptiani","Aghi Prayoga","Syndy Milasari","Juliyus","Audhika Gaindata","Fariska Mutiara","Teguh","Eka Yuliani","Fernando","Muhammad Fikriie Part","Anne Rufaidah","Been Yowes","Babang Usti","Risky Rahmatullah Ardiansyah","Awan","Vivie Destia Sefti Azas","Arman Muskhafi","Dhany Ashterjal","Cholil","Safitri Handayani","Gaurav Singh","Irfan Raditya Pratama","Muhammad Farid Zia","Muhammad Amirul Ihsan","Supra Yetno Don Juan","Ari Anggara","Hamdy Arifin","Ibnu Yahya","Muhammad Alwaali","Joi","Anugrah Sandi","Mahesa Avandie","Muhammad Adji Pasihulisan","Heru Rmdn","Dani Ardianto","Febri Agunawan","Moh Rizky Dani","Daenk Fandi","Raka Adiputra","Puspita Rini","Erza Jullian","Putra","Emeser","Woa Attack","Zafiya Dekaver","Yowes Ozii","Irna Mailiah","Lutfhi Hafizh Arrasuly","Muhammad Adam","Elvis Sonatha","Wdy AF","Ni Wayan Dewi","Imam Habibie","Aldo Ferdiansyah","Dandi Arbani","Vina Mafase","Audina Zee","Rhomad","Ridwan ArRosyid","Ryan","Agung Esiders","Azhis Saputra","Diki Maulana","Rifky Ahmad Mudafi","M Rifqi","Haidar Syafii Munandar","Ayu Kiting","Alwi Yahya","Marissa","Lily","Liza Anwar","William Smith Suparjo","Ajo Zeylamath Vanjofin","Ipang O.R","indah","Arizandro Gustavo","Syahril Romdoni","Wely Setiawan","Ardiansyah Junior","Syeful Anam","Irsyad ArRosyid","Irma Septiani","Yayang Herera","Ardian Nugroho","Ayu Kiting","Fiqih Sofyan","Lukman Hakim Sadega","Ferdy Yansah","Jamilia Aini Qilby","Bang April","Eno Fauziah","Adit","Supri Yadi","Apriliani Indah","Yeyen Lestari","RizalAmadi","Zull Panjull Atmhosfer Blues","Vhyian","Wijaya Halim","Yuda Pratama","Irma Namira"
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
    for(var i=0;i<x.length;i++){ if(x[i].href.indexOf("fref=fr_tab")!=-1){
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
      break;
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
if(document.URL.indexOf("friends?unit_cursor=")!=-1){
  kumpulkanInformasi();
  cari_teman();
  pilih_teman();
  proses_teman(); 
if(nama.length===1&&nama[0]==="Lihat Teman Lain"){
  if(saveX.getItem("funit")===null){
    saveX.setItem("funit",0);
    saveX.setItem("furl","");
  }else{
var y=Number(saveX.getItem("funit"));
var yx=saveX.getItem("furl");
    saveX.setItem("funit",y+=1);
    saveX.setItem("furl",yx+="<>"+idNama[0]);
  }
    buka(idNama[0]);
  }
  }
 if(document.URL.indexOf("fref=fr_tab")!=-1){
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
if(saveX.getItem("fload")==="true"){
	var xy=saveX.getItem("furl").split("<>");
	if(xy.length===0){
		lanjut();
	}else{
		for(var i=0;i<xy.length;i++){
			buka(xy[i]);
	    }
    }
}else{
if(saveX.getItem("fload")===null){
  saveX.setItem("fload","false");
}
  if(document.title===identitas){
  dTeman();
  } 
if(document.URL.indexOf("friends?lst")!=-1){
  kumpulkanInformasi();
  cari_teman();
  pilih_teman();
  proses_teman(); 
if(nama.length===1&&nama[0]==="Lihat Teman Lain"){
    saveX.setItem("fload","true");
    buka(idNama[0]);
  }
 }
if(document.URL.indexOf("fref=fr_tab")!=-1){
  bukaUrl("mbasic/more/?owner_id=","Lainnya");
  }


/*Batas*/
if(document.URL.indexOf("friends?unit_cursor=")!=-1){
  lanjut();
}
/*end*/



  if(document.URL.indexOf("mbasic/more/?owner_id=")!=-1){ bukaUrl("removefriend.php?friend_id=","Batalkan pertemanan");
  } 
if(document.URL.indexOf("removefriend.php?friend_id")!=-1&&document.URL.indexOf("unref=profile_gear")!=-1){
 hapusTeman();
  } 
if(document.URL.indexOf("removefriend.php?friend_id")!=-1&&document.URL.indexOf("removed")!=-1){
  buka("https://free.facebook.com/wawan.persikmania.3?ref_component=mfreebasic_home_header&ref_page=%2Fwap%2Fhome.php&refid=8");
}
}

}
load();
}catch(e){
  alert(e);
}

/*Created by Handrawan*/

