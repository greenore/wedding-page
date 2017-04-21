jQuery(document).ready(function () {
    var map;
    var marker;
    var marker2;
    
    // Coordinates
    var kirche = new google.maps.LatLng(49.5221459, 11.273036);
    var stolzenroth = new google.maps.LatLng(49.7643388, 10.7950555);
    var center = new google.maps.LatLng(49.68, 11.1);
    var nuremberg = new google.maps.LatLng(49.436009, 10.9584137);
    var lauf_ad_pegnitz = new google.maps.LatLng(49.5159266, 11.2367675);

    var style = [
		{
		stylers: [
			{ saturation: "-100" },
			{ lightness: "-15" }
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
			{ lightness: "75" },
			{ visibility: "on" }
		]
		},{
		featureType: "landscape",
		stylers: [
			{ lightness: "10" }
		]
		}
	]
    
    // Change marker color
    function pinSymbol(color) {
    return {
        path: 'M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z M -2,-30 a 2,2 0 1,1 4,0 2,2 0 1,1 -4,0',
        fillColor: color,
        fillOpacity: 1,
        strokeColor: '#000',
        strokeWeight: 4,
        scale: 2,
        };
    }
    
    var options = {
        zoom: 10,
        center:  nuremberg,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true,
    };
    
    map = new google.maps.Map($('#map')[0], options);
    map.setOptions({
        styles: style
    });
    
/*    marker = new google.maps.Marker({
        position: lauf_ad_pegnitz,
        map: map,
        draggable: false,
        icon: "",
        label: {text: "Lauf a.d. Pegnitz", color: "#FF0080"}
    });*/
    
    marker2 = new google.maps.Marker({
        position: kirche,
        map: map,
        draggable: false,
        icon: pinSymbol("#FF0080"),
        animation: google.maps.Animation.BOUNCE,
        label: {text: "Lauf a.d. Pegnitz", color: "#FF0080"}
    });

});