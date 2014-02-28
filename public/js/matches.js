var center_UCSD = new google.maps.LatLng(32.877491,-117.235276);

	function initialize() {
  		var latlng1 = new google.maps.LatLng(32.867779,-117.218110);
  		var latlng2 = new google.maps.LatLng(32.855234,-117.217615);
  		var mapOptions = {
	    zoom: 15,
	    center: latlng1
	  };

  		var map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
  		google.maps.event.addListener(map,'projection_changed', function () {
		    var proj = map.getProjection();
		    ltBound = proj.fromPointToLatLng(new google.maps.Point(0,100))
		    rbBound = proj.fromPointToLatLng(new google.maps.Point(100,200))
		    console.log(ltBound,rbBound)
		});

  		var contentString1 = '<div id="bodyContent">'+
  	  '<h7 id="firstHeading" class="firstHeading">Rent:$760</h7>'+
      '<p id="desc">Costa Verde:One Bedroom</p>'+
      '<a href="/detailedInfo1" id="desc">'+
      'Click Here to View Details</a> '+
      '</div>';

	      var contentString2 = '<div id="bodyContent">'+
	  	  '<h7 id="firstHeading" class="firstHeading">Rent:$860</h7>'+
	      '<p id="desc">Regents Court:One Bedroom</p>'+
	      '<a href="/detailedInfo2" id="desc">'+
	      'Click Here to View Details</a>'+
	      '</div>';

	  var infowindow1 = new google.maps.InfoWindow({
	      content: contentString1
	  });
	var infowindow2 = new google.maps.InfoWindow({
	      content: contentString2
	  });

  	var marker1 = new google.maps.Marker({
      position: latlng1,
      map: map,
      title: 'Costa Verde'
  	});
  	//map, point, html, classname, pixelOffset, percentOpacity, overlap
 	var label1 = new ELabel(map, latlng1, '<p>Costa Verde<\/p>',"style1",new google.maps.Size(-20,20));
 	//= new ELabel(,'Costa Verde',"style1");
 	label1.setMap(map);

  	var marker2 = new google.maps.Marker({
      position: latlng2,
      map: map,
      title: 'Regents Court'
  	});

  	var label2 = new ELabel(map, latlng2, '<p>Regents Court<\/p>',"style1",new google.maps.Size(-20,20));
 	//= new ELabel(,'Costa Verde',"style1");
 	label2.setMap(map);
  google.maps.event.addListener(marker1, 'click', function() {
    infowindow1.open(map,marker1);
  });
  google.maps.event.addListener(marker2, 'click', function() {
    infowindow2.open(map,marker2);
  });
}

google.maps.event.addDomListener(window, 'load', initialize);
