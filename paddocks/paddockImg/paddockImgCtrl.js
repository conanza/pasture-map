function paddockImgCtrl (PaddocksService) {
  this.$onInit = () => {
    this.width = this.width || 500;
    this.height = this.height || 500;
  };

  this.drawImage = coords => {
    this.points = PaddocksService.parseCoordinates(coords, this.height);
  };
}

angular
  .module('pastureMap')
  .controller('PaddockImgCtrl', paddockImgCtrl);
