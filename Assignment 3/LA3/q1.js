let student = {
    name: "Mohd Ali",
    age: 22,
    college: 'ENG',
    gpa: 3.6
};
/*1*/

for (const key in student) {

    element = student[key];
    console.log(element)

}
/*2 */
student.phone = 444444 

let data = [3, 5, 4, 3, 5, 90, 4, 5, 6, 4];
/*3 */
x = data.reduce(function (max, curr){
    return (curr>max)?curr:max

});
data.splice(data.indexOf(x), 1);

data.splice(2, 0, 99, 999)
console.log(data);
