
function animauto1(x) {
    x.classList.add("pohybauto1");
	x.classList.remove("stopauto1");
	var auto2 = document.getElementById("auto2").classList.add("pohybauto2");
	var auto2 = document.getElementById("auto2").classList.remove("stopauto2");
	
}

function animauto2(x) {
    x.classList.add("pohybauto2");
	x.classList.remove("stopauto2");
	var auto2 = document.getElementById("auto1").classList.add("pohybauto1");
	var auto2 = document.getElementById("auto1").classList.remove("stopauto1");
	
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

		var spravne_poradie = ["elektricka1","elektricka2","auto11"];  // pole so spravnym poradim
		var spravne_poradie2 = ["elektricka2","elektricka1","auto11"];  // pole so spravnym poradim
		var spravne_poradie3 = ["elektricka1","elektricka2","auto22"];  // pole so spravnym poradim
		var spravne_poradie4 = ["elektricka2","elektricka1","auto22"];  // pole so spravnym poradim
		
		var poradie = []; // pole kde sa bude zapisovat poradie kliknutych aut
		var i = 0;   // pomocna premenna i
				
				
				
		function clickHandler(){ // declare a function that updates the state
			poradie[i] = "auto11";
			i++;
			if(i == 3){  // ak boli kliknute obe auta
				if (JSON.stringify(poradie) === JSON.stringify(spravne_poradie)) {
				document.getElementById("test").innerHTML = "Spravne";
				}
				else if(JSON.stringify(poradie) === JSON.stringify(spravne_poradie2)) {
				document.getElementById("test").innerHTML = "Spravne";
				}
				else if(JSON.stringify(poradie) === JSON.stringify(spravne_poradie3)) {
				document.getElementById("test").innerHTML = "Spravne";
				}
				else if(JSON.stringify(poradie) === JSON.stringify(spravne_poradie4)) {
				document.getElementById("test").innerHTML = "Spravne";
				}
				else
				{
					document.getElementById("test").innerHTML = "Nespravne";
				}
				i = 0;   //nastavenie i znova na 0
			}
		}
		
		function clickHandler2(){ // declare a function that updates the state
			poradie[i] = "auto22";
			i++;
			if(i == 3){  // ak boli kliknute obe auta
				if (JSON.stringify(poradie) === JSON.stringify(spravne_poradie)) {
				document.getElementById("test").innerHTML = "Spravne";
				}
				else if(JSON.stringify(poradie) === JSON.stringify(spravne_poradie2)) {
				document.getElementById("test").innerHTML = "Spravne";
				}
				else if(JSON.stringify(poradie) === JSON.stringify(spravne_poradie3)) {
				document.getElementById("test").innerHTML = "Spravne";
				}
				else if(JSON.stringify(poradie) === JSON.stringify(spravne_poradie4)) {
				document.getElementById("test").innerHTML = "Spravne";
				}
				else
				{
					document.getElementById("test").innerHTML = "Nespravne";
				}
				i = 0;   //nastavenie i znova na 0
			}
		}
		
		function clickHandler3(){ // declare a function that updates the state
			poradie[i] = "elektricka1";
			i++;
			if(i == 3){  // ak boli kliknute obe auta
				if (JSON.stringify(poradie) === JSON.stringify(spravne_poradie)) {
				document.getElementById("test").innerHTML = "Spravne";
				}
				else if(JSON.stringify(poradie) === JSON.stringify(spravne_poradie2)) {
				document.getElementById("test").innerHTML = "Spravne";
				}
				else if(JSON.stringify(poradie) === JSON.stringify(spravne_poradie3)) {
				document.getElementById("test").innerHTML = "Spravne";
				}
				else if(JSON.stringify(poradie) === JSON.stringify(spravne_poradie4)) {
				document.getElementById("test").innerHTML = "Spravne";
				}
				else
				{
					document.getElementById("test").innerHTML = "Nespravne";
				}
				i = 0;   //nastavenie i znova na 0
			}
		}
		
		function clickHandler4(){ // declare a function that updates the state
			poradie[i] = "elektricka2";

			i++;
			if(i == 3){  // ak boli kliknute obe auta
				if (JSON.stringify(poradie) === JSON.stringify(spravne_poradie)) {
				document.getElementById("test").innerHTML = "Spravne";
				}
				else if(JSON.stringify(poradie) === JSON.stringify(spravne_poradie2)) {
				document.getElementById("test").innerHTML = "Spravne";
				}
				else if(JSON.stringify(poradie) === JSON.stringify(spravne_poradie3)) {
				document.getElementById("test").innerHTML = "Spravne";
				}
				else if(JSON.stringify(poradie) === JSON.stringify(spravne_poradie4)) {
				document.getElementById("test").innerHTML = "Spravne";
				}
				else
				{
					document.getElementById("test").innerHTML = "Nespravne";
				}
				i = 0;   //nastavenie i znova na 0
			}
		}
			
		var element1 = document.getElementById('auto11'); // grab a reference to your element
		element1.addEventListener('click', clickHandler); // event listener pre elektricku
		
		var element2 = document.getElementById('auto22'); // grab a reference to your element
		element2.addEventListener('click', clickHandler2); // event listener pre 2. auto
		
		var element3 = document.getElementById('elektricka1'); // grab a reference to your element
		element3.addEventListener('click', clickHandler3); // event listener pre 3. auto
		
		var element4 = document.getElementById('elektricka2'); // grab a reference to your element
		element4.addEventListener('click', clickHandler4); // event listener pre 1. auto
		
