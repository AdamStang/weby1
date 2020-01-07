
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

function animauto4(x) {
    x.classList.add("pohybauto4");
	x.classList.remove("stopauto4");
	
}

function animauto5(x) {
    x.classList.add("pohybauto5");
	x.classList.remove("stopauto5");
	
}

function animelektricka1(x) {
    x.classList.add("pohybelektricka1");
	x.classList.remove("stopelektricka1");
	
}
function animelektricka2(x) {
    x.classList.add("pohybelektricka2");
	x.classList.remove("stopelektricka2");
	
}
var spravne_poradie = ["auto33","auto11","auto22"];  // pole so spravnym poradim
		var poradie = []; // pole kde sa bude zapisovat poradie kliknutych aut
		var i = 0;   // pomocna premenna i
				
		function clickHandler(){ // declare a function that updates the state
			poradie[i] = "auto11";
			i++;
			if(i == 3){  // ak boli kliknute obe auta
				if (JSON.stringify(poradie) === JSON.stringify(spravne_poradie)) {
				document.getElementById("test").innerHTML = "Spravne";
				}else{
					document.getElementById("test").innerHTML = "Nespravne";
				}
				i=0;  //nastavenie i znova na 0
			}
		}
		
		function clickHandler2(){ // declare a function that updates the state
			poradie[i] = "auto22";
			i++;
			if(i == 3){  // ak boli kliknute obe auta
				if (JSON.stringify(poradie) === JSON.stringify(spravne_poradie)) {
				document.getElementById("test").innerHTML = "Spravne";
				}else{
					document.getElementById("test").innerHTML = "Nespravne";
				}
				i = 0;   //nastavenie i znova na 0
			}
		}
		
		function clickHandler3(){ // declare a function that updates the state
			poradie[i] = "auto33";
			i++;
			if(i == 3){  // ak boli kliknute obe auta
				if (JSON.stringify(poradie) === JSON.stringify(spravne_poradie)) {
				document.getElementById("test").innerHTML = "Spravne";
				}else{
					document.getElementById("test").innerHTML = "Nespravne";
				}
				i = 0;   //nastavenie i znova na 0
			}
		}
		
		var element1 = document.getElementById('auto11'); // grab a reference to your element
		element1.addEventListener('click', clickHandler); // event listener pre 1. auto
		
		var element2 = document.getElementById('auto22'); // grab a reference to your element
		element2.addEventListener('click', clickHandler2); // event listener pre 2. auto
				
		var element2 = document.getElementById('auto33'); // grab a reference to your element
		element2.addEventListener('click', clickHandler3); // event listener pre 2. auto
		


//DEMOOOOOOO
function sleep(ms) {
		  return new Promise(resolve => setTimeout(resolve, ms));
		}
		
		function demo() {
			var a = document.getElementById("auto1");
			var b = document.getElementById("auto2");
			var c = document.getElementById("auto3");

			animauto3(c);
			sleep(3200).then(() => { 	animauto1(a); });
			sleep(5100).then(() => { 	animauto2(b); });
		}	