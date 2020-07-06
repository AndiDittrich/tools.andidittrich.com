// character classes
var cc_special = ['#', '.', ':', ',', ';', '-', '_', '+', '~', '*', '?', '}', '=', ']', ')', '[', '(', '{', '/', '&', '%', '$', '§', '!', '<', '>'];
var cc_numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var cc_general_uc = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',      'J', 'K', 'L', 'M', 'N',      'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var cc_general_lc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',      'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var cc_nato = ['ALFA','BRAVO','CHARLIE','DELTA','ECHO','FOXTROT','GOLF','HOTEL','INDIA','JULIETT','KILO','LIMA','MIKE','NOVEMBER','OSCAR','PAPA','QUEBEC','ROMEO','SIERRA','TANGO','UNIFORM','VICTOR','WHISKEY','XRAY','YANKEE','ZULU'];
var cc_numberstext = ['ZERO', 'ONE', 'TWO', 'THREE', 'FOUR', 'FIVE', 'SIX', 'SEVEN', 'EIGHT', 'NINE'];
var cc_greek = ['ALPHA', 'BETA', 'GAMMA', 'DELTA', 'EPSILON', 'ZETA', 'ETA', 'THETA', 'IOTA', 'KAPPA', 'LAMBDA', 'MU', 'NU', 'XI', 'OMICRON', 'PI', 'RHO', 'SIGMA', 'TAU', 'UPSILON', 'PHI', 'CHI', 'PSI', 'OMEGA'];
var cc_az_uc = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var cc_az_lc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var cc_alpha = cc_numbers.concat(cc_az_uc, cc_az_lc);
var cc_alphaspecial = cc_numbers.concat(cc_alpha, cc_special);

var cc_leetspeak_transform = {
    A: ['4', '@'],
    B: ['8'],
    C: ['('],
    D: null,
    E: ['3', '€', '&'],
    F: null,
    G: ['6', '9', '&'],
    H: ['4', '#'],
    I: ['1', '!'],
    J: null,
    K: null,
    L: ['1'],
    M: null,
    N: null,
    O: ['0'],
    P: null,
    Q: null,
    R: null,
    S: ['5', '$'],
    T: ['7', '+'],
    U: null,
    V: null,
    W: null,
    X: null,
    Y: null,
    Z: ['2'],
};

// combined classes
var cc_general = cc_general_uc.concat(cc_general_lc);
var cc_all = cc_general.concat(cc_numbers).concat(cc_special);
var cc_words = cc_greek.concat(cc_nato).concat(cc_numberstext);

// Helper
var getRandomByClass = (function(n, e){
    var c = '';
    for (var i=0;i<n;i++){
        c += e[getRandomIntInclusive(0, e.length-1)];
    }
    return c;
});
var getRandomNumbers = (function(n){
    return getRandomByClass(n, cc_numbers);
});
var getRandomSpace = (function(n){
    return getRandomByClass(n, cc_special);
});
var getRandomLetter = (function(n){
    return getRandomByClass(n, cc_general);
});
var getRandomSign = (function(n){
    return getRandomByClass(n, cc_all);
});


// shortcut
var _CC = getRandomByClass;