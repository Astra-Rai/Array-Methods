const  items = [
  
  {name: 'paper',   price: 1},
  {name: 'pen',     price: 2},
  {name: 'folder',  price: 3},
  {name: 'pencil',  price: 4}
    
]
/*

-some method will return a boolean value of true or false
if there are items with a price less than or equal to three, return true

-The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value. 
*/
const hasInexpensiveItems = items.some((item) => {
    return item.price <=3;
})

console.log(hasInexpensiveItems);