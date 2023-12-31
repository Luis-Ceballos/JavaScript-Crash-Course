/* A function that takes a number from 0 to 5 and returns the ­ English
word for that number. For example, 1 should return "one". Hint: use an
array to define the mapping from numbers to strings. */

function numberConversion(n) {
    if (n === 0) {
        console.log('Zero');
    } else if (n === 1) {
        console.log('One');
    } else if (n === 2) {
        console.log('Two');
    } else if (n === 3) {
        console.log('Three');
    } else if (n === 4) {
        console.log('Four');
    } else if (n === 5) {
        console.log('Five');
    }
}

//----------------------------------------------------------------

let validInputs = [0, 1, 2, 3, 4, 5];
let returnValues = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five'];

let numberConversion2 = function(n) {
    if (n === n[0]) {
        return returnValues[0];
    } else if (n === n[1]) {
        return returnValues[1];
    } else if (n === n[2]) {
        return returnValues[2];
    } else if (n === n[3]) {
        return returnValues[3];
    } else if (n === n[4]) {
        return returnValues[4];
    } else if (n === n[5]) {
        return returnValues[5];
    }
};

//----------------------------------------------------------------

const numberConversion3 = n => {
    if (n === n[0]) {
        return returnValues[0];
    } else if (n === n[1]) {
        return returnValues[1];
    } else if (n === n[2]) {
        return returnValues[2];
    } else if (n === n[3]) {
        return returnValues[3];
    } else if (n === n[4]) {
        return returnValues[4];
    } else if (n === n[5]) {
        return returnValues[5];
    }
};



/* A function with no ­ parameters that prints how many times it’s been
called. Hint: define a variable outside of the function to keep track of the
number of calls, like we did in the “Side Effects” section on page 77. */


function functionCounter() {

}




/* A function that prints the current date and time. Hint: you can get the
current date and time with new Date(). */


function dateTime() {

}
