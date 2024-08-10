function mincost(arr)
{ 
//write your code here
// return the min cost
	const brr = [];
arr.sort((a, b) => {
  a - b;
});

arr.reduce((value, item) => {
  value = value + item;

  brr.push(value);
  return value;
});
   let a=0;
  brr.forEach((value)=>{
    a = a+value;
      

  })
  console.log(a);
  
}

module.exports=mincost;
