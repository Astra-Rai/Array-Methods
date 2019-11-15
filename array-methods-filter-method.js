
//array name items
//arrau contains four objects


const items = [
 
      {name: 'Mac Pro',     price: 1300 }, 
      {name: 'Keyboard',    price: 40 },
      {name: 'Book',        price: 65 }, 
      {name: 'Love',        price: 2000000 } 
]


/*use filter method to print items in arrray
The filter() method creates a new array with all elements that pass the test implemented by the provided function.

*/

const filteredItems = items.filter((item) =>{
  //return object with price lower than 100
      return item.price <=100
})

console.log(filteredItems)