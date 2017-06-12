function paddocksService () {
  let service = {};

  // ref. http://www.mathopenref.com/coordpolygonarea2.html
  service.calculateArea = coords => {
    let area = 0;
    let length = coords.length;
    let [prevX, prevY] = coords[length - 1].map(Number);

    coords.forEach(coord => {
      let [currentX, currentY] = coord.map(Number);

      area += (prevX + currentX) * (prevY - currentY);

      prevX = currentX;
      prevY = currentY;
    });

    return area / 2;
  };

  service.parseCoordinates = (coords, h) => {
    return coords.map(coord => {
      let [x, y] = coord;
      return `${x},${h - y}`;
    }).join(' ');
  };

  return service;
}

angular
  .module('pastureMap')
  .service('PaddocksService', paddocksService);
