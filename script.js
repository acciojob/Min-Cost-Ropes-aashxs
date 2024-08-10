function mincost(arr)
{ 
//write your code here
// return the min cost
	const brr=[];
while(arr.length>1){
    arr.sort((a,b)=>{
        return(a-b)})
        console.log(arr);
        let min=arr[0]+arr[1];
        brr.push(min);
        arr.shift();
        arr.shift();
        arr.push(min);
        console.log(arr);
    }
    const mincost=brr.reduce((acc,item)=>{
        
        acc=acc+item;
        return acc;
        
    })
	 return mincost;
		
	}
module.exports=mincost;
