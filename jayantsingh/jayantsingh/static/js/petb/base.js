$(document).ready( function(){
	function hideOverlay() {
		$('#overlay').css("display", "none");
		$('#overlay').fadeOut(1000);
	}

	function showOverlay() {
		$('#overlay').css("display", "block");
		$("#overlay").fadeIn(200);
	}

	// drawer code start

	function closeDrawer() {
		$('#drawer').animate({ 'left': '-300px'});
		$('#toggle').removeAttr('data-active');
		hideOverlay();
	}

	$('#toggle').click( function(){
		if ($('#toggle').data('active')) {
			closeDrawer();
		} else {
			showOverlay();
			$('#drawer').animate({ 'left': '0px'});
			$('#toggle').attr('data-active', 'active');
		}
		
	});

	$('#close').click( function(){
		closeDrawer();
	});

	console.log(data)

	// drawer code end

	$('#overlay').click( function(){
		closeDrawer();
	});

	$.each(data, function(key, value) {
	    $('.' + key).click( function(){
	    	populate(key, value);
	    	popup(true);
	    });
	})

	$('.popup').click(function() {
		popup(false);
	})
	function popup(property){
		if (property) {
			$(".popup").fadeIn(200);
			$(".popup").css("z-index", "3");
		}
		else {
			$(".popup").fadeOut(200);
			$(".popup").css("z-index", "-1");
		};
	};
	var populate = function(key, value){
		console.log(value);
		$("#symbol").html(key.charAt(0).toUpperCase() + key.slice(1));
		$("#at-mass").html(value.atmass);
		$("#at-no").html(value.atno);
		$("#group").html(value.group);
		$("#period").html(value.period);
		$("#block").html(value.block);
		$("#at-config").html(value.atconfig);
		$("#boiling-p").html(value.boiling);
		$("#melting-p").html(value.melting);
		$("#density").html(value.density);
		$("#rel-atm").html(value.relmass);
		$("#isotopes").html(value.isotopes);
		$("#discovery").html(value.discovery);
		$("#discoverer").html(value.discoverer);
	};
});


var data = {
	"h": {
		"atno": "1",
		"atmass": "",
		"atconfig": "",
		"discovered": "",
		"discoverer": "",
		"electronegativity": "",
	},
	"he": {
		"atno": "2",
		"atmass": "",
		"atconfig": "",
		"discovered": "",
		"discoverer": "",
		"electronegativity": "",
		},
	"li": {
		"atno": "3",
		"atmass": "",
		"atconfig": "",
		"discovered": "",
		"discoverer": "",
		"electronegativity": "",},
	"be": {
		"atno": "4",
		"atmass": "",
		"atconfig": "",
		"discovered": "",
		"discoverer": "",
		"electronegativity": "",
		},
	"bo": {
		"atno": "5",
		"atmass": "",
		"atconfig": "",
		"discovered": "",
		"discoverer": "",
		"electronegativity": "",
		},
	"c": {
		"atno": "6",
		"atmass": "",
		"atconfig": "",
		"discovered": "",
		"discoverer": "",
		"electronegativity": "",
		},
	"n": {
		"atno": "7",
		"atmass": "",
		"atconfig": "",
		"discovered": "",
		"discoverer": "",
		"electronegativity": "",
		},
	"o": {
		"atno": "8",
		"atmass": "",
		"atconfig": "",
		"discovered": "",
		"discoverer": "",
		"electronegativity": "",
		},
	"f": {
		"atno": "9",
		"atmass": "",
		"atconfig": "",
		"discovered": "1886",
		"discoverer": "Henri Moissan",
		"electronegativity": "",
		},
	"ne": {
		"atno": "10",
		"atmass": "",
		"atconfig": "",
		"discovered": "",
		"discoverer": "",
		"electronegativity": "",
	},
	"na": {
		"atno": "11",
		"atmass": "",
		"atconfig": "",
		"discovered": "",
		"discoverer": "",
		"electronegativity": "",
	},
	"mg": {
		"atno": "12",
		"atmass": "",
		"atconfig": "",
		"discovered": "",
		"discoverer": "",
		"electronegativity": "",
	},
	"al": {
		"atno": "13",
		"atmass": "",
		"atconfig": "",
		"discovered": "",
		"discoverer": "",
		"electronegativity": "",
	},
	"si": {
		"atno": "14",
		"atmass": "",
		"atconfig": "",
		"discovered": "",
		"discoverer": "",
		"electronegativity": "",
	},
	"p": {
		"atno": "15",
		"atmass": "",
		"atconfig": "",
		"discovered": "",
		"discoverer": "",
		"electronegativity": "",
	},
	"s": {
		"atno": "16",
		"atmass": "",
		"atconfig": "",
		"discovered": "",
		"discoverer": "",
		"electronegativity": "",
	},
	"cl": {
		"atno": "17",
		"atmass": "",
		"atconfig": "",
		"discovered": "",
		"discoverer": "",
		"electronegativity": "",
	},
	"ar": {
		"atno": "18",
		"atmass": "",
		"atconfig": "",
		"discovered": "",
		"discoverer": "",
		"electronegativity": "",
	},
	"k": {
		"atno": "19",
		"atmass": "",
		"atconfig": "",
		"discovered": "",
		"discoverer": "",
		"electronegativity": "",
	},
	"ca": {
		"atno": "20",
		"atmass": "",
		"atconfig": "",
		"discovered": "",
		"discoverer": "",
		"electronegativity": "",
	},
	"sc": {
		"atno": "21",
		"atmass": "",
		"atconfig": "",
		"discovered": "",
		"discoverer": "",
		"electronegativity": "",
	},
	"ti": {
		"atno": "22",
		"atmass": "",
		"atconfig": "",
		"discovered": "",
		"discoverer": "",
		"electronegativity": "",
	},
	"v": {
		"atno": "23",
		"atmass": "",
		"atconfig": "",
		"discovered": "",
		"discoverer": "",
		"electronegativity": "",
	},
	"cr": {
		"atno": "24",
		"atmass": "",
		"atconfig": "",
		"discovered": "",
		"discoverer": "",
		"electronegativity": "",
	},
	"mn": {
		"atno": "25",
		"atmass": "",
		"atconfig": "",
		"discovered": "",
		"discoverer": "",
		"electronegativity": "",
	},
	"fe": {
		"atno": "26",
		"atmass": "",
		"atconfig": "",
		"discovered": "",
		"discoverer": "",
		"electronegativity": "",
	},
	"co": {
		"atno": "27",
		"atmass": "",
		"atconfig": "",
		"discovered": "",
		"discoverer": "",
		"electronegativity": "",
	},
	"ni": {
		"atno": "28",
		"atmass": "",
		"atconfig": "",
		"discovered": "",
		"discoverer": "",
		"electronegativity": "",
	},
	"cu": {
		"atno": "29",
		"atmass": "",
		"atconfig": "",
		"discovered": "",
		"discoverer": "",
		"electronegativity": "",
	},
	"zn": {
		"atno": "30",
		"atmass": "",
		"atconfig": "",
		"discovered": "",
		"discoverer": "",
		"electronegativity": "",
	},
	"ga": {
		"atno": "31",
		"atmass": "",
		"atconfig": "",
		"discovered": "",
		"discoverer": "",
		"electronegativity": "",
	},
	"ge": {
		"atno": "32",
		"atmass": "",
		"atconfig": "",
		"discovered": "",
		"discoverer": "",
		"electronegativity": "",
	},
	"as": {
		"atno": "33",
		"atmass": "",
		"atconfig": "",
		"discovered": "",
		"discoverer": "",
		"electronegativity": "",
	},
	"se": {
		"atno": "34",
		"atmass": "",
		"atconfig": "",
		"discovered": "",
		"discoverer": "",
		"electronegativity": "",
	},
}