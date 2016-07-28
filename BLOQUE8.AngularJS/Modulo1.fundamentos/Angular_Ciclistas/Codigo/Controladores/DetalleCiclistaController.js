/*
* DetalleCiclistaController
* Controlador del Palmarés del Ciclista
* Recibe 3 argumentos: $scope(ámbito), $http y $routeParams
*/
function DetalleCiclistaController($scope, $http, $routeParams) {
  $scope.id = $routeParams.ciclistaId;

    // Asumimos que los datos de cada ciclista se encuentran en ficheros 
    // separados y numerados al final (1,2,3...), todos con el mismo 
    // prefijo (ciclista*)
  $http.get('Datos/ciclista'+$scope.id+'.json').success(function(data) {
	  $scope.ciclista = data[0];
  });
 
}