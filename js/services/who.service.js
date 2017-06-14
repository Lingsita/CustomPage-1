(function () {
    angular.module('customPage')
        .service('whoService', ['$http', '$q',function($http, $q) {
            var deferred = $q.defer();
            $http.get('js/json/who.json').then(function(data) {
                deferred.resolve(data);
            });
            this.getText = function(){
                return deferred.promise;
            };
        }]);
})();
