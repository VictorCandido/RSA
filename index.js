const primo = (n) => {
	if (n == 1) return false;
	for (var i = 2; i < n; i++) 
		if (n % i == 0) return false;
	return true;
}

const getPrimo = () => {
    var i = false;
    while (!i) {
        const random = parseInt(Math.random() * (20 - 2) + 2);
        if (primo(random)) return random;
    }
}

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


const p = getPrimo();
const q = getPrimo();
const n = p*q;
const phi = (p-1)*(q-1);
const e = calc_e(phi);
const d = (2 * phi + 1) / e;

const criptografada = string2RSA("ola");

const descriptografada = RSA2String(criptografada);