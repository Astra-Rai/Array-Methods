//array name items
//array contains four objects
const items = [
 
      {name: 'Mac Pro',     price: 1300 }, 
      {name: 'Keyboard',    price: 40 },
      {name: 'Book',        price: 65 }, 
      {name: 'Love',        price: 2000000 }, 
      {name: 'light',       price: 1000000}
]
/*For every item, print the name
The forEach() method executes a provided function once for each array element.
*/
items.forEach((item) =>{
  //return the content for every name in array
      console.log(item.name);
})

