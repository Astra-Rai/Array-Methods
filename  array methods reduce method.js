const items =[
  
  
  {name: 'Bike',      price: 100   },
  {name: 'Tv',        price: 200   },
  {name: 'Album',     price: 10    },
  {name: 'Book',      price: 5     },
  {name: 'Phone',     price: 500   },
  {name: 'Computer',  price: 1000  },
  {name: 'Computer',  price: 25    }  
]


/*
The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])

*/

const total = items.reduce((currentTotal, item) => {
  return item.price + currentTotal
}, 0)

console.log(total);