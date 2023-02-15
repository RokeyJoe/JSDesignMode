//  简单工厂的优点在于， 你只需要一个正确的参数， 就可以获取到你所需要的对象，而无需知道其创建的具体细节。
 function UserFactory(role) {
    function User(role, pages) {
        this.role = role;
        this.pages = pages;
    }

    switch(role) {
        case 'superAdmin':
            return new User('superAdmin', ['home', 'user-manger', 'rights-manger', 'news-manger']);
        case 'admin':
            return new User('admin', ['home', 'user-manger', 'news-manger']);
        case 'editor':
            return new User('editor', ['home', 'news-manger']);

        default:
            throw Error('参数错误');
    }

 }

 var user = new UserFactory('superAdmin');
console.log('user:', user);