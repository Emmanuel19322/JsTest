import User, { printAge, printName } from "./User.js"

let user = new User("Katie", 31)

console.log(user)
printAge(user)
printName(user)

let thingToto = {
    morning: "Exercise",
    afternoon: "Work",
    evening: "Code",
    night: ["Sleep", "Dream"]
}

let {morning, afternoon} = thingToto

console.log(morning, " - ", afternoon)


let uniStudent = ({ name, university }) => {
    // university = "Glasgow University"
    console.log(`${name} from ${university}`);
}

uniStudent({
    name: "Dalton",
    university: "University of Strathclyde"
})

let { name, university } = uniStudent

console.log(name, university);





