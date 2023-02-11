const person = {
    name: "Sajed",
    age: 30,
    hobbies: ['Sports', 'Cooking']
};

let favoraitActivity: string[];
favoraitActivity = ['Learning'];

// Added a comment
console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}