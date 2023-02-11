var person = {
    name: "Sajed",
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'Author']
};
var favoraitActivity;
favoraitActivity = ['Learning'];
// Added a comment
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
