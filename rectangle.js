// your code, here

class Rectangle{
  constructor(width,height){
    this.width = width;
    this.height = height || width;
  }
  area(){
    return this.width * this.height;
  }
}

console.log(new Rectangle(5));
console.log(new Rectangle(9).area());
