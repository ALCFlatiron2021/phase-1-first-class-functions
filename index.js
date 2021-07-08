function receivesAFunction (cb){
    return cb()
}
receivesAFunction();

function returnsANamedFunction(){
    return function test(){

    }
}

function returnsAnAnonymousFunction() {
    return function() {

    }
}