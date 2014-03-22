'use strict';

angular.module('barkApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
      
      var mapDiv = $('#map').is(':visible');
      
      
    if(mapDiv){
        var styles = [
        {
            featureType: 'landscape',
            elementType: 'all',
            stylers: [
                { hue: '#8E887D' },
                { saturation: -74 },
                { lightness: -41 },
                { visibility: 'on' }
            ]
        },
        { 
            featureType: 'water', 
            elementType: 'all', 
            stylers: [ 
                { hue: '#A1C1BE' }, 
                { saturation: -54 }, 
                { lightness: -9 }, 
                { visibility: 'on' } 
            ] 
        }
    ];
    var options = {
        mapTypeControlOptions: {
            mapTypeIds: [ 'Styled']
        },
        center: new google.maps.LatLng(32.2305004,-80.8568941),
        zoom: 16,
        mapTypeId: 'Styled'
    };
    var div = document.getElementById('map');
    var map = new google.maps.Map(div, options);
    var styledMapType = new google.maps.StyledMapType(styles, { name: 'Styled' });
    map.mapTypes.set('Styled', styledMapType);
      
      var marker = new google.maps.Marker({
          position: new google.maps.LatLng(32.2305004,-80.8568941),
          map: map,
          title: 'Barkshack',
          icon: 'images/marker.png'
      });
    }
      
    


      
  });
