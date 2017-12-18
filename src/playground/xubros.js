
##frontend

array = linkedlist
[linkedlist]
//linkedList

//array management
array = [2 ,
  3 ,
  293,
  'adsasd',
]

undefined
null 

'6' == 6 //true
6 === 6

call vs apply, function.prototype

.map((a)=>{
  return a*2
})

const list = [1,2,3,4,4,5,6]
remove all even numbers
even = false

list.filter((a)=>{
  return a%2 !== 0
})


const list = [
  {
    key: 'hello',
    value: 1
  },
  {
    key: 'world',
    value: 2
  }
]

//Output as {'hello':1, 'world': 2}

const reducer = list.reduce((accumulator, currentValue) => {
  return 
})

const array1 = [1, 2, 3, 4];

// 1 + 2 + 3 + 4
console.log(array1.reduce((accumulator, currentValue) => accumulator + currentValue));
// expected output: 10