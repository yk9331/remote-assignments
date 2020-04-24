function calculate(args) {
    let result;
    if (args.op === "+") {
        result = args.n1 + args.n2;
    } else if (args.op === "-") {
        result = args.n1 - args.n2;
    } else {
        result = "Not supported";
    }
    return result;
}

// Try to call calculate function correctly
//By JSON literal
console.log(`Result by JSON Object: ${calculate({ n1: 1, n2: 2, op: '+' })}`);


//By class
class calculateObject{
    constructor(n1, n2, op) {
        this.n1 = n1;
        this.n2 = n2;
        this.op = op;
      }
}
const args = new  calculateObject(1, 2, '+');
console.log(`Result by class: ${calculate(args)}`);


/*For example, if we have an add function like this: 
    function add(args){
        return args.n1+args.n2; 
        }
    We can call it by passing an object created by JSON literal: 
        add({n1:3, n2:4}); // your first way 
    You should find another way to create a proper object.  
        // your second way
*/
