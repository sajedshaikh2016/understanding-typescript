// const person: {
//     name: string,
//     age: number,
//     hobbies: string[],
//     role: [number, string]
// } = {
//     name: "Sajed",
//     age: 30,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'Author']
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
    ADMIN, READ_ONLY, AUTHOR
};

const person = {
    name: "Sajed",
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.AUTHOR
};

let favoraitActivity: string[];
favoraitActivity = ['Learning'];

// Added a comment
console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}

if (person.role === Role.ADMIN) {
    console.log("Is admin");
}

if (person.role === Role.AUTHOR) {
    console.log("Is author");

}