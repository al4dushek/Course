// Функция для показа теста
function showTestOnly() {
    // Скрываем все секции кроме теста
    document.querySelectorAll('section').forEach(section => {
        section.style.display = section.id === 'test' ? 'block' : 'none';
    });
    
    // Прокручиваем к тесту
    document.getElementById('test').scrollIntoView({ behavior: 'smooth' });
}

// Функция для возврата на главную
function goToMain() {
    location.reload();
}

// Функция проверки ответов
function checkAnswers(event) {
    event.preventDefault();
    
    const correctAnswers = {
        q1: 'a', q2: 'b', q3: 'c', q4: 'd', q5: 'b',
        q6: 'a', q7: 'c', q8: 'c', q9: 'a', q10: 'b'
    };
    
    let score = 0;
    
    // Проверяем ответы
    for (let i = 1; i <= 10; i++) {
        const selected = document.querySelector(`input[name="q${i}"]:checked`);
        if (selected && selected.value === correctAnswers[`q${i}`]) {
            score++;
        }
    }
    
    // Показываем результат
    document.getElementById('result').innerHTML = 
        `Твой результат: ${score} из 10. ${score >= 7 ? 'Отлично!' : 'Попробуй еще раз!'}`;
}

// После загрузки страницы
document.addEventListener('DOMContentLoaded', () => {
    // Подключаем обработчик формы
    document.getElementById('quizForm').addEventListener('submit', checkAnswers);
});
