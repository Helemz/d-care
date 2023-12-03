const perfil = document.querySelector('.perfil');
const menu = document.querySelector('.dropdown-content');

perfil.onclick = () => {
    menu.classList.toggle('ativo');
}