// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.

var students = [{ 
    'name' : 'Luca',
    'surname' : 'Ciprani',
    'age' : 28,
}]

// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.

for(let i = 0; i < students.length; i++){
    
    for(let key in students[i]) {
        var studentProperties = students[i][key];
        console.log(key + ' : ' + studentProperties);
    }
    console.log(students[i]);
}

// // Creare un array di oggetti di studenti.

let firstObject = {
    'name' : 'Marco',
    'surname' : 'Rossi',
    'age' : 26,
};

students.push(firstObject);
    
let secondObject = {
    'name' : 'Pietro',
    'surname' : 'gialli',
    'age' : 23,
};

students.push(secondObject);
    
// console.log(students);
    
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.

for(let i = 0; i < students.length; i++){
    
    for(let key in students[i]) {
        var studentProperties = students[i][key];
        console.log(key + ' : ' + studentProperties);
    }
    console.log(students[i]);
}

// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

setTimeout(function(){ 
    
    let enterName = prompt("inserisci il tuo nome");
    let enterSurname = prompt("inserisci il tuo cognome");
    let enterAge = parseInt(prompt("inserisci la tua età"));

    let thirdObject = {
        'name' : enterName,
        'surname' : enterSurname,
        'age' : enterAge
    };

    students.push(thirdObject);
    console.log(students);

}, 5000);
