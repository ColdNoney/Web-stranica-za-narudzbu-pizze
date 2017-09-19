
	//funkcije za pokazivanje tablica
	
	$('#showTable').click(function() {        
         $('#tablicaL').show();
		 $('#tablicaD').show();
		 $('#brojPizza').show();
		 $('#potvrda').show();
		 $('#myForm').show();
		 $('.buttons').hide();
    });
	
	$('#showTable2').click(function() {        
         $('#tablica3').show();
		 $('#brojPizza').show();
		 $('#potvrda').show();
		 $('#myForm').show();
		 $('.buttons').hide();
    });

	
	// Funkcija za izracun ukupne cijene 	
	
	var tijestoCijena = 10;
	var sastojakCijena = 0;
	var ukupnaCijena = 0;
	var broj = 1;

    function test(item){
        if(item.checked){
			ukupnaCijena = (tijestoCijena + sastojakCijena) * broj;
			sastojakCijena+= parseInt(item.dataset.cijena);
			var trenutniSastojak = parseInt(item.dataset.cijena);
			document.getElementById('cijena').innerHTML = ukupnaCijena + trenutniSastojak;
        }else{
			ukupnaCijena = (tijestoCijena + sastojakCijena) * broj;
			sastojakCijena-= parseInt(item.dataset.cijena);
			trenutniSastojak = parseInt(item.dataset.cijena);
			document.getElementById('cijena').innerHTML = ukupnaCijena - broj*trenutniSastojak;
        }
    }

	function ukupno(){

		var e = document.getElementById("odabirBroja");
		broj = e.options[e.selectedIndex].value;
		document.getElementById('cijena').innerHTML = (sastojakCijena + tijestoCijena) * broj;

	}
	ukupno();
	
	document.getElementById("odabirBroja").onchange = ukupno;
		
	
	//Rajcica sastojak oznacavanje
	
	var chk1 = $("input[type='checkbox'][id='upaliRajcica']");
	var chk2 = $("input[type='checkbox'][id='upaliRajcica2']");

	chk1.on('change', function(){
	  chk2.prop('checked',this.checked);
	});
	
	chk2.on('change', function(){
	  chk1.prop('checked',this.checked);
	});
		
	
	
	
	// funkcija za prikaz sastojaka
	
	$('.upaliNesto').change(function(){
		var imageId = $(this).attr('data-param');
		if(this.checked) {
			var image = $('#' + imageId);
			var imageSource = image.attr('data-src');
			image.removeAttr('data-src');
			image.prop('src', imageSource);
			image.show();
		} else {
			$('#' + imageId).hide();
		}
	});
	