jQuery(document).ready(function () {
    var map;

    var style = [
		{
		stylers: [
			{ saturation: "-100" },
			{ lightness: "20" }
		]
		},{
		featureType: "poi",
		stylers: [
			{ visibility: "off" }
		]
		},{
		featureType: "transit",
		stylers: [
			{ visibility: "off" }
		]
		},{
		featureType: "road",
		stylers: [
			{ lightness: "50" },
			{ visibility: "on" }
		]
		},{
		featureType: "landscape",
		stylers: [
			{ lightness: "50" }
		]
		}
	]

    var options = {
        zoom: 12,
        center:  new google.maps.LatLng(49.5110, 11.2780),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true
    };
    
    map = new google.maps.Map($('#map')[0], options);
    map.setOptions({
        styles: style
    });

});