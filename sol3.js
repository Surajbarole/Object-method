// # **Problem-3**

// ### Sales Total

// Write a function called `calculateSalesTotals()`
//  which returns an array with new two new keys (sale and total). The key 'sale' equals the calculated sale price based on the original price and the discount. The key 'total' equals the computed total based on stock, the original price and the discount. The default value would be 0.0.

//output like this
// [
//   {
//     item: "PS4 Pro",
//     original: 399.99,
//     sale: 399.99,
//     stock: 3,
//     total: 1199.97
//   },
//   {
//     discount: 0.1,
//     item: "Xbox One X",
//     original: 499.99,
//     sale: 449.991,
//     stock: 1,
//     total: 449.991
//   },
//   {
//     item: "Nintendo Switch",
//     original: 299.99,
//     sale: 299.99,
//     stock: 4,
//     total: 1199.96
//   },
//   {
//     discount: 0.8,
//     item: "PS2 Console",
//     original: 299.99,
//     sale: 59.99799999999999,
//     stock: 1,
//     total: 59.99799999999999
//   },
//   {
//     discount: 0.65,
//     item: "Nintendo 64",
//     original: 199.99,
//     sale: 69.9965,
//     stock: 2,
//     total: 139.993
//   }
// ]
//SAMPLE INPUT :



let arr=[];
function calculateSalesTotals(item,discount,original,sale,stock,total){
 let obj={}
  obj.items=item
  obj.disc=discount
  obj.origi=original
  obj.sal=sale
  obj.sto=stock
  obj.tot=total
  arr.push(obj)
}
calculateSalesTotals("PS4 Pro",0.7,399.9,399.9,3,1199.0)
calculateSalesTotals("Xbox One X",0.1,499.9,499.11,1,499.990)
calculateSalesTotals("Nintendo Switch",0.7,299.,399.9,1,1199.9)
calculateSalesTotals("PS2 Console",0.8,399.9,399.9,3,1199.0)
calculateSalesTotals("Nintendo 64",0.7,399.9,399.9,1,59.99776353)
calculateSalesTotals("Nintendo 64",0.65,199.9,69.9965,2,139.0)
console.log(arr)

