class User {
  constructor(role, pages) {
    this.role = role;
    this.pages = pages;
  }

  static UserFactory(role) {
    switch (role) {
      case "superAdmin":
        return new User("superAdmin", [
          "home",
          "user-manger",
          "rights-manger",
          "news-manger",
        ]);
      case "admin":
        return new User("admin", ["home", "user-manger", "news-manger"]);
      case "editor":
        return new User("editor", ["home", "news-manger"]);

      default:
        throw new Error("参数错误");
    }
  }
}

var user = User.UserFactory("editor");
console.log("user:", user);
