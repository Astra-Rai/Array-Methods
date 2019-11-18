
const  items = [
  
  {name: 'paper',   price: 1},
  {name: 'pen',     price: 2},
  {name: 'folder',  price: 3},
  {name: 'pencil',  price: 4}
    
]
/*

The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value. 

check if any of the items are free, meaning item.price >0 
should rturn a boolean value of true if there are no free items

*/
const areAnyItemsFree = items.every((item) => {
    return item.price >0;
})

console.log(areAnyItemsFree);





