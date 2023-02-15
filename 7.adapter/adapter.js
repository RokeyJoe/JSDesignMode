// 将一个类的接口转换成客户希望的另一个接口。适配器模式让那些接口不兼容的类可以一起工作
// axios, web(前端) node(后端) 都可以使用， 原理就是使用了适配器
class TencentMap {
  show() {
    console.log("开始渲染腾讯地图");
  }
}

class BaiduMap {
  display() {
    console.log("开始渲染百度地图");
  }
}

class TencentMapAdapter extends TencentMap {
  constructor() {
    super();
  }

  display() {
    this.show();
  }
}

function renderMap(map) {
  map.display();
}

renderMap(new TencentMapAdapter());
renderMap(new BaiduMap());
