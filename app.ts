const person: {
    name: string,
    age: number,
    hobbies: string[],
    role: [number, string]
} = {
    name: "Sajed",
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'Author']
};

let favoraitActivity: string[];
favoraitActivity = ['Learning'];

// Added a comment
console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}