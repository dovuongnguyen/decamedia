angular.module("decamedia").controller("BillboardCtrl", ['$scope', '$meteor',
  function($scope, $meteor){
  	$scope.billboards = $meteor.collection(Billboards).subscribe('billboards');
}]);