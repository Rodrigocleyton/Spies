
const { createSandbox } = require("sinon")
const sinon = createSandbox()
const Fibonacci = require("./fibonacci")



const fibonacci = new Fibonacci()
;(async () =>{

    {
        for(const sequencia of fibonacci.execute(5))
        console.log({sequencia})
    }

})()