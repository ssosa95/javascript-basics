function greeting(user) {
    return "Welcome to the price calculator, " + user + ".";
}

console.log(greeting("Samuel"));

const greet = (name) => {
    return "Welcome to the price calculator, " + name + ".";
}

console.log(greet("Samuel"));

const salutation = (name) => "Welcome to the price calculator, " + name + ".";

console.log(salutation("Samuel"));

const identity = (name, age, gender) => `Welcome to the price calculator, ${name}. You are ${age} years old and identify as a ${gender}.`;

console.log(identity("Samuel", 31, "male"));

