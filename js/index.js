window.onscroll = function () {
    const button = document.getElementById("backToTopBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
};


function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function simularEnvio() {
    const button = document.getElementById('submitButton');
    
    button.classList.add('loading');
    button.disabled = true;
    
    button.innerHTML = 'Enviando... <div class="spinner-border spinner-border-sm" role="status"></div>';

    setTimeout(function() {
        button.classList.remove('loading');
        button.disabled = false;
        button.innerHTML = 'Enviar';
        alert('Formulário enviado com sucesso!');
    }, 3000);
}
