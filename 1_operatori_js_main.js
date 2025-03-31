/* MAIN.JS - ESERCITAZIONE SELFWORK OPERATORI_1_JS MOD_6_AULAB*/

// DICHIARO LE VARIABILI CON DELLE LETTERE E LE INIZIALIZZO ASSEGNANDO LORO DEI VALORI E DELLE ESPRESSIONI.

    let a = 100;
    let b = 9;
    let c = 77;
    let d = 354;
    let e = 7.7875;

// HO UTILIZZATO LA COMBINAZIONE DI SOMMA DI COPPIE DI VARIABILI SU UN INSIEME DI 5 VARIABILI PER UN TOTALE DI 10 OPERAZIONI INSERITE NELLE RELATIVE VARIABILI.

    let somma1 = (a + b);
    let somma2 = (a + c);
    let somma3 = (a + d);
    let somma4 = (a + e);

    let somma5 = (b + c);
    let somma6 = (b + d);
    let somma7 = (b + e);

    let somma8 = (c + d);
    let somma9 = (c + e);
    let somma10 =(d + e);

// HO SOMMATO TUTTI I NUMERI E RICAVATO IL TOTALE
    let sommatot = (a + b + c + d + e);

//STAMPO TUTTE LE SOMME RICAVATE DALLE COBINAZIONI DI COPPIA DI ADDIZIONI.
    console.log('La somma dei numeri a + b  equivale a: ' + somma1);
    console.log('La somma dei numeri a + c  equivale a: ' + somma2);
    console.log('La somma dei numeri a + d  equivale a: ' + somma3);
    console.log('La somma dei numeri a + e  equivale a: ' + somma4 .toFixed(2)); // Fisso la virgola mobile alla seconda cifra decimale.
    console.log('La somma dei numeri b + c  equivale a: ' + somma5);
    console.log('La somma dei numeri b + d  equivale a: ' + somma6);
    console.log('La somma dei numeri b + e  equivale a: ' + somma7 .toFixed(4)); // Fisso la virgola mobile alla quarta cifra decimale.
    console.log('La somma dei numeri c + d  equivale a: ' + somma8);
    console.log('La somma dei numeri c + e  equivale a: ' + somma9 .toFixed(3)); // Fisso la virgola mobile alla terza cifra decimale.
    console.log('La somma dei numeri d + e  equivale a: ' + somma10 .toFixed(1)); // Fisso la virgola mobile alla prima cifra decimale.
    console.log('La somma totale di tutti i numeri è: ' + sommatot .toFixed(2));// Fisso la virgola mobile alla seconda cifra decimale.

//ESEGUO LA MEDIA TRA I NUMERI.

    let media = sommatot / 5;
    console.log(`La media tra i numeri a, b, c, d, ed e, equivale a: ${media}`);

// UTILIZZO UNA SECONDA FORMA PER ESEGUIRE LO STESSA OPERAZIONE PRECEDENTE.

    let stringa = `La media tra i numeri a, b, c, d, ed e, equivale a: `;
    console.log(stringa + media);


    console.log(typeof media);


