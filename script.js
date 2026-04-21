var dicasParagraph = document.getElementById('dicas-paragraph');
var toggleDicasButton = document.getElementById('toggle-dicas');
var toggleTemaButton = document.getElementById('toggle-tema');
var highlightGalleryButton = document.getElementById('highlight-gallery');
var messageElement = document.getElementById('message');
var gallery = document.querySelector('.gallery');
var bodyElement = document.body;
var clickCount = 0;
var galeriaDestacada = false;

function mostrarMensagem(texto) {
    messageElement.textContent = texto;
}

function mudarDicas() {
    if (dicasParagraph.style.display === 'none') {
        dicasParagraph.style.display = 'block';
        mostrarMensagem('Dicas visíveis');
    } else {
        dicasParagraph.style.display = 'none';
        mostrarMensagem('Dicas ocultas');
    }
}

function mudarTema() {
    if (bodyElement.className === 'dark-theme') {
        bodyElement.className = '';
        mostrarMensagem('Tema claro ativado');
    } else {
        bodyElement.className = 'dark-theme';
        mostrarMensagem('Tema escuro ativado');
    }
}

function destacarGaleria() {
    var fotos = gallery.getElementsByTagName('img');
    if (galeriaDestacada) {
        for (var i = 0; i < fotos.length; i++) {
            fotos[i].style.border = '';
        }
        galeriaDestacada = false;
        mostrarMensagem('Destaque da galeria removido');
    } else {
        for (var i = 0; i < fotos.length; i++) {
            fotos[i].style.border = '4px solid #ffcc00';
        }
        galeriaDestacada = true;
        mostrarMensagem('Galeria destacada');
    }
}

function clicarGaleria(event) {
    if (event.target.tagName === 'IMG') {
        if (event.target.style.border === '4px solid #ffcc00') {
            event.target.style.border = '';
            mostrarMensagem('Foto desmarcada');
        } else {
            event.target.style.border = '4px solid #ffcc00';
            mostrarMensagem('Foto destacada');
        }
        clickCount = clickCount + 1;
    }
}

toggleDicasButton.addEventListener('click', mudarDicas);
toggleTemaButton.addEventListener('click', mudarTema);
highlightGalleryButton.addEventListener('click', destacarGaleria);
gallery.addEventListener('click', clicarGaleria);
gallery.addEventListener('mouseenter', function() {
    mostrarMensagem('Passe o mouse sobre uma foto');
});
gallery.addEventListener('mouseleave', function() {
    mostrarMensagem('Use os botões para interagir');
});
