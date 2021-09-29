function receivesAFunction(cb) {
    return cb();
}
receivesAFunction(function () {return "receives a function and calls it"})


function returnsANamedFunction() {
     return function name(){console.log("Something")}
}

function returnsAnAnonymousFunction() {
    return function () {console.log("Anonymous")} 
}

