
function animauto1(x) {
	var auto2 = document.getElementById("auto1").classList.add("autoblik1");
    x.classList.add("pohybauto1");
	x.classList.remove("stopauto1");
	
}

function animauto2(x) {
	var auto2 = document.getElementById("auto2").classList.add("autoblik2");
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
    x.classList.add("pohyelektricka1");
	x.classList.remove("stopelektricka1");
	
}
function animelektricka2(x) {
    x.classList.add("pohyelektricka2");
	x.classList.remove("stopelektricka2");
	
}

	
		var spravne_poradie = ["auto1","auto2"];  // pole so spravnym poradim
		var poradie = []; // pole kde sa bude zapisovat poradie kliknutych aut
		var i = 0;   // pomocna premenna i
				
		function clickHandler(){ // declare a function that updates the state
			poradie[i] = "auto1";
			i++;
			if(i == 2){  // ak boli kliknute obe auta
				if (JSON.stringify(poradie) === JSON.stringify(spravne_poradie)) {
				document.getElementById("test").innerHTML = "Spravne";
				}else{
					document.getElementById("test").innerHTML = "Nespravne";
				}
				i=0;  //nastavenie i znova na 0
			}
		}
		
		function clickHandler1(){ // declare a function that updates the state
			//elementIsClicked = true;
			poradie[i] = "auto2";
			i++;
			if(i == 2){  // ak boli kliknute obe auta
				if (JSON.stringify(poradie) === JSON.stringify(spravne_poradie)) {
				document.getElementById("test").innerHTML = "Spravne";
				}else{
					document.getElementById("test").innerHTML = "Nespravne";
				}
				i = 0;   //nastavenie i znova na 0
			}
		}
		
		var element1 = document.getElementById('auto1'); // grab a reference to your element
		element1.addEventListener('click', clickHandler); // event listener pre 1. auto
		
		var element2 = document.getElementById('auto2'); // grab a reference to your element
		element2.addEventListener('click', clickHandler1); // event listener pre 2. auto
		
	
	
	
	
	
	//DEMOOOOOOOO
	
	function sleep(ms) {
		  return new Promise(resolve => setTimeout(resolve, ms));
		}
		
		function demo() {
			var a = document.getElementById("auticko1");
			var b = document.getElementById("auticko2");
			animauto1(a);
			sleep(1400).then(() => { 	animauto2(b); });
		
		}	