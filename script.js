// Определяем функцию глобально, вне DOMContentLoaded
function showTestOnly() {
    console.log('Функция showTestOnly была вызвана.');
    const sections = document.querySelectorAll('section');
    if (sections.length === 0) {
        console.error('Не найдено ни одной секции!');
        return;
    }
    sections.forEach(section => {
        if (section.id !== 'test') {
            section.style.display = 'none';
        } else {
            section.style.display = 'block';
        }
    });
    const testSection = document.getElementById('test');
    if (testSection) {
        testSection.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.error('Секция #test не найдена!');
    }
}

// Определяем функцию возврата на главную глобально
function goToMain() {
    console.log('Перезагрузка страницы – возврат на главную.');
    location.reload();
}

document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM полностью загружен, скрипт работает.');

    function checkAnswers(event) {
        event.preventDefault();

        const correctAnswers = {
            q1: 'a',
            q2: 'b',
            q3: 'c',
            q4: 'd',
            q5: 'b',
            q6: 'a',
            q7: 'c',
            q8: 'c',
            q9: 'a',
            q10: 'b'
        };

        let score = 0;
        const totalQuestions = 10;

        for (let i = 1; i <= totalQuestions; i++) {
            const selectedAnswer = document.querySelector(`input[name="q${i}"]:checked`);
            if (selectedAnswer && selectedAnswer.value === correctAnswers[`q${i}`]) {
                score++;
            }
        }

        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = `Твой результат: ${score} из ${totalQuestions}. ${score >= 7 ? 'Отлично!' : 'Попробуй еще раз!'}`;
    }

    // Подключаем функцию checkAnswers к форме
    const quizForm = document.getElementById('quizForm');
    if (quizForm) {
        quizForm.addEventListener('submit', checkAnswers);
    } else {
        console.error('Форма #quizForm не найдена!');
    }

    // Добавляем обработчик события для кнопки теста (альтернативный способ)
    const testButton = document.querySelector('.jump-btn');
    if (testButton) {
        testButton.addEventListener('click', showTestOnly);
    }
});
