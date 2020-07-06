(function(){

    // bootstrap4 navbar toggler
    var btn = document.getElementById('navbar-toggler');
    if (!btn){
        return;
    }

    var navbar = document.getElementById('navbar');
    if (!navbar){
        return;
    }

    btn.addEventListener('click', function(){
        navbar.classList.toggle('show');
    });
})();

(function(){
    document.querySelectorAll('.alert-dismissible').forEach(function(el){
        el.querySelector('button.close').addEventListener('click', function(){
            el.style.display = 'none';
        });
    });
})();