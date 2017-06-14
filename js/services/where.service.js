(function () {
    angular.module('customPage')
        .service('whereService', ['$http', '$q',function($http, $q) {
            var deferred = $q.defer();
            $http.get('js/json/where.json').then(function(data) {
                deferred.resolve(data);
            });
            this.getText = function(){
                return deferred.promise;
            };
        }]);
})();
