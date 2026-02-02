
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

//////////////////////////////////////////////////////////////////////////////

let temperatures = [18, 21, 15, 22, 19, 24, 20, 16, 23, 17];
let sum = 0;
let mid = 0;
let hotTemperature = 0;
let tempMax = temperatures[0];
let tempMin = temperatures[0];

for (let i = 0; i < temperatures.length; i++) {

    sum += temperatures[i];

    if (temperatures[i] >= 20) {
        hotTemperature ++
    }

    if (temperatures[i] < tempMin) {
        tempMin = temperatures[i];
    }

    if (temperatures[i] > tempMax) {
        tempMax = temperatures[i];
    }
    
}

mid = sum / temperatures.length;

console.log(sum);
console.log(mid);
console.log(hotTemperature);
console.log(tempMax);
console.log(tempMin);

/////////////////////////////////////////////////////////////////////////////////////

let classeA = [12, 15, 9, 18, 14];
let classeB = [10, 17, 8, 20, 13, 16];
let classeC = [14, 11, 19, 7, 15, 12];


function calcule(arr) {

    let notesSum = 0;
    let notesMid = 0;
    let goodNotes = 0;
    let notesMin = arr[0];
    let notesMax = arr[0];

    for (let i = 0; i < arr.length; i++) {

        notesSum += arr[i];

        if (arr[i] >= 15) {
        goodNotes ++
        }

        if (arr[i] < notesMin) {
        notesMin = arr[i];
        }

        if (arr[i] > notesMax) {
        notesMax = arr[i];
        }
    
    }

    notesMid = notesSum / arr.length;

    console.log(notesSum);
    console.log(notesMid);
    console.log(goodNotes);
    console.log(notesMax);
    console.log(notesMin);
}

calcule(classeA);
calcule(classeB);
calcule(classeC);

/////////////////////////////////////////////////////////////////////////////////////////

let vente = [120, 150, 90, 200, 175, 130, 160, 95, 180, 110, 140, 210, 125, 170];
let venteSum = 0;
let venteMid = 0;
let venteMin = vente[0];
let venteMax = vente[0];
let goodDay = 0;
let badDay = 0;
let normalDay = 0;

for (let i =0; i < vente.length; i++) {

    venteSum += vente[i];

    if (vente[i] < venteMin) {
        venteMin = vente[i];
    }

    if (vente[i] > venteMax) {
        venteMax = vente[i];
    }

    if (vente[i] > 150) {
        goodDay++
    }

    if (vente[i] < 100) {
        badDay++
    }

    if (vente[i] >= 100 && vente[i] <= 150) {
        normalDay++
    }

}

venteMid = venteSum / vente.length;

console.log(venteSum);
console.log(venteMid);
console.log(venteMin);
console.log(venteMax);
console.log(goodDay);
console.log(normalDay);
console.log(badDay);

/////////////////////////////////////////////////////////////////////////////////////////

let nombres = [3, 7, 2, 9, 12, 5, 8];
let paire = [];
let nombresFois2 = [];

for (let i = 0; i < nombres.length; i++) {

    if (nombres[i] % 2 == 0) {
        paire.push(nombres[i]);
    }

    let newNumb = nombres[i] * 2;
    nombresFois2.push(newNumb);
}

console.log(nombres);
console.log(paire);
console.log(nombresFois2);

//////////////////////////////////////////////////////////////////////////////////////////

const etage = 10;

for (let i = 0; i <= etage; i++) {
    let line = "";

    for (let s = 0; s < etage - i; s++) {       // a chaque ligne on retire l'index de celle-ci au nombre total d'etage. 
        line += " ";
    }

    for (let j = 0; j < i * 2 - 1; j++) {       // a chaque index de ligne on double les etoile - 1 pour faire une suite paire. 1..3..5
        line += "*";
    }
    console.log(line);
    
}

for (let i = etage; i >= 0; i--) {              // inversé le sens de la piramide
    let line = "";

    for (let s = 0; s < etage - i; s++) {
        line += " ";
    }

    for (let j = 0; j < i * 2 - 1; j++) {
        line += "*";
    }
    console.log(line);
    
}




