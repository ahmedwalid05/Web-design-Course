/*
Add the required import statements.
*/
import {Pizza, ThickCrust, StuffedCrust, PizzaOrder,pizzas,custID  } from "./pizza.mjs";

let tops=['cheese', 'olives'];
let p1 = new Pizza('Margreeta', 2, tops);
let tops1=['cheese', 'Peperoni - HALAL'];
let p2 = new ThickCrust('Margreeta', 1, tops1);
let p3 = new StuffedCrust('Margreeta', 2, tops1);
let o1 = new PizzaOrder(pizzas, custID);
console.log(o1.pizzaCount);
console.log(o1.orderPrice);
console.log(o1.maxCaloryPizza);
console.log(o1.totalCalories);
console.log(o1.pizzasBySize(1));
console.log(o1.orderDetails());