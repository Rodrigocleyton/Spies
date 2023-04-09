
const { createSandbox } = require("sinon")
const sinon = createSandbox()
const Fibonacci = require("./fibonacci")
const assert = require("assert");





;(async () =>{

    const fibonacci = new Fibonacci()

    {
        const spy = sinon.spy(
        //instancia
        fibonacci,
        //funcao
        fibonacci.execute.name
        )



        for(const sequencia of fibonacci.execute(3)) { }
        const expectedCallCount = 4
        assert.deepStrictEqual(spy.callCount, expectedCallCount)

        //console.log('spy', spy.getCalls())
       

    }

    {
        const fibonacci = new Fibonacci()
        const spy = sinon.spy(
            //instancia
            fibonacci,
            //funcao
            fibonacci.execute.name
            )

        const results = [...fibonacci.execute(5)]
        const expectedCallCount = 6
        assert.deepStrictEqual(spy.callCount, expectedCallCount)

          const { args } =spy.getCall(2) 
          const expectedParams = [3,1,2]
          assert.deepStrictEqual(args, expectedParams, "Os arrays não saõ iguais!")

          const expectedResults = [0,1,1,2,3]
          assert.deepStrictEqual(results, expectedResults, "Os arrays não são iguais")


    }



})()