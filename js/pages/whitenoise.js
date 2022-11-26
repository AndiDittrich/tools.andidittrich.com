(function(module){
    if (!document.getElementById('module-' + module)){
        return;
    }

    // get canvas
    var canvas = document.getElementById('output');
    ctx = canvas.getContext("2d");

    // presets
    document.getElementById('btn-generate').addEventListener('click', function(){
        // set dimension
        var size = document.getElementById('presetList').value;
        console.log(size);
        canvas.width = parseInt(size);
        canvas.height = parseInt(size);

        for (var w=0;w<canvas.width;w++){
            // create large random value set
            const r = new Uint8Array(canvas.width*3);
            crypto.getRandomValues(r);

            for (var h=0;h<canvas.height;h++){
                ctx.fillStyle = "rgb(" + r[h*3] +", " + r[h*3+1] +", " + r[h*3+2] +")";
                ctx.fillRect(w, h, 1, 1);
            }
        }


    });
})('whitenoise');

