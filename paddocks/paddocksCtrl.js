function paddocksCtrl ($scope, PaddocksService) {
  this.$onInit = () => {
    this.area = null;
    this.coordinates = [Array(2), Array(2), Array(2)];
  };

  this.addCoordinate = () => {
    this.coordinates.push(Array(2));
  };

  this.computePaddock = () => {
    this.area = PaddocksService.calculateArea(this.coordinates);
    $scope.$broadcast('drawPaddock', this.coordinates);
  };

  this.resetPaddock = () => {
    this.coordinates = [Array(2), Array(2), Array(2)];
    this.area = null;
  };
}

angular
  .module('pastureMap')
  .controller('PaddocksCtrl', paddocksCtrl);
