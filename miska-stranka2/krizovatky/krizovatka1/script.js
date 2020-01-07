	var ba = document.getElementById("auto1")
	var bb = document.getElementById("auto2")
	var a = document.getElementById("auticko1");
	var b = document.getElementById("auticko2");
	var x = document.getElementById("zobrazriesenie");
	var testbody = document.getElementById("body");
	var test = document.getElementById("test");
	


function animauto1(x) {
	ba.classList.add("autoblik1");
    x.classList.add("pohybauto1");
	x.classList.remove("stopauto1");
	
}

function animauto2(x) {
	bb.classList.add("autoblik2");
    x.classList.add("pohybauto2");
	x.classList.remove("stopauto2");
	
	
}

		var spravne_poradie = ["auto1","auto2"];  // pole so spravnym poradim
		var poradie = []; // pole kde sa bude zapisovat poradie kliknutych aut
		var i = 0; // pomocna premenna i
		var e=spravne_poradie.length;		
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

		
		function clickHandler(e){ 
			if(i == e){
				if (JSON.stringify(poradie) === JSON.stringify(spravne_poradie)) {
				document.getElementById("test").innerHTML = "Správne";
				testbody.classList.add("spravnebody");
				test.classList.add("testok");
				
				}else{
					document.getElementById("test").innerHTML = "Nesprávne";
					testbody.classList.add("nespravnebody");
					test.classList.add("testzle");
				}
				i = 0;
			}
		}
		
		var element1 = document.getElementById('auto1'); // grab a reference to your element
		element1.addEventListener('click', a1); // event listener pre 1. auto
		
		var element2 = document.getElementById('auto2'); // grab a reference to your element
		element2.addEventListener('click', a2); // event listener pre 2. auto
	
	function riesenie() {
			if (x.classList== ("nezobrazriesenie zobrazriesenie")) {
				x.classList.remove("zobrazriesenie");
			} else {
				x.classList.add("zobrazriesenie");
			}
	}
	
	function reset() {
			a.classList.remove("pohybauto1");
			b.classList.remove("pohybauto2");
			a.classList.add("stopauto1");
			b.classList.add("stopauto2");
			ba.classList.remove("autoblik1"); 
			bb.classList.remove("autoblik2");
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
			a.classList.remove("stopauto1");
			a.classList.add("pohybauto1");
			ba.classList.add("autoblik1");});
			
			sleep(1500).then(() => { 
			b.classList.remove("stopauto2");
			b.classList.add("pohybauto2");
			bb.classList.add("autoblik2");});
			
			sleep(7000).then(() => { 
			reset();  });

		}
		
