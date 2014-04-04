'use strict';

barkshack.controller('HeaderCtrl', function($scope, $location) {
    $scope.getClass = function(path) {
        if ($location.path().substr(0, path.length) == path) {
          return "active"
        } else {
          return ""
        }
    };
    
    $scope.toggleNav = function($scope) {
        if ($('#navbar').hasClass('in')) {
            $('#navbar').collapse('hide');
        }
    };  
});

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
    
    $scope.disabled = true;
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
    
    var myDate = new Date();
    var prettyDate =
        myDate.getFullYear()  + '-' +
        ( '0' + (myDate.getMonth()+1) ).slice( -2 );
    
    
    console.log(prettyDate);
    
    $(".responsive-calendar").responsiveCalendar({
        time: prettyDate,
        events: {}
    });
    
    
    
    $('.days').on('click', '.day a', function(e) {
        var currentDay = e.target;
        
        var isPast = $(currentDay).parent().hasClass('past');
        
        if(!isPast){
            $('.picked').removeClass('picked');
            $(currentDay).parent().addClass('picked');
            
            $scope.datePicked = true;
            $scope.instructions = 'Select a time';
            $scope.appointment.day = $(currentDay).attr('data-day');
            $scope.appointment.month = $(currentDay).attr('data-month');
            $scope.appointment.year = $(currentDay).attr('data-year');


            $scope.$apply();
        }
       
    });
    
    
    
    $scope.checkForm = function() {
        if($scope.appointment.day && $scope.appointment.month && $scope.appointment.year && $scope.appointment.time && $scope.appointment.service && $scope.appointment.name && $scope.appointment.phone && $scope.appointment.email) {
            
            if($scope.appointment.pickup == 'Yes') {
                $scope.checkBox();
            } else {
                $scope.disabled = false;
                $scope.$apply();
            }
            
        } else {
            $scope.disabled = true;
            $scope.$apply();
        }
           
    };
    
    $scope.checkBox = function() {
        if($scope.appointment.pickup == 'Yes') {
            if($scope.appointment.address) {
                $scope.disabled = false;
                $scope.$apply();
            } else {
                $scope.disabled = true;
                $scope.$apply();
            }
        } else {
            $scope.disabled = false;
            $scope.$apply();
        }
    };
    
    $('input, select').bind({
      click: function() {
        $scope.checkForm(); 
      },
      blur: function() {
        $scope.checkForm();
      },
        change: function() {
            $scope.checkBox();
        }
    });
    
    
});

barkshack.controller('groomingCtrl', function ($scope,$route) {

    $scope.$route = $route;
    
    var activeContent = '#' + $route.current.activeTab;
    
    $('.tab-pane').removeClass('active');
    
    $(activeContent).addClass('active');
   
    $scope.breeds = [
     {
      name: "Airedale",
      price: "$60",
          },
      {
      name: "Akita",
      price: "$65",
    },
       {
      name: "Austrailian Sheep Dog",
      price: "$50", 
    },
     {
      name: "Bernese Mountain Dog",
      price: "$65", 
    },
    {
      name: "Bichon",
      price: "$50",
    },
     {
      name: "Border Collie",
      price: "$50",
    },
     {
      name: "Border Terrier",
      price: "$45",
    },
     {
      name: "Boykin",
      price: "$50",
    },
     {
      name: "Brittany",
      price: "$50",
    },
     {
      name: "Bouvier",
      price: "$65",
    },
     {
      name: "Cairn",
      price: "$45",
    },
     {
      name: "Cavalier",
      price: "$55",
    },
     {
      name: "Chow",
      price: "$60",
    },
     {
      name: "Cockapoo",
      price: "$50",
    },
     {
      name: "Cocker",
      price: "$50",
    },
     {
      name: "Corgi",
      price: "$45",
    },
     {
      name: "English Setter",
      price: "$50",
    },
     {
      name: "Eskimo Spitz",
      price: "$50",
    },
     {
      name: "German Shephard",
      price: "$55",
    },
     {
      name: "Golden Retriever",
      price: "$50",
    },
     {
      name: "Golden Doodle",
      price: "$65",
    },
     {
      name: "Great Pyrenese",
      price: "$55",
    },
     {
      name: "Irish Setter",
      price: "$50",
    },
     {
      name: "Japanese Chin",
      price: "$40",
    },
     {
      name: "Keeshond",
      price: "$50",
    },
     {
      name: "Labrador Retriever",
      price: "$50",
    },
     {
      name: "Lhasa Apso",
      price: "$45",
    },
     {
      name: "Maltese",
      price: "$40",
    },
     {
      name: "Newfoundland",
      price: "$65",
    },
     {
      name: "Norfolk Terrier",
      price: "$45",
    },
     {
      name: "Old English Sheepdog",
      price: "$65",
    },
     {
      name: "Newfoundland",
      price: "$40",
    },
     {
      name: "Pekignese",
      price: "$45",
    },
     {
      name: "Toy Poodle",
      price: "$40",
    },
     {
      name: "Miniature Poodle",
      price: "$40",
    },
     {
      name: "Standard Poodle",
      price: "$65",
    },
     {
      name: "Samoyed",
      price: "$55",
    },
     {
      name: "Miniature Scnauzer",
      price: "$45",
    },
     {
      name: "Standard Scnauzer",
      price: "$50",
    },
     {
      name: "Giant Scnauzer",
      price: "$60",
    },
     {
      name: "Scottish Terrier",
      price: "$45",
    },
     {
      name: "Sheltie",
      price: "$50",
    },
     {
      name: "Shih Tzu",
      price: "$45",
    },
     {
      name: "Springer Spaniel",
      price: "$50",
    },
     {
      name: "Saint Bernard",
      price: "$65",
    },
     {
      name: "Tibetan Terrier",
      price: "$45",
    },
     {
      name: "Welsh Terrier",
      price: "$45",
    },
     {
      name: "Westie",
      price: "$45",
    },
     {
      name: "Wheaton Terrier",
      price: "$60",
    },
     {
      name: "Yorkie",
      price:"$45",
    },
  ];
 
    $scope.price = '$0';
    $scope.breed = 'Please choose your breed'
        
    $scope.setBreed = function (breed) {
        $scope.price = breed.price;
        $scope.breed = breed.name;
      };
        
});
  