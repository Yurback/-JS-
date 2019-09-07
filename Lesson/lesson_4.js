

function main(a,b) {
    let a = 4, b=5;
    console.log(this);
    function sum() {
        console.log(this);
        function s() {
            console.log(this);
            return a + b
        }
       
        return s();
    }
    console.log(sum());
} 

main(4,5);
main(5,5);
