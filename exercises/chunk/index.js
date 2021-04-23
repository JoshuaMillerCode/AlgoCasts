// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    baseArr = []
    let loop;
    if(size === 1){
        loop = array.length
    } else if(array.length % size === 0){
        loop = size
    } else if (array.length % size !== 0){
        loop = Math.ceil(array.length / size);
    } 
    console.log(loop)
    for(i = 0; i < loop; i++) {
        baseArr.push(array.splice(0, size)) 
        if(array.length < size){
            size = array.length;
        }    
    }
    
    return baseArr;
}

// chunk([1,2,3,4,5,6,7,8,9,10], 2)


module.exports = chunk;
