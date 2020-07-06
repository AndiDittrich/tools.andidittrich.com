(function(module){
    if (!document.getElementById('module-' + module)){
        return;
    }

    // presets
    document.getElementById('btn-pw-generate').addEventListener('click', function(){
        // output
        var output = '';

        // number of password suggestions per run
        for (var i=0;i<10;i++){
            switch (document.getElementById('presetList').value){
                // algorithm selection
                case 'n8':
                    output += getRandomNumbers(4) + '-' + getRandomNumbers(4);
                    break;
                case 'n12':
                    output += getRandomNumbers(4) + '-' + getRandomNumbers(4) + '-' + getRandomNumbers(4);
                    break;
                case 'i12':
                    output += getRandomLetter(5) +  getRandomNumbers(1) + getRandomSpace(1) + getRandomLetter(3) + getRandomNumbers(2);
                    break;
                case 'i16':
                    output += getRandomLetter(4) + getRandomNumbers(2) + getRandomSpace(2) + getRandomNumbers(2) + getRandomSpace(1) + getRandomLetter(3) +getRandomNumbers(2);
                    break;
                case 'i22':
                    output += getRandomLetter(4) + getRandomNumbers(2) + getRandomSpace(2) + getRandomLetter(6) + getRandomNumbers(3) + getRandomSpace(2) + getRandomNumbers(3);
                    break;
                case 's12':
                    output += getRandomLetter(1) + getRandomSign(11);
                    break;
                case 's18':
                    output += getRandomLetter(1) + getRandomSign(17);
                    break;
                case 's26':
                    output += getRandomLetter(1) + getRandomSign(25);
                    break;
                case 'h1':
                    output += _CC(1, cc_words) + getRandomSpace(1) + _CC(1, cc_words) + getRandomSpace(1) + getRandomLetter(1) + getRandomNumbers(2);
                    break;
                case 'h2':
                    output += _CC(1, cc_words).toLowerCase().capitalize() + _CC(1, cc_words) + getRandomSpace(1) + _CC(1, cc_words).toLowerCase().capitalize() + getRandomSpace(1) + getRandomNumbers(2) + _CC(1, cc_words) + getRandomNumbers(2) + getRandomLetter(2);
                    break;
                case 'h3':
                    output += _CC(1, cc_nato).rleetspeak() + getRandomSpace(1) + _CC(1, cc_words) + getRandomSpace(1) + getRandomLetter(1) + getRandomNumbers(2);
                    break;
                case 'h4':
                    output += _CC(1, cc_words).toLowerCase().rleetspeak().capitalize() + _CC(1, cc_nato).rleetspeak() + getRandomSpace(1) + getRandomLetter(4)  + getRandomSpace(1) + _CC(1, cc_words);
                    break;
            }

            // append line break
            output += "\n";
        }
        // set output
        document.getElementById('output').value = output;
    });
})('pwgen');

