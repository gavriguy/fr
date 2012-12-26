

angular.module('fr', []).
  config(function($routeProvider) {
    $routeProvider.
      when('/thank-you', {controller: ThankYouCtrl, templateUrl: 'partilas/thank-you.html'}).
      when('/results', {controller: ResultsCtrl, templateUrl:'partilas/results.html'}).
      otherwise({redirectTo: '/thank-you'});

    });


  function ThankYouCtrl($scope, $location) {
    $scope.setRoute = function(route) {
      $location.path(route);
    }
    
  }

  function ResultsCtrl($scope, $location, $http) {
    $scope.setRoute = function(route) {
      $location.path(route);
    }
    $scope.$on('$viewContentLoaded', readyFunction);
    //
    // see http://docs.angularjs.org/tutorial/step_05
    $http.get('data/mock.json').success(function(data){
      $scope.answers = data;
      console.log(data);

    });


  }



  //


  (function ($) {
$.fn.vAlign = function() {
  return this.each(function(i){
    var ah = $(this).height();
    var ph = $(this).parent().height();
    var mh = (ph - ah) / 2;
  $(this).css('margin-top', mh);
  });

};
})(jQuery);
 



function readyFunction() {
  //$('.answer-text, .answer-image, .friends').vAlign();
  //console.log($('#slider').width());
  
  var slider = $('#slider').bjqs({
    'width': $('#slider').width(),
    'animtype': 'slide',
    'showcontrols': false,  
    'automatic': false,  
     'responsive' : true,
     'automatic': false
  });
  //
  
  $('#slider').hammer({prevent_default:true}).bind('swipe',function(e){
    console.log(e);
    
    switch (e.direction) {
      case 'right':
        slider.go('previous');
        break;
      case 'left':
        slider.go('forward');
        break;
      case 'up':
        $('.ans1').scrollTo($('.ans1').scrollTop()+50);
        break;
      case 'down':
        $('.ans1').scrollTo($('.ans1').scrollTop()-50);
        break;


    }
    
  });

  //console.log($('#slider'));
  
}

///



