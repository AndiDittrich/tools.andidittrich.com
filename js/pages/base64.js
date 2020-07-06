(function(module){
    if (!document.getElementById('module-' + module)){
        return;
    }

    var showError = (function(msg){
        var el = document.getElementById('alert-message');
        el.querySelector('.message-text').innerText = msg;
        el.style.display = 'block';
    });

    // get elements
    var elInput = document.getElementById('text-input');
    var elOutput = document.getElementById('text-output');

    // load demo data
    document.getElementById('btn-example').addEventListener('click', function(){
        elInput.value = document.getElementById('exampleInput').innerText.trim();
    });

    // run transform onclick
    document.getElementById('btn-encode').addEventListener('click', function(){
        try {
            elOutput.value = btoa(elInput.value);
        }catch (e){
            showError(e);
        }
    });

    document.getElementById('btn-decode').addEventListener('click', function(){
        try{
            elOutput.value = atob(elInput.value);
        }catch (e){
            showError(e);
        }
    });

})('base64');

