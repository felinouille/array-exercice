
console.log("test insertion");


function insertion(arr) {
    for (let i = 1; i < arr.length; i++) {
        let j = i
            while (j > 0 && arr[j - 1] > arr[j]) {
                let temp = arr[j];
                arr[j] = arr[j-1];
                arr[j-1] = temp;
                j--;
                
            }
        
    }
    return arr;
    
}
console.log(insertion([1,6,5,4,9,2,7,6,5]));


console.log("test bubule");


function bubule(arr) {
    let swap = true
    while (swap) {
        swap = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr [i + 1] = temp;
                swap = true;
            }
    
        }
        
    }
    return arr;


}

console.log(bubule([2,6,8,4,2,7,9,3,5]));