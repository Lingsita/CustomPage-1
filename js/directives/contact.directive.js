(function () {
    'use strict';
    angular.module('customPage')
        .directive('contactDirective', [ 'contactService', function (contactService) {
            return {
                restrict: "E",
                templateUrl: 'js/templates/aboutUs/contactDirective.html',
                controller: function ($scope, $timeout) {
                    $scope.contactInfo = {};
                    var promise = contactService.getText();
                    promise.then(function (data) {
                        $scope.contactInfo = data.data;
                    });
                }
            }
        }]);
})();
