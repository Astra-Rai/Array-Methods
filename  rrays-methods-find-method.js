//array name items
//array contains four objects
const items = [
 
      {name: 'Mac Pro',     price: 1300 }, 
      {name: 'Keyboard',    price: 40 },
      {name: 'Book',        price: 65 }, 
      {name: 'Love',        price: 2000000 }, 
      {name: 'light',       price: 1000000}
]

/*The Array.find() is an inbuilt function in JavaScript which is used to get the value of the first element in the array that satisfies the provided condition.It checks all the elements of the array and whichever the first element satisfies the condition is going to print

If searched element doesn't exist, undefined is returned
*/

const foundItem = items.find((item) =>{
  //return the first item that is true
      return item.name === 'Book';
})

//returns object with the string book 
console.log(foundItem);