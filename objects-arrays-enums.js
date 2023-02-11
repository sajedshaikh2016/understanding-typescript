"use strict";
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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
const person = {
    name: "Sajed",
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.AUTHOR
};
let favoraitActivity;
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
