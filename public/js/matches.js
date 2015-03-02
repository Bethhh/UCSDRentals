var center_UCSD = new google.maps.LatLng(32.877491,-117.235276);

	function initialize() {
  		var latlng1 = new google.maps.LatLng(32.867779,-117.218110);
      var latlng4 = new google.maps.LatLng(32.867780,-117.218120);
      var latlng5 = new google.maps.LatLng(32.867778,-117.218310);
  		var latlng2 = new google.maps.LatLng(32.854999,-117.217015);
      var latlng6 = new google.maps.LatLng(32.855934,-117.217515);
      var latlng7 = new google.maps.LatLng(32.854224,-117.217995);
      var latlng3 = new google.maps.LatLng(32.867422,-117.226703);
      var latlng8 = new google.maps.LatLng(32.867722,-117.226709);
      var latlng9 = new google.maps.LatLng(32.867482,-117.226753);
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
      latlngbounds.extend(latlng7);
      latlngbounds.extend(latlng6);
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
 	    var label1 = new ELabel(map, latlng2, '<p>Regents Court #220<\/p>',"style1",new google.maps.Size(-20,20));
 	//= new ELabel(,'Costa Verde',"style1");
 	    label1.setMap(map);

    	var marker2 = new google.maps.Marker({
        position: latlng2,
        map: map,
        title: 'Regents Court'
    	});

    	var label4 = new ELabel(map, latlng6, '<p>Regents Court #110<\/p>',"style1",new google.maps.Size(-20,20));
     	//= new ELabel(,'Costa Verde',"style1");
     	label4.setMap(map);

      var marker3 = new google.maps.Marker({
          position: latlng3,
          map: map,
          title: 'Nobel Court'
        });

      var label5 = new ELabel(map, latlng7, '<p>Regents Court #330<\/p>',"style1",new google.maps.Size(-20,20));
      //= new ELabel(,'Costa Verde',"style1");
      label5.setMap(map);

      var marker5 = new google.maps.Marker({
            position: latlng5,
            map: map,
            title: 'Costa Verde'
          });
      var marker4 = new google.maps.Marker({
            position: latlng4,
            map: map,
            title: 'Costa Verde'
          });
      var marker6 = new google.maps.Marker({
            position: latlng6,
            map: map,
            title: 'Costa Verde'
          });
      var marker7 = new google.maps.Marker({
            position: latlng7,
            map: map,
            title: 'Costa Verde'
          });
      var marker8 = new google.maps.Marker({
            position: latlng8,
            map: map,
            title: 'Costa Verde'
          });
      var marker9 = new google.maps.Marker({
            position: latlng9,
            map: map,
            title: 'Costa Verde'
          });

  google.maps.event.addListener(marker2, 'click', function() {
    console.log("marker1 clicked!");
    infowindow1.open(map,marker2);
    infowindow2.close();
    infowindow3.close();
  });
  google.maps.event.addListener(marker6, 'click', function() {
    infowindow2.open(map,marker6);
    infowindow1.close();
    infowindow3.close();
  });
  google.maps.event.addListener(marker7, 'click', function() {
    infowindow3.open(map,marker7);
    infowindow2.close();
    infowindow1.close();
  });
}

google.maps.event.addDomListener(window, 'load', initialize);
