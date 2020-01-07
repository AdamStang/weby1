
function animauto1(x) {
    x.classList.add("pohybauto1");
	x.classList.remove("stopauto1");
	
}

function animauto2(x) {
    x.classList.add("pohybauto2");
	x.classList.remove("stopauto2");
	
}

function animauto3(x) {
    x.classList.add("pohybauto3");
	x.classList.remove("stopauto3");
}	

function animelektricka1(x) {
    x.classList.add("pohybelektricka1");
	x.classList.remove("stopelektricka1");
	
}

	var a = document.getElementById("auticko1");
	var b = document.getElementById("auticko2");
	var c = document.getElementById("auticko3");
	var d = document.getElementById("elektr1");
	var y = document.getElementById("zobrazriesenie");
	var testbody = document.getElementById("body");
	var test = document.getElementById("test");


		var spravne_poradie = ["elektricka1","auto1","auto2","auto3"];  // pole so spravnym poradim
		var spravne_poradie2 = ["auto1","elektricka1","auto2","auto3"];  // pole so spravnym poradim
		var poradie = []; // pole kde sa bude zapisovat poradie kliknutych aut
		var i = 0; // pomocna premenna i
		var e=spravne_poradie.length;		
		
		function e1(){
			poradie[i] = "elektricka1";
			i++;
			clickHandler(e);
		}
		function a1(){
			poradie[i] = "auto1";
			i++;
			clickHandler(e);
		}
		function a2(){
			poradie[i] = "auto2";
			i++;
			clickHandler(e);
		}
		function a3(){
			poradie[i] = "auto3";
			i++;
			clickHandler(e);
		}

		
		function clickHandler(e){ 
			if(i == e){
				if (JSON.stringify(poradie) === JSON.stringify(spravne_poradie)) {
				document.getElementById("test").innerHTML = "Správne";
				testbody.classList.add("spravnebody");
				test.classList.add("testok");
				}
				
				else if(JSON.stringify(poradie) === JSON.stringify(spravne_poradie2)) {
				document.getElementById("test").innerHTML = "Správne";
				testbody.classList.add("spravnebody");
				test.classList.add("testok");
				}
				
				
				else{
					document.getElementById("test").innerHTML = "Nesprávne";
					testbody.classList.add("nespravnebody");
					test.classList.add("testzle");
				}
				i = 0;
			}
		}
		
		var element1 = document.getElementById('elektricka1'); // grab a reference to your element
		element1.addEventListener('click', e1); // event listener pre 1. auto
		
		var element2 = document.getElementById('auto1'); // grab a reference to your element
		element2.addEventListener('click', a1); // event listener pre 2. auto
		
		var element2 = document.getElementById('auto2'); // grab a reference to your element
		element2.addEventListener('click', a2); // event listener pre 2. auto
		
		var element2 = document.getElementById('auto3'); // grab a reference to your element
		element2.addEventListener('click', a3); // event listener pre 2. auto
	
	function riesenie() {
			if (y.classList== ("nezobrazriesenie zobrazriesenie")) {
				y.classList.remove("zobrazriesenie");
			} else {
				y.classList.add("zobrazriesenie");
			}
	}
	
	function reset() {
			a.classList.remove("pohybauto1");
			b.classList.remove("pohybauto2");
			c.classList.remove("pohybauto3");
			d.classList.remove("pohybelektricka1");
			a.classList.add("stopauto1");
			b.classList.add("stopauto2");
			c.classList.add("stopauto3");
			d.classList.add("stopelektricka1");
			test.classList.remove("spravne");
			$("#test").empty();
			testbody.classList.remove("nespravnebody")
			testbody.classList.remove("spravnebody")
			test.classList.remove("testok");
			test.classList.remove("testzle");
	}
	
	
	function sleep(ms) {
		  return new Promise(resolve => setTimeout(resolve, ms));
		}
			
		function demo() {
			reset();
			
			sleep(100).then(() => {
			d.classList.remove("stopelektricka1");
			d.classList.add("pohybelektricka1");});
			
			sleep(1500).then(() => { 
			a.classList.remove("stopauto1");
			a.classList.add("pohybauto1");});
			
			sleep(2900).then(() => { 
			b.classList.remove("stopauto2");
			b.classList.add("pohybauto2");});
			
			sleep(4300).then(() => { 
			c.classList.remove("stopauto3");
			c.classList.add("pohybauto3");});
			
			sleep(10000).then(() => { 
			reset();});

		}