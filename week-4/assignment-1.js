function delayedResult(n1, n2, delayTime, callback){
    setTimeout(function(){
        callback(n1 + n2)
    }, delayTime)
}

delayedResult(4, 5, 3000, function(result){
    console.log(result)
})

delayedResult(-5, 10, 2000, function(result){
    window.alert(result) //run in browser
})