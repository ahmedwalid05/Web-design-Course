let numbers = [5, 5, 4, 100, 20, 23, 11 , 30];
/* 1*/

odds = numbers.filter((number) => number%2 ==1  )
console.log(odds)





/*2 */


avg = numbers.reduce((acc, curr) => (acc+curr))/numbers.length
console.log(avg)




/* 3 */

min = numbers.reduce(function (min, curr){
    return (curr<min)?curr:min

});
squareRootOfMin = min**(1/2);
console.log(squareRootOfMin)

/* 4 */
newData = numbers.filter((curr) => curr);


/*

5- Find the sum of the  square root values of all the even elements in the numbers array.



*/
// sumOfLessThan10 = numbers.filter((curr) => (curr<10)? curr:0).reduce((sum, curr) => sum+(curr**(1/2)));
console.log("------------------------------------------------------")
sumOfLessThan10 = numbers.filter((curr) => (curr<10)? curr:0).reduce(sq, 0);
function sq(sum, curr,i ){
    console.log(i)
    console.log(curr)    
    console.log(sum)    
    console.log("**")
    return  sum +curr**(1/2)
}
console.log(sumOfLessThan10)