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
    
    $scope.checkForm = function() {
        console.log('hit');
        if($scope.appointment.day && $scope.appointment.month && $scope.appointment.year && $scope.appointment.time && $scope.appointment.service && $scope.appointment.name && $scope.appointment.phone && $scope.appointment.email) {
            if($scope.appointment.pickup == 'Yes') {
                if($scope.appointment.address) {
                    console.log('good to go');
                }
            } else {
                
            }
        }   
    };
    
   
    
    
});

barkshack.controller('groomingCtrl', function ($scope) {

    $scope.breeds = {
    "Airedale": {
      "name": "Airedale",
      "price": "60",
          },
     "Akita": {
      "name": "Akita",
      "price": "65",
    },
  "Austrailian Sheep Dog": {
      "name": "Austrailian Sheep Dog",
      "price": "50", 
    },
    "Bernese Mountain Dog": {
      "name": "Bernese Mountain Dog",
      "price": "65", 
    },
    "Bichon": {
      "name": "Bichon",
      "price": "50",
    },
    "Border Collie": {
      "name": "Border Collie",
      "price": "50",
    },
    "Border Terrier": {
      "name": "Border Terrier",
      "price": "45",
    },
    "Boykin": {
      "name": "Boykin",
      "price": "50",
    },
    "Brittany": {
      "name": "Brittany",
      "price": "50",
    },
    "Bouvier": {
      "name": "Bouvier",
      "price": "65",
    },
    "Cairn": {
      "name": "Cairn",
      "price": "45",
    },
    "Cavalier": {
      "name": "Cavalier",
      "price": "55",
    },
    "Chow": {
      "name": "Chow",
      "price": "60",
    },
    "Cockapoo": {
      "name": "Cockapoo",
      "price": "50",
    },
    "Cocker": {
      "name": "Cocker",
      "price": "50",
    },
    "Corgi": {
      "name": "Corgi",
      "price": "45",
    },
    "English Setter": {
      "name": "English Setter",
      "price": "50",
    },
    "Eskimo Spitz": {
      "name": "Eskimo Spitz",
      "price": "50",
    },
    "German Shephard": {
      "name": "German Shephard",
      "price": "55",
    },
    "Golden Retriever": {
      "name": "Golden Retriever",
      "price": "50",
    },
    "Golden Doodle": {
      "name": "Golden Doodle",
      "price": "65",
    },
    "Great Pyrenese": {
      "name": "Great Pyrenese",
      "price": "55",
    },
    "Irish Setter": {
      "name": "Irish Setter",
      "price": "50",
    },
    "Japanese Chin": {
      "name": "Japanese Chin",
      "price": "40",
    },
    "Keeshond": {
      "name": "Keeshond",
      "price": "50",
    },
    "Labrador Retriever": {
      "name": "Labrador Retriever",
      "price": "50",
    },
    "Lhasa Apso": {
      "name": "Lhasa Apso",
      "price": "45",
    },
    "Maltese": {
      "name": "Maltese",
      "price": "40",
    },
    "Newfoundland": {
      "name": "Newfoundland",
      "price": "65",
    },
    "Norfolk Terrier": {
      "name": "Norfolk Terrier",
      "price": "45",
    },
    "Old English Sheepdog": {
      "name": "Old English Sheepdog",
      "price": "65",
    },
    "Papillon": {
      "name": "Newfoundland",
      "price": "40",
    },
    "Pekignese": {
      "name": "Pekignese",
      "price": "45",
    },
    "Toy Poodle": {
      "name": "Toy Poodle",
      "price": "40",
    },
    "Miniature Poodle": {
      "name": "Miniature Poodle",
      "price": "40",
    },
    "Standard Poodle": {
      "name": "Standard Poodle",
      "price": "65",
    },
    "Samoyed": {
      "name": "Samoyed",
      "price": "55",
    },
    "Miniature Scnauzer": {
      "name": "Miniature Scnauzer",
      "price": "45",
    },
    "Standard Scnauzer": {
      "name": "Standard Scnauzer",
      "price": "50",
    },
    "Giant Scnauzer": {
      "name": "Giant Scnauzer",
      "price": "60",
    },
    "Scottish Terrier": {
      "name": "Scottish Terrier",
      "price": "45",
    },
    "Sheltie": {
      "name": "Sheltie",
      "price": "50",
    },
    "Shih Tzu": {
      "name": "Shih Tzu",
      "price": "45",
    },
    "Springer Spaniel": {
      "name": "Springer Spaniel",
      "price": "50",
    },
    "Saint Bernard": {
      "name": "Saint Bernard",
      "price": "65",
    },
    "Tibetan Terrier": {
      "name": "Tibetan Terrier",
      "price": "45",
    },
    "Welsh Terrier": {
      "name": "Welsh Terrier",
      "price": "45",
    },
    "Westie": {
      "name": "Westie",
      "price": "45",
    },
    "Wheaton Terrier": {
      "name": "Wheaton Terrier",
      "price": "60",
    },
    "Yorkie": {
      "name": "Yorkie",
      "price":"45",
    },
  };
 
  $scope.currentBreed = null;
  
  

  $scope.setBreed = function (name) {
    $scope.currentBreed = $scope.breeds[name];
  };

  $scope.showPrice = function (name) {
    $scope.currentPrice = $scope.breeds[name];
  };
    
    
    });

