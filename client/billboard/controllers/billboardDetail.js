angular.module("decamedia").controller("BillboardDetailCtrl", ['$scope', '$stateParams', '$meteor',
  function ($scope, $stateParams, $meteor) {
    $scope.party = $meteor.object(Billboards, $stateParams.deviceId);
 }]);
