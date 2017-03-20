// var app = angular.module( "app", [ ] );
app.config( function( $routeProvider ){

  $routeProvider
    .when('/',{
        templateUrl: 'templates/home.html'
    })
    .when('/inferenciador',{
        templateUrl: 'templates/inferenciador.html'
    })
    .otherwise({
      redirectTo: '/'
    })

})
