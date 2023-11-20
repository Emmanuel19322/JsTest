export default class User {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

export let printName = (user) => console.log(`User's name ${user.name}`)


export let printAge = (user) => console.log(`User's age ${user.age} years old`)
