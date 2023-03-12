//assigns initial value of ["Milo", "Otis", "Garfield"]
const cats = ["Milo", "Otis", "Garfield"];

//appends a cat to the end of the cats array
function destructivelyAppendCat(name){
    return cats.push(name);
}
destructivelyAppendCat('Ralph');

//prepends a cat to the beginning of the cats array
function destructivelyPrependCat(name){
    return cats.unshift(name);
}
destructivelyPrependCat("Bob");

//removes the last cat from the cats array
function destructivelyRemoveLastCat(){
    return cats.pop();
}
destructivelyRemoveLastCat();

//removes the first cat from the cats array
function  destructivelyRemoveFirstCat(){
    return cats.shift();
}
destructivelyRemoveFirstCat();

//appends a cat to the cats array and returns a new array, leaving the cats array unchanged
function appendCat(name){
    return [...cats, name];
}
appendCat('Broom');

//prepends a cat to the cats array and returns a new array, leaving the cats array unchanged
function prependCat(name){
    return [name, ...cats];
}
prependCat("Arnold");

//removes the last cat in the cats array and returns a new array, leaving the cats array unchanged
function  removeLastCat(){
    return cats.slice(0, cats.length - 1);
}
removeLastCat();

// removes the first cat from the cats array and returns a new array, leaving the cats array unchanged
function removeFirstCat(){
    return cats.slice(1);
}
removeFirstCat();