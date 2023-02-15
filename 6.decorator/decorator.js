/**
       * 装饰器模式能够很好的对已有功能进行拓展，这样不会更改原有的代码，对其他的业务产生影响，
       * 这方便我们在较少的改动下对软件功能进行拓展。
       */

 Function.prototype.before = function (beforeFn) {
    // 此处不保存this的话， 在返回函数中的就找不到test()的this指针了
    var _this = this;
    // console.log("_this Outer: ", _this); // test()

    return function () {
    //   console.log("this: ", this); // Window
      beforeFn.apply(this, arguments);
      return _this.apply(this, arguments);
    };
  };

  Function.prototype.after = function (afterFn) {
    var _this = this;
    return function () {
      let result = _this.apply(this, arguments);
      afterFn.apply(this, arguments);
      return result;
    };
  };

  function test() {
    console.log("test() execute");
  }

  // 函数后面加(), 表示执行该函数， 不加()表示该函数本身
  // 此处test1是想要返回一个函数，所以此处使用test.before()， 而不能是test().before()
  var test1 = test
    .before(function () {
      console.log("before() execute");
    })
    .after(function () {
      console.log("after() execute");
    });

  test1();