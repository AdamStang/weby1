﻿function loadXMLDoc() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      getN(this);
    }
  };
  xmlhttp.open("GET", "meniny.xml", true);
  xmlhttp.send();
}

function loadXMLDoc2() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      getD(this);
    }
  };
  xmlhttp.open("GET", "meniny.xml", true);
  xmlhttp.send();
}



function getN(xml) {

  var x, y, i, xmlDoc, txt;
  xmlDoc = xml.responseXML;
  txt = "";
  x = xmlDoc.getElementsByTagName("den");
  y = xmlDoc.getElementsByTagName("SKd");
  x2 = xmlDoc.getElementsByTagName("zaznam");
  y2 = xmlDoc.getElementsByTagName("CZ");
  y3 = xmlDoc.getElementsByTagName("HU");

 var u = new Date(date.value);
 var month = u.getMonth();
 var day = u.getDate();
//document.write(day);
 day = day ; // bez -1 to davo o jedna vacsie 
 month = month +1 ;// bez +1 to davo o jedno mensie
 var m = month.toString();
 var d = day.toString();
  
 var firstTwo;  
 var secondTwo;  
 if(day <= 9){
	secondTwo = 0 + d;
 }else{
	secondTwo = d;
 }
 
 //document.write(secondTwo);
 
 if(month <= 9){
	firstTwo = 0 + m;
 }else{
	firstTwo = m;
 }
  //document.write(firstTwo);
  
 var together = firstTwo + secondTwo;
 var skd = 0; // prechadza SKd
 
  for (i = 1; i< x.length; i++) {
	if(x[i].childNodes[0].nodeValue == together){
	 txt += y[skd].childNodes[0].nodeValue + "<br>";
	 //txt += y2[i].childNodes[0].nodeValue + "<br>";
	 //txt += x2[i].childNodes[0].getElementsByTagName("CZ").childNodes[0].nodeValue + "<br>";
	}
	skd += 1;
  }
  document.getElementById("vypis").innerHTML = "Meniny má: " + txt;
}


var dia = "áäčďéíľĺňóôŕšťúýÁČĎÉÍĽĹŇÓŠŤÚÝŽ";
var nodia = "aacdeillnoorstuyACDEILLNOSTUYZ";
function diaConvert(text) {
   var convertText = "";
   for(i=0; i<text.length; i++) {
      if(dia.indexOf(text.charAt(i))!=-1) {
         convertText += nodia.charAt(dia.indexOf(text.charAt(i)));
      }
      else {
         convertText += text.charAt(i);
      }
   }
   return convertText;
}


function getD(xml) {
  var x,x2,x3,x4,x5, dat,zaz,convert,convert1, i, xmlDoc, txt;
  xmlDoc = xml.responseXML;
  txt = "";
  x = xmlDoc.getElementsByTagName("SKd");
  x2 = xmlDoc.getElementsByTagName("CZ");
  x3 = xmlDoc.getElementsByTagName("HU");
  x4 = xmlDoc.getElementsByTagName("PL");
  x5 = xmlDoc.getElementsByTagName("AT");
  dat = xmlDoc.getElementsByTagName("den");
  zaz = xmlDoc.getElementsByTagName("zaznam");
  
  var y = document.getElementById('name').value;
  ////////////////document.write(y);
  y = y.toLowerCase();  // zmena zadaneho mena na male pismena  /// PeTEr -> peter
  ////////////document.write(y);
  var yy = y.charAt(0).toUpperCase() + y.slice(1) // zmena prveho pismena v zadanom mene na velke pismeno  /// peter -> Peter
  var pocitadlo = 0;  // pocitadlo pre SKd, pretoze je az v 2. zazname, nesedelo by to z dlzkou x.length
  ///////////document.write(yy);
var d = new Date();
d = d.getFullYear();

yy = diaConvert(yy);

 for (i = 1; i< x.length+1; i++) { 
		convert = diaConvert(x[pocitadlo].childNodes[0].nodeValue);  // odstranenie diakritiky z xml   // Dávid -> David
		convert1 = convert.split(", ");  //rozdeli convertovany string vsetkych mien v SKd na jednotlive mena
		
		for(j = 0; j< convert1.length ; j++) {  // prehladavanie mien v jednom SKd
		var convert2 = convert1[j].replace(",","");
		//document.write(convert2);
		//document.write(yy);
			if(yy == convert2 ){  // ak sa dane meno z SKd rovna zadanemu menu
			//document.write(convert1[j]);
			//document.write("ss");
			   var res = dat[i].childNodes[0].nodeValue.substring(0, 2); // bere datum z res a to prve dva znaky
				var res2 = dat[i].childNodes[0].nodeValue.substring(2, 4);// bere datum z res a to druhe dva znaky
				txt += res2 + ".";
				txt += res + ".";
			
			}
		}
		pocitadlo += 1;  //zvysenie pocitadla pre SKd
	 }
	 if(txt != ""){  // skontroluje ci sa naslo meno a vlozilo do premennej txt
		
		document.getElementById("vypis").innerHTML = "Dátum menín je: " + txt;
	 }else{
	 txt = "Zadali ste neplatné meno !";
	document.getElementById("vypis").innerHTML = txt;
	 }

   
}