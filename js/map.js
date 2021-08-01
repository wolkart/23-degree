// Инициализация API Yandex Maps
ymaps.ready(init);
function init(){ 
        // Создание карты.    
        var myMap = new ymaps.Map("map", {
        	center: [43.23786075, 76.96081635],
        	zoom: 14
        });
        var myPlacemark = new ymaps.Placemark([43.23786075, 76.96081635], {}, {
        	iconLayout: 'default#image',
        	iconImageHref: '../img/icons/map-mark.svg',
        	iconImageSize: [60, 60],
        	iconImageOffset: [-25, -62]
        });
        myMap.geoObjects.add(myPlacemark);
        // myMap.controls.remove('zoomControl');
        myMap.controls.remove('rulerControl');
        myMap.controls.remove('typeSelector');
        myMap.controls.remove('trafficControl');
        myMap.controls.remove('geolocationControl');
        myMap.controls.remove('fullscreenControl');
        myMap.controls.remove('searchControl');
        myMap.behaviors.disable([
        	// 'drag',
        	'scrollZoom'
        	]);
    }


    // function map(n){
    //     google.maps.Map.prototype.setCenterWithOffset= function(latlng, offsetX, offsetY) {
    //         var map = this;
    //         var ov = new google.maps.OverlayView(); 
    //         ov.onAdd = function() { 
    //             var proj = this.getProjection(); 
    //             var aPoint = proj.fromLatLngToContainerPixel(latlng);
    //             aPoint.x = aPoint.x+offsetX;
    //             aPoint.y = aPoint.y+offsetY;
    //             map.panTo(proj.fromContainerPixelToLatLng(aPoint));
    //             //map.setCenter(proj.fromContainerPixelToLatLng(aPoint));
    //         }
    //         ov.draw = function() {};
    //         ov.setMap(this);
    //     };
    //     var markers = new Array();
    //     var infowindow = new google.maps.InfoWindow({
    //         //pixelOffset: new google.maps.Size(-230,250)
    //     });
    //     var locations = [
    //         [new google.maps.LatLng(55.75399400, 37.62209300)],
    //         [new google.maps.LatLng(55.75399400, 37.62209300)],
    //         [new google.maps.LatLng(55.75399400, 37.62209300)],
    //         [new google.maps.LatLng(55.75399400, 37.62209300)],
    //     ]
    //     var options = {
    //         zoom: 10,
    //         panControl:false,
    //         mapTypeControl:false,
    //         center: locations[0][0],
    //         styles:[{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#e0efef"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"hue":"#1900ff"},{"color":"#c0e8e8"}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":100},{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"visibility":"on"},{"lightness":700}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#7dcdcd"}]}],
    //         scrollwheel:false,
    //         mapTypeId: google.maps.MapTypeId.ROADMAP
    //     }; 
    //     var map = new google.maps.Map(document.getElementById('map'), options);
    //     var icon={
    //         url:'img/icons/map.svg',
    //         scaledSize: new google.maps.Size(18, 20),
    //         anchor: new google.maps.Point(9, 10)
    //     }
    //     for (var i = 0; i < locations.length; i++) {
    //         var marker = new google.maps.Marker({
    //             icon:icon,
    //             position: locations[i][0],
    //             map: map,
    //         });
    //         google.maps.event.addListener(marker, 'click', (function (marker, i) {
    //             return function () {
    //                 for (var m = 0; m < markers.length; m++) {
    //                     markers[m].setIcon(icon);
    //                 }
    //                     var cnt=i+1;
    //                 infowindow.setContent($('.contacts-map-item_'+cnt).html());
    //                 infowindow.open(map, marker);
    //                 marker.setIcon(icon);
    //                 map.setCenterWithOffset(marker.getPosition(),0,0);
    //                 setTimeout(function(){
    //                     baloonstyle();
    //                 },10);
    //             }
    //         })(marker, i));
    //         markers.push(marker);
    //     }

    //     if(n){
    //             var nc=n-1;
    //         setTimeout(function(){
    //             google.maps.event.trigger(markers[nc], 'click');
    //         },500);
    //     }
    // }
    // function baloonstyle(){
    //     $('.gm-style-iw').parent().addClass('baloon');
    //     $('.gm-style-iw').prev().addClass('baloon-style');
    //     $('.gm-style-iw').next().addClass('baloon-close');
    //     $('.gm-style-iw').addClass('baloon-content');
    // }
    // if($("#map").length>0){
    //     map(1);
    // }