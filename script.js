function mincost(arr)
{ 
//write your code here
// return the min cost
	const brr = [];
arr.sort((a, b) => {
  return (a - b);
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
 return a;
  
}

module.exports=mincost;
