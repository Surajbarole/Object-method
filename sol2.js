// # Problem 2

// ### **Products Cart Object**

// - Given an input of products in the below format (Name Quantity Price)
// - Input

// ```
// ["Rice", "Dal", "Salt"]
// [2, 3, 1]
// [60, 50, 20]

// ```

// - Create an object with the key `data` which is an array of objects with the format `{name: "Rice", quantity: 2, price: 60}`
// - The object must have a method called `total` which calculates the total values of items (multiplying quantity of each with its price)
// - Sample output for the above case `290`

let arr=[];

function kirana(names,quantity,price){
  let obj={}
obj.name=names;
obj.quantitys=quantity;
obj.prices=price;
arr.push(obj);
}

kirana("Rice",2,60);
kirana("Dal",3,50);
kirana("Salt",1,20)
 //console.log(arr)

for(let i=0;i<=arr.length-1;i++){
  let sum=arr[i].quantitys*arr[i].prices
  console.log(arr[i].name,sum)
  
}

