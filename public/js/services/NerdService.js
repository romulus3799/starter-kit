angular.module('NerdService', [])
	.factory('Nerd', ['$http', ($http) => {

		return {
			get : function() {
				return $http.get('/api/nerds')
			},

			create : function(nerdData) {
				return $http.post('/api/nerds', nerdData)
			},

			delete : (id) => {
				return $http.delete('/api/nerds/' + id)
			}
		}

	}])
