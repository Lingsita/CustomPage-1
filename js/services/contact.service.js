(function () {
    angular.module('customPage')
        .service('contactService', ['$http', '$q',function($http, $q) {
            var deferred = $q.defer();
            $http.get('js/json/contact.json').then(function(data) {
                deferred.resolve(data);
            });
            this.getText = function(){
                return deferred.promise;
            };
        }]);
})();
