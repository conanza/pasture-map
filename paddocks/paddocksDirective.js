function paddocks () {
  return {
    restrict: 'E',
    scope: {},
    bindToController: true,
    controller: 'PaddocksCtrl',
    controllerAs: 'paddocksDir',
    templateUrl: 'paddocks/paddocks.html'
  };
}

angular
  .module('pastureMap')
  .directive('pmPaddocks', paddocks);
