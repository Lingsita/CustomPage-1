(function () {
    'use strict';
    angular.module('customPage')
        .directive('whoDirective', [ 'whoService', function (whoService) {
            return {
                restrict: "E",
                templateUrl: 'js/templates/aboutUs/whoDirective.html',
                controller: function ($scope, $timeout) {
                    $scope.descriptions = {};
                    var promise = whoService.getText();
                    promise.then(function (data) {
                        $scope.descriptions = data.data;
                    });
                }
            }
        }]);
})();
