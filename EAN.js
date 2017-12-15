const Random = require('./Random.js');

const EAN = function(){

    let sysCode= makeSysCode();//3 digits
    let manCode = String(Random().digit(5));//5 digits
    let proCode= String(Random().digit(4));//4 digits
    let checkDigit = check();
    let code = sysCode+manCode+proCode;



    function makeSysCode(){
        //create this function
        let r= Random().discreteRangeIn(1,8);
        if(r==1){
            return "750"
        }
        if(r==2){
            return "690"
        }
        if(r==3){
            return "471"
        }
        if(r==4){
            return "569"
        }
        if(r==5){
            return "520"
        }
        if(r==6){
            return "622"
        }
        if(r==7){
            return "729"
        }
        if(r==8){
            return "744"
        }
    }

    function check(){
        //create this function
        let code = sysCode+manCode+proCode;

        let sum = 0;
        for(let c=0;c<12;c++){
            if(c%2 ==0){
                sum += 1*code[c];
            }
            else{
                sum += 3*code[c];
            }
        }
    //    console.log("the sum is ="+sum);
        let remainder = sum %10;
        if(remainder == 0){
            return 0;
        }
        return 10-remainder;
    }

    function read(){
        //create this function
        return sysCode+manCode+proCode+"-"+checkDigit
    }
    return {sysCode,manCode,proCode,checkDigit,read,code};

};

function test(){
    let e = new EAN();
    console.log(e.code);

}

//test();
module.exports = EAN;
