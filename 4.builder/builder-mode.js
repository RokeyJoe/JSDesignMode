// 将复杂对象的构建与表示分离

class Navbar {
  init() {
    console.log("Navbar-init");
  }

  async getData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(); // return new Promise(), 以及setTimeout中的resolve() 缺一不可
        console.log("Navbar-getData");
      }),
        1000;
    });
  }

  render() {
    console.log("Navbar-render");
  }
}

class List {
  init() {
    console.log("List-init");
  }

  async getData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
        console.log("List-getData");
      }),
        1000;
    });
  }

  render() {
    console.log("List-render");
  }
}

class Operator {
  async startBuilder(builder) {
    await builder.init();
    await builder.getData();
    await builder.render();
  }
}

const op = new Operator();
const navBar = new Navbar();
const list = new List();

op.startBuilder(navBar);
op.startBuilder(list);
