document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.ver-mais');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const livroPage = button.getAttribute('data-livro');
            window.location.href = livroPage;
        });
    });
});
