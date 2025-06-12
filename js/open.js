const conteudos = document.querySelectorAll('.Principal');
const showConteudos = document.querySelectorAll('.Hide');

conteudos.forEach((principal, index) => {
  principal.addEventListener('click', () => {
    principal.classList.add('hide');

    setTimeout(() => {
      principal.style.display = 'none';

      const toShow = showConteudos[index]; 

      if (toShow) {
        toShow.style.display = 'block';

        void toShow.offsetWidth;

        toShow.classList.remove('hide'); 
        toShow.classList.add('show');
        
      }
    }, 500); 
  });
});