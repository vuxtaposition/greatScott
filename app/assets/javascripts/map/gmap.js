//http://www.sitepoint.com/use-google-maps-rails/

$(window).load(function() {
  loadScript();
});

var map;

function initialize() {
        
  var mapOptions = {
          center: new google.maps.LatLng(53.348693,-6.243135),
          zoom: 17,
          mapTypeId: google.maps.MapTypeId.HYBRID,
          panControl: true,
          scaleControl: false,
          streetViewControl: true,
          overviewMapControl: true
        };
        
        
        // initializing map
        map = new google.maps.Map(document.getElementById("map-canvas"),mapOptions);
                
        var marker=new google.maps.Marker({
  position:new google.maps.LatLng(53.348693,-6.243135),
  });

marker.setMap(map);
   // geocoding 
      var geocoding  = new google.maps.Geocoder();
      $("#submit_button_geocoding").click(function(){
        codeAddress(geocoding);
      });
      $("#submit_button_reverse").click(function(){
        codeLatLng(geocoding);
      });
      
   
}


function loadScript() {
	console.log("map loading ...");
  var script = document.createElement('script');
  script.type = 'text/javascript';
  'https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyAjMjG8j5Xf3QKkH_nUoxJW4g_m_b65LHo-vL4ydiSZ09Khsa_o&sensor=false&libraries=drawing'
  script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp' +

    '&libraries=drawing'+
    '&callback=initialize';
  document.body.appendChild(script);
}