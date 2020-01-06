
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
    x.classList.add("pohybauto3");
	x.classList.remove("stopauto3");
	
}

function animauto5(x) {
    x.classList.add("pohybauto4");
	x.classList.remove("stopauto4");
	
}

function animelektricka1(x) {
    x.classList.add("pohybelektricka1");
	x.classList.remove("stopelektricka1");
	
}
function animelektricka2(x) {
    x.classList.add("pohybelektricka2");
	x.classList.remove("stopelektricka2");
	
}

var spravne_poradie = ["elektricka1","auto1","auto2","auto3"];  // pole so spravnym poradim
		var spravne_poradie2 = ["auto1","elektricka1","auto2","auto3"];  // pole so spravnym poradim
		
		var poradie = []; // pole kde sa bude zapisovat poradie kliknutych aut
		var i = 0;   // pomocna premenna i
				
				
				
		function clickHandler(){ // declare a function that updates the state
			poradie[i] = "elektricka1";
			i++;
			if(i == 4){  // ak boli kliknute obe auta
				if (JSON.stringify(poradie) === JSON.stringify(spravne_poradie)) {
					document.getElementById("test").innerHTML = "Spravne";
				}
				else if(JSON.stringify(poradie) === JSON.stringify(spravne_poradie2)) {
					document.getElementById("test").innerHTML = "Spravne";
				}
				else{
					document.getElementById("test").innerHTML = "Nespravne";
				}
				i=0;  //nastavenie i znova na 0
				
			}
		}
		
		function clickHandler2(){ // declare a function that updates the state
			poradie[i] = "auto2";
			i++;
			if(i == 4){  // ak boli kliknute obe auta
				if (JSON.stringify(poradie) === JSON.stringify(spravne_poradie)) {
					document.getElementById("test").innerHTML = "Spravne";
				}
				else if(JSON.stringify(poradie) === JSON.stringify(spravne_poradie2)) {
					document.getElementById("test").innerHTML = "Spravne";
				}
				else{
					document.getElementById("test").innerHTML = "Nespravne";
				}
				i=0;  //nastavenie i znova na 0
				
			}
		}
		
		function clickHandler1(){ // declare a function that updates the state
			poradie[i] = "auto1";
			i++;
			if(i == 4){  // ak boli kliknute obe auta
				if (JSON.stringify(poradie) === JSON.stringify(spravne_poradie)) {
					document.getElementById("test").innerHTML = "Spravne";
				}
				else if(JSON.stringify(poradie) === JSON.stringify(spravne_poradie2)) {
					document.getElementById("test").innerHTML = "Spravne";
				}
				else{
					document.getElementById("test").innerHTML = "Nespravne";
				}
				i=0;  //nastavenie i znova na 0
				
			}
		}
		
		function clickHandler3(){ // declare a function that updates the state
			poradie[i] = "auto3";

			i++;
			if(i == 4){  // ak boli kliknute obe auta
				if (JSON.stringify(poradie) === JSON.stringify(spravne_poradie)) {
					document.getElementById("test").innerHTML = "Spravne";
				}
				else if(JSON.stringify(poradie) === JSON.stringify(spravne_poradie2)) {
					document.getElementById("test").innerHTML = "Spravne";
				}
				else{
					document.getElementById("test").innerHTML = "Nespravne";
				}
				i=0;  //nastavenie i znova na 0
				
			}
		}
			
		var element1 = document.getElementById('elektricka1'); // grab a reference to your element
		element1.addEventListener('click', clickHandler); // event listener pre elektricku
		
		var element2 = document.getElementById('auto2'); // grab a reference to your element
		element2.addEventListener('click', clickHandler2); // event listener pre 2. auto
		
		var element3 = document.getElementById('auto1'); // grab a reference to your element
		element3.addEventListener('click', clickHandler1); // event listener pre 3. auto
		
		var element4 = document.getElementById('auto3'); // grab a reference to your element
		element4.addEventListener('click', clickHandler3); // event listener pre 1. auto
		
