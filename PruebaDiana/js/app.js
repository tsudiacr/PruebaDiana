var app = angular.module('universidadApp',['ngRoute','angular-jsoneditor']);

app.controller('BodyCtrl', ['$scope','$http', function($scope,$http){

  $scope.menuSuperior = "templates/menu.html";

  var json = {
        "Array": [1, 2, 3], "Boolean": true, "Null": null, "Number": 123,
        "Object": {"a": "b", "c": "d"}, "String": "Hello World",
        "auto": "$Hello World"
    };

    $scope.obj = {data: json, options: {mode: 'tree'}};
        $scope.onLoad = function (instance) {
            instance.expandAll();
            this.options.mode = 'code';
            this.options.completer = [
                {value: "$sameer", score: 1000, meta: "custom"},
                {value: "$rathore", score: 1000, meta: "custom"}
            ];
        };

}]);
