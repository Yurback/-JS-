class Rectangel {
    constructor(width = 20, height = width) {
        this.width = width;
        this.height = height;
    }
    calcArea() {
        return this.width * this.height;
    }
}


let rect = new Rectangel();
console.log(rect.calcArea());

function up(a,b=0,c=0,) {
    console.log(isNaN(a) || isNaN(b) || isNaN(c));
    console.log(parseInt(b));
    console.log();
    return ((isNaN(a) || isNaN(b) || isNaN(c))  ) ? parseInt(a) + (parseInt(b) || 0) + parseInt(c) : a+b+c;
}


let g = [20,40,30], c=[10,"",20];


console.log(up(10,"",1));

// console.log(up(...g));

// console.log(up(...c));