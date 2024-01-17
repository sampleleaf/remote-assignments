function calculate(args){
    if(args.op === '+'){
        return args.n1 + args.n2
    }else if(args.op === '-'){
        return args.n1 - args.n2
    }else{
        return 'Not supported'
    }
}

console.log(calculate({n1:1, n2:6, op:'x'}))