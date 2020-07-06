String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

// random leetspeak
String.prototype.rleetspeak = function(){
    console.log(this);
    var chars = this.split('');

    for (var i=0;i<chars.length;i++){
        // transform probability 0.4
        if (getRandomIntInclusive(0, 100) < 60){
            continue;
        }

        // transform rules
        var rule = cc_leetspeak_transform[chars[i].toUpperCase()];

        // transform rule available ?
        if (rule){
            chars[i] = rule[getRandomIntInclusive(0, rule.length - 1)];
        }
    }

    return chars.join('');
}