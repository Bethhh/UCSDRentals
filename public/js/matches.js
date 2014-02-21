var center_UCSD = new google.maps.LatLng(32.877491,-117.235276);

function initialize()
	{
	var mapProp = {
	  center:center_UCSD,
	  zoom:13,
	  mapTypeId:google.maps.MapTypeId.ROADMAP
	  };
	var map=new google.maps.Map(document.getElementById("googleMap")
	  ,mapProp);

	var image = {
	    url: '/icons/house.png',
	  };
	var ucsd = new google.maps.Marker({
		position:center_UCSD,
		icon:'/icons/school.png'
	});
	ucsd.setMap(map);

	{{#each matches}}
		var match = new google.maps.LatLng({{lat}},{{lon}});
		var marker = new google.maps.Marker({
		position:match,
		icon: '/icons/house.png'
		});
		marker.setMap(map);
		var msg = "{{name}}";
		var infowindow = new google.maps.InfoWindow({
			content:"{{name}}"
		});

		google.maps.event.addListener(marker,'click',function(){
			infowindow.open(map,marker);
		})
		//console.log("haha");
	{{/each}}

	}

google.maps.event.addDomListener(window, 'load', initialize);