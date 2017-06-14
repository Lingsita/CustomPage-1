(function () {
    'use strict';
    angular.module('customPage')
        .directive('specializationDirective', [ 'specializationService', function (specializationService) {
            return {
                restrict: "E",
                templateUrl: 'js/templates/aboutUs/specializationDirective.html',
                controller: function ($scope, $timeout) {
                    $scope.specializations = {};
                    var promise = specializationService.getText();
                    promise.then(function (data) {
                        $scope.specializations = data.data;
                    });
                }
            }
        }]);
})();
