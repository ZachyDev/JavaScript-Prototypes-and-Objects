class user {
    constructor(name,email,age) {
        this.name = name,
        this.email = email,
        this.age = age
    }
    displayUser() {
        console.log(`${ this.name} ${ this.email } ${ this.age }`)
    }
}
const user1 = new user('moseti','zachy.alc@gmail.com',20);
user1.displayUser();