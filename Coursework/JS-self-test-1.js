let students = [
    { name: "Alice", college: "ENG", score: 33 },
    { name: "Bilal", college: "ENG", score: 90 },
    { name: "Ali", college: "ARTS", score: 80 },
    { name: "Waleed", college: "ARTS", score: 67 },
    { name: "Ahmed", college: "ARTS", score: 45 },
    { name: "Ahmed", college: "ARTS", score: 45 },
    { name: "Ahmed", college: "ARTS", score: 45 },
    { name: "Ahmed", college: "ARTS", score: 45 }
  ];
  
//   //1.	Filter all the ENG student objects in an array named engstudents.
  
//   let engstudents = students.filter(x => x["college"] === "ENG");
//   console.log(engstudents);
  
//   /*2.	Reduce the students array to an object that contains ONLY 
//   the names of the students who passed (>=60). -> {‘Bilal’, ‘Ali’, ‘Waleed’}. */
  
//   let passed = students.reduce(function(acc, std) {
//     if (std.score >= 60) {
//       acc.push(`${std.name}`);
//     }
//     return acc;
//   }, []);
  
//   console.log(passed);
  
//   //3.	Find the average score of all students.
  
//   let avgScore =
//     students.reduce((acc, std) => acc + std.score, 0) / students.length;
//   //console.log(avgScore)
  
//   /* 4.	Reduce the students array to an object of the highest student.
//    All properties should be in the object. { name: 'Bilal', college: 'ENG', score : 90 } */
  
//   if (undefined > 33) console.log("this works!");
//   else console.log("doesnt works!");
  
//   let highest = students.reduce(function(acc, curr) {
//     console.log("Acc : " + acc.score + " Curr :" + curr.score);
//     if (acc.score > curr.score) {
//       console.log(curr.score);
//       return acc;
//     } else return curr;
//   }, {});
  
//   console.log(highest);
  
//   /* 5.	Find the average score per college. 
//   Your output should look similar to {‘ENG’: 67.5 , ‘ARTS’: 56.4}; */
  
//   let totalScorePerCollege = groupByCollege(students, "college");
  
//   function groupByCollege(objectArray, property) {
//     return objectArray.reduce(function(acc, obj) {
//       let key = obj[property];
//       console.log(key + " " + obj["score"]);
//       if (key in acc) {
//         acc[key] += obj["score"];
//       } else acc[key] = obj["score"];
//         console.log("Obj : " + obj[property] + " Acc : " + acc[obj[property]]);
//       return acc;
//     }, {});
//   }
  
//   console.log(totalScorePerCollege);
  
//   console.log(totalScorePerCollege["ENG"]);
  
//   let countedStudentsByCollege = students.reduce(function(allNames, obj) {
//     if (obj["college"] in allNames) {
//       allNames[obj["college"]]++;
//     } else {
//       allNames[obj["college"]] = 1;
//     }
//     return allNames;
//   }, {});
  
//   console.log(countedStudentsByCollege);
  
//   console.log(totalScorePerCollege["ENG"] / countedStudentsByCollege["ENG"]);
  
  console.log("asdasdfasdfasd");
  let testCollge = students.reduce(function(allNames, obj, i, array) {
    if (obj["college"] in allNames) {
      allNames[obj["college"]][0]+=obj.score;
      allNames[obj["college"]][1]++;
      
    } else {
      allNames[obj["college"]] = [obj.score, 1];
    }
    if (i==(array.length-1)){
        let final={};
        for (const college in allNames) {
            if (allNames.hasOwnProperty(college)) {

                // final.push(college, allNames[college][0]/allNames[college][1]);
                final[college] = allNames[college][0]/allNames[college][1];

                
                
            }
        }
        return final;
    }
    return allNames;
  }, {});
  

  console.log(testCollge);
  /*6.	Map the students’ arrays to an array of the names the students. 
  Output should similar to: [‘Alice’, ‘Bilal’, …] */
  