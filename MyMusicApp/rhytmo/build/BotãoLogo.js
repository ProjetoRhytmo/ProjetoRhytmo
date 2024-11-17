const imagem = document.getElementById('imagem');
const opcoes = document.getElementById('opcoes');

imagem.addEventListener('mouseenter', () => {
  opcoes.style.display = 'block'; 
});

imagem.addEventListener('mouseleave', () => {
  setTimeout(() => {
    if (!opcoes.matches(':hover')) {
      opcoes.style.display = 'none'; 
    }
  }, 500);
});

opcoes.addEventListener('mouseenter', () => {
  opcoes.style.display = 'block'; 
});

opcoes.addEventListener('mouseleave', () => {
  opcoes.style.display = 'none'; 
});
