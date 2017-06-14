(function () {
    'use strict';
    angular.module('customPage')
        .directive('whereDirective', [ 'whereService', function (whereService) {
            return {
                restrict: "E",
                templateUrl: 'js/templates/aboutUs/whereDirective.html',
                replace: true,
                controller: function ($scope, $timeout) {
                    $scope.whereInfo = {};
                    var promise = whereService.getText();
                    promise.then(function (data) {
                        $scope.whereInfo = data.data;
                    });
                }
            }
        }]);
})();
