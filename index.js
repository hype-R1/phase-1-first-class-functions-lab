
let receivesAFunction = (value) => value();

function returnsANamedFunction() {
    return function namedFunc() {
    console.log("returns my named function");
 }
}

 let  returnsAnAnonymousFunction = () => () => console.log(" anonymous function");
