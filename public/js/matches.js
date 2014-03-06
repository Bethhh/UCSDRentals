var center_UCSD = new google.maps.LatLng(32.877491,-117.235276);

	function initialize() {
  		var latlng1 = new google.maps.LatLng(32.867779,-117.218110);
      var latlng11 = new google.maps.LatLng(32.867780,-117.218120);
      var latlng12 = new google.maps.LatLng(32.867778,-117.218310);
  		var latlng2 = new google.maps.LatLng(32.854999,-117.217015);
      var latlng21 = new google.maps.LatLng(32.855934,-117.217515);
      var latlng22 = new google.maps.LatLng(32.854224,-117.217995);
      var latlng3 = new google.maps.LatLng(32.867422,-117.226703);
      var latlng31 = new google.maps.LatLng(32.867722,-117.226709);
      var latlng32 = new google.maps.LatLng(32.867482,-117.226753);
  		var mapOptions = {
	    //zoom: 15,
	    //center: latlng1
	  };

  		var map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
  		google.maps.event.addListener(map,'projection_changed', function () {
		    var proj = map.getProjection();
		    ltBound = proj.fromPointToLatLng(new google.maps.Point(0,100))
		    rbBound = proj.fromPointToLatLng(new google.maps.Point(100,200))
		    console.log(ltBound,rbBound)
		});
      var latlngbounds = new google.maps.LatLngBounds();
      //for(var i = 0; i<latlng.length; i++)
      latlngbounds.extend(latlng2);
      latlngbounds.extend(latlng22);
      latlngbounds.extend(latlng21);
      map.fitBounds(latlngbounds);
  		var contentString1 = '<div id="bodyContent">'+
  	  '<h7 id="firstHeading" class="firstHeading">Rent:$760-$790</h7>'+
      '<p id="desc">Costa Verde:3 matches</p>'+
      '<a href="/detailedInfo1" id="desc">'+
      'Click Here to View Details</a> '+
      '</div>';

	      var contentString2 = '<div id="bodyContent">'+
	  	  '<h7 id="firstHeading" class="firstHeading">Rent:$800-$860</h7>'+
	      '<p id="desc">Regents Court:3 mathces</p>'+
	      '<a href="/detailedInfo2" id="desc">'+
	      'Click Here to View Details</a>'+
	      '</div>';

        var contentString3 = '<div id="bodyContent">'+
        '<h7 id="firstHeading" class="firstHeading">Rent:$1200-$1328</h7>'+
        '<p id="desc">Nobel Court:3 matches</p>'+
        '<a href="/detailedInfo3" id="desc">'+
        'Click Here to View Details</a>'+
        '</div>';

	  var infowindow1 = new google.maps.InfoWindow({
	      content: contentString1
	  });
	var infowindow2 = new google.maps.InfoWindow({
	      content: contentString2
	  });
  var infowindow3 = new google.maps.InfoWindow({
        content: contentString3
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

  var marker3 = new google.maps.Marker({
      position: latlng3,
      map: map,
      title: 'Nobel Court'
    });

    var label3 = new ELabel(map, latlng3, '<p>Nobel Court<\/p>',"style1",new google.maps.Size(-20,20));
  //= new ELabel(,'Costa Verde',"style1");
  label3.setMap(map);

var marker12 = new google.maps.Marker({
      position: latlng12,
      map: map,
      title: 'Costa Verde'
    });
var marker11 = new google.maps.Marker({
      position: latlng11,
      map: map,
      title: 'Costa Verde'
    });
var marker21 = new google.maps.Marker({
      position: latlng21,
      map: map,
      title: 'Costa Verde'
    });
var marker22 = new google.maps.Marker({
      position: latlng22,
      map: map,
      title: 'Costa Verde'
    });
var marker31 = new google.maps.Marker({
      position: latlng31,
      map: map,
      title: 'Costa Verde'
    });
var marker32 = new google.maps.Marker({
      position: latlng32,
      map: map,
      title: 'Costa Verde'
    });

  google.maps.event.addListener(marker1, 'click', function() {
    infowindow1.open(map,marker1);
  });
  google.maps.event.addListener(marker2, 'click', function() {
    infowindow2.open(map,marker2);
  });
  google.maps.event.addListener(marker3, 'click', function() {
    infowindow3.open(map,marker3);
  });
}

google.maps.event.addDomListener(window, 'load', initialize);
