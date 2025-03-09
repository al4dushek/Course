function checkAnswers(event) {
    event.preventDefault();

    const correctAnswers = {
        q1: 'a', // Poprawna odpowiedź: HyperText Markup Language
        q2: 'b', // Poprawna odpowiedź: <h1>
        q3: 'c', // Poprawna odpowiedź: <link rel="stylesheet" href="styles.css">
        q4: 'd', // Poprawna odpowiedź: Wyświetla okno z komunikatem
        q5: 'b', // Poprawna odpowiedź: .intro
        q6: 'a', // Poprawna odpowiedź: Ustawia zewnętrzne odstępy
        q7: 'c', // Poprawna odpowiedź: let x = 10
        q8: 'c', // Poprawna odpowiedź: Znajduje element po ID
        q9: 'a', // Poprawna odpowiedź: <ul>
        q10: 'b' // Poprawna odpowiedź: Styl zmieni się po najechaniu myszą
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
    resultDiv.innerHTML = `Twój wynik: ${score} z ${totalQuestions}. ${score >= 7 ? 'Świetnie!' : 'Spróbuj jeszcze raz!'}`;
}

function showTestOnly() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        if (section.id !== 'test') {
            section.style.display = 'none';
        } else {
            section.style.display = 'block';
        }
    });
    // Przewiń do sekcji testu
    document.getElementById('test').scrollIntoView({ behavior: 'smooth' });
}
