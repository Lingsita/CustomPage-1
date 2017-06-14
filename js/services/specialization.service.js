(function () {
    angular.module('customPage')
        .service('specializationService', ['$http', '$q',function($http, $q) {
            var deferred = $q.defer();
            $http.get('js/json/specialization.json').then(function(data) {
                deferred.resolve(data);
            });
            this.getText = function(){
                return deferred.promise;
            };
        }]);
})();
