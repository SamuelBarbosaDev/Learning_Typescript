class Calculator{
    static sum(x:number, y:number): number{
        return x + y
    }
    static division(x:number, y:number): number{
        return x / y
    }
    static multiplication(x:number, y:number): number{
        return x * y
    }
}

console.log(Calculator.sum(5,5))