var person = {
	name: 'king',
	age: 21
};

function updatePerson(obj){
	// obj = {
	// 	name: 'King',
	// 	age:24
	// }
	obj.name = 'King mhar'
	obj.age = 24;
}

updatePerson(person);
console.log(person);

// array examples

var grades = [15,188];
function addGrades(gradesArr){
	gradesArr.push(55);
	debugger;
}
addGrades(grades);
console.log(grades);