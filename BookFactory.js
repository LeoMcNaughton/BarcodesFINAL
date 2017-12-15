const ISBN = require("./ISBN.js");
const EAN = require("./EAN.js");

const BookFactory = function (){

    function createBook(pubYear){
        //create this function
        if(pubYear<2007){
            return new ISBN();
        }
        else{
            return new EAN();
        }
    }

    return {createBook};
}
function test(){
    const e = new BookFactory();
    console.log(e.createBook(2006));

}
test()
module.exports = BookFactory;
