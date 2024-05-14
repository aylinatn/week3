
let fruits = ['Apple', 'Banana','Orange', 'Mango'];
console.log(fruits[0]); 
fruits.push('Grapes');
console.log(fruits)
fruits.splice(1,1)
console.log(fruits)
let person = {
    firstName: 'John',
    lastName: 'Doe',
    age:30,
    hobbies: ['Reading', 'Travelling'],
    address: {
        street: '123 Main St.',
        city: 'Anytown',
        country: 'USA'
    }
}
console.log(person)
console.log(person.firstName);
console.log(person.address.city);
person.age = 31;
person.hobbies.push('Cooking');
console.log(person)
for(let i =0; i<5; i++){
    console.log(i);
}
for (let i=0; i<fruits.length; i++) {
    console.log(fruits[i]);
}
for (let age in person) {
    console.log(age + ':' + person[age]);
}
let x =10;
if(x>5) {
    console.log('hello')
} else{ console.log('bye')
}
let temperature = 25;
if(temperature> 20) {
    console.log('Its a warm day!'); 
}
let hour =18;
if(hour <12) {
    console.log('Good Morning!');
} else {
    console.log('Good Afternoon!');
}
let age = 25;
if(age>=18) {
    if (age<21){
        console.log('You are an adult but not yet allowed to drink');
    } else {
        console.log('You are an adult and allowed to drink');
    } 
} else {
    console.log('You are minor');
}
let scale = 1/200;
if(scale>= 1/200) {
    console.log('Lineweight= 0.2');
} else {
    console.log('Lineweight: 0.05');
}