const table = [
    { letra: 'a', valor: 10 },
    { letra: 'b',valor: 11 },
    { letra: 'c',valor: 12 },
    { letra: 'd',valor: 13 },
    { letra: 'e',valor: 14 },
    { letra: 'f',valor: 15 },
    { letra: 'g',valor: 16 },
    { letra: 'h',valor: 17 },
    { letra: 'i',valor: 18 },
    { letra: 'j',valor: 19 },
    { letra: 'k',valor: 20 },
    { letra: 'l',valor: 21 },
    { letra: 'm',valor: 22 },
    { letra: 'n',valor: 23 },
    { letra: 'o',valor: 24 },
    { letra: 'p',valor: 25 },
    { letra: 'q',valor: 26 },
    { letra: 'r',valor: 27 },
    { letra: 's',valor: 28 },
    { letra: 't',valor: 29 },
    { letra: 'u',valor: 30 },
    { letra: 'v',valor: 31 },
    { letra: 'w',valor: 32 },
    { letra: 'x',valor: 33 },
    { letra: 'y',valor: 34 },
    { letra: 'z',valor: 35 },
];

// const primo = (n) => {
// 	if (n == 1) return false;
// 	for (var i = 2; i < n; i++) 
// 		if (n % i == 0) return false;
// 	return true;
// }

// const getPrimo = () => {
//     var i = false;
//     while (!i) {
//         const random = parseInt(Math.random() * (20 - 2) + 2);
//         if (primo(random)) return random;
//     }
// }

const coprimo = (n1, n2) => {
    var a1 = [];
    var a2 = [];

    for (var i = 1; i <= n1; i++)
        if (n1 % i == 0) a1.push(i)

    for (var i = 1; i <= n2; i++)
        if (n2 % i == 0) a2.push(i)

    for (var i in a1)
        for (var j in a2)
            if (a1[i] != 1 || a2[j] != 1)
                if (a1[i] == a2[j]) return false
    return true
}

const calc_e = (phi) => {
    for (var i = 2; i < phi; i++)
        if (coprimo(i, phi)) return i;
}

const returnTableValue = (letra) => {
    for (var i in table) {
        if (table[i].letra == letra) return table[i].valor; 
    }
}

const returnTableLetter = (valor) => {
    for (var i in table) {
        if (table[i].valor == valor) return table[i].letra;
    }
}

// const p = getPrimo();
// const q = getPrimo();
// const n = p*q;
// const phi = (p-1)*(q-1);
// const e = calc_e(phi);
// const d = (2 * phi + 1) / e;
const p = 11;
const q = 13;
const n = p * q;
const phi = (p - 1) * (q - 1);
const e = calc_e(phi);
const d = (2 * phi + 1) / e;

const string2RSA = (m) => {
    var arrayRSA = new Array();
    for (var i = 0; i < m.length; i++) {
        const char = returnTableValue(m[i]);
        const c = Math.pow(char, e) % n;
        arrayRSA.push(c);
    }
    return arrayRSA.join(' ');
}

const RSA2String = (rsa) => {
    const arrayRSA = rsa.split(' ');
    var arrayString = new Array();
    for (var i in arrayRSA) {
        const c = arrayRSA[i];
        const m = Math.pow(parseInt(c), d) % n;
        arrayString.push(returnTableLetter(m));
    }
    return arrayString.join('');
}