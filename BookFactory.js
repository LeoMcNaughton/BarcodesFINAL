const ISBN = require("./ISBN.js");
const EAN = require("./EAN.js");

const BookFactory = function (){


    function createBook(pubYear){
        //create this function
       if(pubyear<2007){
           return ISBN;
       }
       else{
           return EAN;
       }
    }

    return {createBook};
}

module.exports = BookFactory;
