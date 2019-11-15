const items = [
 
      {name: 'Mac Pro',     price: 1300 }, 
      {name: 'Keyboard',    price: 40 },
      {name: 'Book',        price: 65 }, 
      {name: 'Love',        price: 2000000 }, 
      {name: 'light',       price: 1000000}
]


/*
The map() method creates a new array with the results of calling a provided function on every element in the calling array.

useful for when you want to get the names, keys, etc in an object and return in a single array

*/


const filteredItems = items.map((item) =>{
  //return name of each object in array using.notation
      return item.name;
})

//output:["Mac Pro", "Keyboard", "Book", "Love", "light"]  
console.log(filteredItems);