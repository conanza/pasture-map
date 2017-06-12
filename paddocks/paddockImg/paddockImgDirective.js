function paddockImg () {
  return {
    restrict: 'E',
    scope: {
      width: '=?',
      height: '=?'
    },
    bindToController: true,
    controller: 'PaddockImgCtrl',
    controllerAs: 'paddockImgDir',
    templateUrl: 'paddocks/paddockImg/paddockImg.html',
    link: (scope, el, attrs, ctrl) => {
      scope.$on('drawPaddock', (ev, coords) => {
        ctrl.drawImage(coords);
      });
    }
  };
}

angular
  .module('pastureMap')
  .directive('paddockImg', paddockImg);
