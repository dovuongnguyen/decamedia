angular.module("decamedia").controller("BillboardCtrl", ['$scope', '$meteor',
  function($scope, $meteor){
    $scope.billboards = $meteor.collection(Billboards).subscribe('billboards');
    //console.log($scope.billboards);
}]);