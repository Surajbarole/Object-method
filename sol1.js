// Problem-1 Rectangle Object

// Create a rectangle object with length and width properties
// Create two methods area and perimeter, that will return the area and perimeter of the rectangle

let rectangle={
   length:20,
   width:20,
 peremeter:function(){
   return 2*(this.length+this.width)
 },
  area:function(){
  return this.length*this.width
  }
};
let ans1=rectangle.peremeter();
let ans2=rectangle.area();
console.log("Peremeter of Rectangle is",ans1);
console.log("and")
console.log("Area of Rectangle is",ans2);
