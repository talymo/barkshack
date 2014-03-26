'use strict';

barkshack.controller('MainCtrl', function ($scope) {
         
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

barkshack.controller('GalleryCtrl', function($scope, $http, instagrams) {
    //Need to get the instagram feed
    instagrams.fetchPopular(function(data){
        
		$scope.instagrams = data;
        
        
	});
});

barkshack.controller('AppointmentCtrl', function($scope, $http, instagrams) {
    
    $scope.datePicked = false;
    $scope.instructions = '';
    $scope.showConfirm = 'disabled';
    $scope.appointment = {
        'month': '',
        'day': '',
        'year': '',
        'time': '',
        'service': '',
        'pickup': 'No',
        'address': '',
        'moreInfo': '',
        'name': '',
        'email': '',
        'phone': '',
        'message': ''
    };
    
    $(".responsive-calendar").responsiveCalendar({
        time: '2014-03',
        events: {}
    });
    
    
    
    $('.days').on('click', '.day a', function(e) {
        var currentDay = e.target;
        
        var isPast = $(currentDay).parent().hasClass('past');
        
        if(!isPast){

            $scope.datePicked = true;
            $scope.instructions = 'Select a time';
            $scope.appointment.day = $(currentDay).attr('data-day');
            $scope.appointment.month = $(currentDay).attr('data-month');
            $scope.appointment.year = $(currentDay).attr('data-year');


            $scope.$apply();
        }
       
    });
    
    if($scope.appointment.day && $scope.appointment.month && $scope.appointment.year && $scope.appointment.time && $scope.appointment.service && $scope.appointment.name && $scope.appointment.phone && $scope.appointment.email) {
        if($scope.appointment.pickup == 'Yes') {
            if($scope.appointment.address) {
                console.log('good to go');
            }
        } else {
            console.log('good to go');
        }
    } 
    
});