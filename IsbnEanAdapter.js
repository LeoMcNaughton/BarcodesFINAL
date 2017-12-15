const ISBN = require("./ISBN.js");
const EAN = require("./EAN.js");

function IsbnEanAdapter(isbnOBJ){
    //create function here
    const code="979"+isbnOBJ.code

    function check(){
        //create this function
        const sum = 0;
        for(let c=0;c<12;c++){
            if(c%2 ==0){
                sum += 1*code[c];
            }
            else{
                sum += 3*code[c];
            }
        }
        //console.log("the sum is ="+sum);
        const remainder = sum %10;
        if(remainder == 0){
            return 0;
        }
        return 10-remainder;
    }
    const checkDigit = check();
    function read(){
        return code+"-"+checkDigit;
    }


    return {code,checkDigit,read};
}

function test(){
    const temp = new ISBN();
    const a = new IsbnEanAdapter(temp);
    console.log(a.read());
}

test();
module.exports = IsbnEanAdapter;
