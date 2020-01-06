
function animauto() {
	var auto1 = document.getElementById("auto1").classList.add("pohybauto1");
	var auto2 = document.getElementById("auto2").classList.add("pohybauto2");	
}

function animpajac() {
	var pajac11 = document.getElementById("pajac11").classList.add("apajac1");
	var pajac21 = document.getElementById("pajac21").classList.add("apajac2");
	var pajac11 = document.getElementById("pajac12").classList.add("apajac1");
	var pajac21 = document.getElementById("pajac22").classList.add("apajac2");
	var stopsemafor11 = document.getElementById("stopsemafor11").classList.add("asemafor1");
	var stopsemafor21 = document.getElementById("stopsemafor21").classList.add("asemafor2");
	var stopsemafor12 = document.getElementById("stopsemafor12").classList.add("asemafor1");
	var stopsemafor22 = document.getElementById("stopsemafor22").classList.add("asemafor2");
	
}


var spravne_poradie = ["pajac11","auto1"];  // pole so spravnym poradim
		var spravne_poradie2 = ["pajac11","auto2"];  // pole so spravnym poradim
		var spravne_poradie3 = ["pajac12","auto1"];  // pole so spravnym poradim
		var spravne_poradie4 = ["pajac12","auto2"];  // pole so spravnym poradim
		var spravne_poradie5 = ["pajac21","auto1"];  // pole so spravnym poradim
		var spravne_poradie6 = ["pajac21","auto2"];  // pole so spravnym poradim
		var spravne_poradie7 = ["pajac22","auto1"];  // pole so spravnym poradim
		var spravne_poradie8 = ["pajac22","auto2"];  // pole so spravnym poradim
		
		var poradie = []; // pole kde sa bude zapisovat poradie kliknutych aut
		var i = 0;   // pomocna premenna i
				
				
				
		function clickHandler(){ // declare a function that updates the state
			poradie[i] = "pajac11";
			i++;
			if(i == 2){  // ak boli kliknute obe auta
				if (JSON.stringify(poradie) === JSON.stringify(spravne_poradie)) {
					document.getElementById("test").innerHTML = "Spravne";
				}
				else if(JSON.stringify(poradie) === JSON.stringify(spravne_poradie2)) {
					document.getElementById("test").innerHTML = "Spravne";
				}else if(JSON.stringify(poradie) === JSON.stringify(spravne_poradie3)) {
					document.getElementById("test").innerHTML = "Spravne";
				}else if(JSON.stringify(poradie) === JSON.stringify(spravne_poradie4)) {
					document.getElementById("test").innerHTML = "Spravne";
				}else if(JSON.stringify(poradie) === JSON.stringify(spravne_poradie5)) {
					document.getElementById("test").innerHTML = "Spravne";
				}else if(JSON.stringify(poradie) === JSON.stringify(spravne_poradie6)) {
					document.getElementById("test").innerHTML = "Spravne";
				}else if(JSON.stringify(poradie) === JSON.stringify(spravne_poradie7)) {
					document.getElementById("test").innerHTML = "Spravne";
				}else if(JSON.stringify(poradie) === JSON.stringify(spravne_poradie8)) {
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
			if(i == 2){  // ak boli kliknute obe auta
				if (JSON.stringify(poradie) === JSON.stringify(spravne_poradie)) {
					document.getElementById("test").innerHTML = "Spravne";
				}
				else if(JSON.stringify(poradie) === JSON.stringify(spravne_poradie2)) {
					document.getElementById("test").innerHTML = "Spravne";
				}else if(JSON.stringify(poradie) === JSON.stringify(spravne_poradie3)) {
					document.getElementById("test").innerHTML = "Spravne";
				}else if(JSON.stringify(poradie) === JSON.stringify(spravne_poradie4)) {
					document.getElementById("test").innerHTML = "Spravne";
				}else if(JSON.stringify(poradie) === JSON.stringify(spravne_poradie5)) {
					document.getElementById("test").innerHTML = "Spravne";
				}else if(JSON.stringify(poradie) === JSON.stringify(spravne_poradie6)) {
					document.getElementById("test").innerHTML = "Spravne";
				}else if(JSON.stringify(poradie) === JSON.stringify(spravne_poradie7)) {
					document.getElementById("test").innerHTML = "Spravne";
				}else if(JSON.stringify(poradie) === JSON.stringify(spravne_poradie8)) {
					document.getElementById("test").innerHTML = "Spravne";
				}
				else{
					document.getElementById("test").innerHTML = "Nespravne";
				}
				i=0;  //nastavenie i znova na 0
				
			}
		}
		
		function clickHandler2(){ // declare a function that updates the state
			poradie[i] = "pajac12";
			i++;
			if(i == 2){  // ak boli kliknute obe auta
				if (JSON.stringify(poradie) === JSON.stringify(spravne_poradie)) {
					document.getElementById("test").innerHTML = "Spravne";
				}
				else if(JSON.stringify(poradie) === JSON.stringify(spravne_poradie2)) {
					document.getElementById("test").innerHTML = "Spravne";
				}else if(JSON.stringify(poradie) === JSON.stringify(spravne_poradie3)) {
					document.getElementById("test").innerHTML = "Spravne";
				}else if(JSON.stringify(poradie) === JSON.stringify(spravne_poradie4)) {
					document.getElementById("test").innerHTML = "Spravne";
				}else if(JSON.stringify(poradie) === JSON.stringify(spravne_poradie5)) {
					document.getElementById("test").innerHTML = "Spravne";
				}else if(JSON.stringify(poradie) === JSON.stringify(spravne_poradie6)) {
					document.getElementById("test").innerHTML = "Spravne";
				}else if(JSON.stringify(poradie) === JSON.stringify(spravne_poradie7)) {
					document.getElementById("test").innerHTML = "Spravne";
				}else if(JSON.stringify(poradie) === JSON.stringify(spravne_poradie8)) {
					document.getElementById("test").innerHTML = "Spravne";
				}
				else{
					document.getElementById("test").innerHTML = "Nespravne";
				}
				i=0;  //nastavenie i znova na 0
				
			}
		}
		
		function clickHandler3(){ // declare a function that updates the state
			poradie[i] = "auto2";

			i++;
			if(i == 2){  // ak boli kliknute obe auta
				if (JSON.stringify(poradie) === JSON.stringify(spravne_poradie)) {
					document.getElementById("test").innerHTML = "Spravne";
				}
				else if(JSON.stringify(poradie) === JSON.stringify(spravne_poradie2)) {
					document.getElementById("test").innerHTML = "Spravne";
				}else if(JSON.stringify(poradie) === JSON.stringify(spravne_poradie3)) {
					document.getElementById("test").innerHTML = "Spravne";
				}else if(JSON.stringify(poradie) === JSON.stringify(spravne_poradie4)) {
					document.getElementById("test").innerHTML = "Spravne";
				}else if(JSON.stringify(poradie) === JSON.stringify(spravne_poradie5)) {
					document.getElementById("test").innerHTML = "Spravne";
				}else if(JSON.stringify(poradie) === JSON.stringify(spravne_poradie6)) {
					document.getElementById("test").innerHTML = "Spravne";
				}else if(JSON.stringify(poradie) === JSON.stringify(spravne_poradie7)) {
					document.getElementById("test").innerHTML = "Spravne";
				}else if(JSON.stringify(poradie) === JSON.stringify(spravne_poradie8)) {
					document.getElementById("test").innerHTML = "Spravne";
				}
				else{
					document.getElementById("test").innerHTML = "Nespravne";
				}
				i=0;  //nastavenie i znova na 0
				
			}
		}
		function clickHandler4(){ // declare a function that updates the state
			poradie[i] = "pajac21";

			i++;
			if(i == 2){  // ak boli kliknute obe auta
				if (JSON.stringify(poradie) === JSON.stringify(spravne_poradie)) {
					document.getElementById("test").innerHTML = "Spravne";
				}
				else if(JSON.stringify(poradie) === JSON.stringify(spravne_poradie2)) {
					document.getElementById("test").innerHTML = "Spravne";
				}else if(JSON.stringify(poradie) === JSON.stringify(spravne_poradie3)) {
					document.getElementById("test").innerHTML = "Spravne";
				}else if(JSON.stringify(poradie) === JSON.stringify(spravne_poradie4)) {
					document.getElementById("test").innerHTML = "Spravne";
				}else if(JSON.stringify(poradie) === JSON.stringify(spravne_poradie5)) {
					document.getElementById("test").innerHTML = "Spravne";
				}else if(JSON.stringify(poradie) === JSON.stringify(spravne_poradie6)) {
					document.getElementById("test").innerHTML = "Spravne";
				}else if(JSON.stringify(poradie) === JSON.stringify(spravne_poradie7)) {
					document.getElementById("test").innerHTML = "Spravne";
				}else if(JSON.stringify(poradie) === JSON.stringify(spravne_poradie8)) {
					document.getElementById("test").innerHTML = "Spravne";
				}
				else{
					document.getElementById("test").innerHTML = "Nespravne";
				}
				i=0;  //nastavenie i znova na 0
				
			}
		}
		function clickHandler5(){ // declare a function that updates the state
			poradie[i] = "pajac22";

			i++;
			if(i == 2){  // ak boli kliknute obe auta
				if (JSON.stringify(poradie) === JSON.stringify(spravne_poradie)) {
					document.getElementById("test").innerHTML = "Spravne";
				}
				else if(JSON.stringify(poradie) === JSON.stringify(spravne_poradie2)) {
					document.getElementById("test").innerHTML = "Spravne";
				}else if(JSON.stringify(poradie) === JSON.stringify(spravne_poradie3)) {
					document.getElementById("test").innerHTML = "Spravne";
				}else if(JSON.stringify(poradie) === JSON.stringify(spravne_poradie4)) {
					document.getElementById("test").innerHTML = "Spravne";
				}else if(JSON.stringify(poradie) === JSON.stringify(spravne_poradie5)) {
					document.getElementById("test").innerHTML = "Spravne";
				}else if(JSON.stringify(poradie) === JSON.stringify(spravne_poradie6)) {
					document.getElementById("test").innerHTML = "Spravne";
				}else if(JSON.stringify(poradie) === JSON.stringify(spravne_poradie7)) {
					document.getElementById("test").innerHTML = "Spravne";
				}else if(JSON.stringify(poradie) === JSON.stringify(spravne_poradie8)) {
					document.getElementById("test").innerHTML = "Spravne";
				}
				else{
					document.getElementById("test").innerHTML = "Nespravne";
				}
				i=0;  //nastavenie i znova na 0
				
			}
		}		
		var element1 = document.getElementById('pajac11'); // grab a reference to your element
		element1.addEventListener('click', clickHandler); // event listener pre elektricku
		
		var element2 = document.getElementById('auto1'); // grab a reference to your element
		element2.addEventListener('click', clickHandler1); // event listener pre 2. auto
		
		var element3 = document.getElementById('pajac12'); // grab a reference to your element
		element3.addEventListener('click', clickHandler2); // event listener pre 3. auto
		
		var element4 = document.getElementById('auto2'); // grab a reference to your element
		element4.addEventListener('click', clickHandler3); // event listener pre 1. auto
		
		var element5 = document.getElementById('pajac21'); // grab a reference to your element
		element5.addEventListener('click', clickHandler4); // event listener pre elektricku
		
		var element6 = document.getElementById('pajac22'); // grab a reference to your element
		element6.addEventListener('click', clickHandler5); // event listener pre 2. auto
		