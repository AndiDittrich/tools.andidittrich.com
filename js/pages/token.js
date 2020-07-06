(function(module){
    if (!document.getElementById('module-' + module)){
        return;
    }

    var appendNTimes = (function(n, cb, args){
        var buffer = '';

        // call the function n-times with array of given args
        for (var i=0;i<n;i++){
            buffer += cb.apply(this, args) + '\n';
        }
        return buffer;
    });

    // wordpress secrets
    var wpSecrets = (function(){
        var keys = ['AUTH_KEY', 'SECURE_AUTH_KEY', 'LOGGED_IN_KEY', 'NONCE_KEY', 'AUTH_SALT', 'SECURE_AUTH_SALT', 'LOGGED_IN_SALT', 'NONCE_SALT'];
        var buffer = '';

        // call the function n-times with array of given args
        for (var key in keys){
            buffer +=  'define(\'' + key + '\', \'' + getRandomByClass(64, cc_alphaspecial) + '\');\n';
        }
        
        return buffer;
    });

    // presets
    document.getElementById('btn-generate').addEventListener('click', function(){
        // output
        var output = '';

        // number of password suggestions per run
        switch (document.getElementById('presetList').value){
            // algorithm selection
            case 't20':
                output =  appendNTimes(10, getRandomByClass, [20, cc_alpha]);
                break;
            case 't32':
                output =  appendNTimes(10, getRandomByClass, [32, cc_alpha]);
                break;
            case 't64':
                output =  appendNTimes(10, getRandomByClass, [64, cc_alpha]);
                break;
            case 's20':
                output =  appendNTimes(10, getRandomByClass, [20, cc_alphaspecial]);
                break;
            case 's32':
                output =  appendNTimes(10, getRandomByClass, [32, cc_alphaspecial]);
                break;
            case 's64':
                output =  appendNTimes(10, getRandomByClass, [64, cc_alphaspecial]);
                break;
            case 'wp':
                output =  wpSecrets();
                break;
        }

        document.getElementById('output').value = output;
    });
})('tokens');

