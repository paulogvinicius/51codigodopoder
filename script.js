// Lógica do FAQ (Modificada para casar com as classes do HTML)
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const item = button.parentElement;
        const answer = button.nextElementSibling;
        const chevron = button.querySelector('.chevron');
        
        // Verifica se já está ativo
        const isActive = item.classList.contains('active');
        
        // Fecha todos os outros antes de abrir o atual (opcional, gera visual limpo)
        document.querySelectorAll('.faq-item').forEach(i => {
            i.classList.remove('active');
            i.querySelector('.faq-answer').style.maxHeight = '0';
            i.querySelector('.chevron').style.transform = 'rotate(45deg)';
        });

        if (!isActive) {
            item.classList.add('active');
            answer.style.maxHeight = answer.scrollHeight + 'px';
            chevron.style.transform = 'rotate(-135deg)';
        }
    });
});

// Smooth Scroll (Rolagem suave dos links internos)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if(targetId !== '#') {
            e.preventDefault();
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});