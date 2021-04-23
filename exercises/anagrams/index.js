// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    str1 = stringA.replace(/[^a-zA-Z ]/g, "");
    str2 = stringB.replace(/[^a-zA-Z ]/g, "");
    arr1 = str1.toLowerCase().split(' ').join('').split('');
    arr2 = str2.toLowerCase().split(' ').join('').split('');
    const check = []
    arr1.map((el) => {
        if(arr2.includes(el)) {
            check.push(true)
        } else {
            check.push(false)
        }
    }) 

    if(check.includes(false)){
        return console.log(false)
    } else {
        return console.log(true)
    }
}


module.exports = anagrams;
