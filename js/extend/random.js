function getRandomIntInclusive(min, max){
    // get a single random 32bit value
    var buffer = new Uint32Array(1);
    window.crypto.getRandomValues(buffer);

    // Math.random() emulation
    var normalizedValue = buffer[0] / (0xffffffff + 1);

    // get random number from normalized float value
    // @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#Getting_a_random_integer_between_two_values_inclusive
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(normalizedValue * (max - min + 1)) + min;
}