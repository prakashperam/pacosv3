

var head = document.getElementsByTagName('head')[0];

// Save the original method
var insertBefore = head.insertBefore;

// Replace it!
head.insertBefore = function (newElement, referenceElement) {
    
    if (newElement.href && newElement.href.indexOf('https://fonts.googleapis.com/css?family=Roboto') === 0) {
    
        console.info('Prevented Roboto from loading!');
        return;
    }
    
    insertBefore.call(head, newElement, referenceElement);
};

function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(1.306949, 103.829122),
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        streetViewControl: false,
    	zoomControl      : false,
    	panControl       : false,
   		mapTypeControl   : false
    }

var map = new google.maps.Map(document.getElementById("map"), mapOptions);
marker = new google.maps.Marker({map: map,position: new google.maps.LatLng(1.3068158,103.82904370000006)});
}

