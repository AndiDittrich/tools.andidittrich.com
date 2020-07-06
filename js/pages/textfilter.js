(function(module){
    if (!document.getElementById('module-' + module)){
        return;
    }

    var showError = (function(msg){
        var el = document.getElementById('alert-message');
        el.querySelector('.message-text').innerText = msg;
        el.style.display = 'block';
    });

    // apply rules
    var applyRegexFilters = (function(text, rules){
        // convert linebreaks; drop empty lines
        text = text.replace(/\r\n/g, "\n").replace(/^\s*$/gm, '').replace(/\n+/g, "\n");
        rules = rules.replace(/\r\n/g, "\n").replace(/^\s*$/gm, '').replace(/\n+/g, "\n").split("\n");

        rules.forEach(function(rule){
            
            // comment found ?
            if (rule && rule.substring(0, 2) == '--'){
                return;
            }

            // match regex|modifier|replace
            var m = /^(.*?) >([ gmiy]*) > (.*?)$/g.exec(rule);

            // check length
            if (m == null || m.length != 4){
                showError('invalid format in rule : ' + rule);
                return;
            }

            // create new regex from string
            var expr = new RegExp(m[1], m[2].trim());

            // check expr
            if (!expr){
                showError(rule);
            }

            // apply regex
            text = text.replace(expr, m[3]);
        });

        return text;
    });

    // get elements
    var elRegex = document.getElementById('text-regex');
    var elInput = document.getElementById('text-input');
    var elOutput = document.getElementById('text-output');

    // load demo data
    document.getElementById('btn-example').addEventListener('click', function(){
        elInput.value = document.getElementById('exampleInput').innerText.trim();
        elRegex.value = document.getElementById('exampleRegex').innerText.trim();
    });

    // run transform onclick
    document.getElementById('btn-run').addEventListener('click', function(){
        elOutput.value = applyRegexFilters(elInput.value, elRegex.value);
    });


})('textfilter');

