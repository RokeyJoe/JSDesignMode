class User {
  constructor(name, role, pages) {
    this.name = name;
    this.role = role;
    this.pages = pages;
  }

  welcome() {
    console.log("欢迎回来", this.name);
  }

  dataShow() {
    // abstract
    throw new Error("抽象方法需要被实现");
  }
}

class SuperAdmin extends User {
  constructor(name) {
    super(name, "superAdmin", [
      "home",
      "user-manger",
      "rights-manger",
      "news-manger",
    ]);
  }

  dataShow() {
    console.log("superAdmin-data-show");
  }

  addUser() {}

  addRight() {}

  editNews() {}
}

class Admin extends User {
  constructor(name) {
    super(name, "admin", ["home", "user-manger", "news-manger"]);
  }

  dataShow() {
    console.log("admin-data-show");
  }

  addUser() {}

  editNews() {}
}

class Editor extends User {
  constructor(name) {
    super(name, "editor", ["home", "news-manger"]);
  }

  dataShow() {
    console.log("superAdmin-data-show");
  }

  editNews() {}
}

function getAbstractUserFactory(role) {
  switch (role) {
    case "superAdmin":
      return SuperAdmin;
    case "admin":
      return Admin;
    case "editor":
      return Editor;

    default:
      throw new Error("参数错误");
  }
}

let UserClass = getAbstractUserFactory('superAdmin');
console.log(UserClass);

let user = new UserClass('Joe');
user.dataShow();
console.log(user);

let test = new User('Mike', "admin", ["home", "user-manger", "news-manger"])
test.dataShow();