document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM w pełni załadowany, skrypt działa.');

    // Funkcja przeładowania strony
    window.goToMain = function () {
        console.log('Przeładowanie strony – powrót na główną.');
        location.reload(); // Przeładowanie strony
    };

    window.showTestOnly = function () {
        console.log('Funkcja showTestOnly została wywołana.');
        const sections = document.querySelectorAll('section');
        if (sections.length === 0) {
            console.error('Nie znaleziono żadnych sekcji!');
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
            console.error('Sekcja #test nie została znaleziona!');
        }
    };

    function checkAnswers(event) {
        event.preventDefault();

        const correctAnswers = {
            q1: 'd',  // HyperText Markup Language
            q2: 'a',  // <h1>
            q3: 'b',  // <link rel="stylesheet" href="styles.css">
            q4: 'c',  // Wyświetla okno z komunikatem
            q5: 'd',  // .intro
            q6: 'b',  // Ustawia zewnętrzne odstępy
            q7: 'a',  // let x = 10
            q8: 'd',  // Znajduje element po ID
            q9: 'c',  // <ul>
            q10: 'a'  // Styl zmieni się po najechaniu myszą
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
        resultDiv.innerHTML = `
            <p>Twój wynik: ${score} z ${totalQuestions}. ${score >= 7 ? 'Świetnie!' : 'Spróbuj jeszcze raz!'}</p>
            <button class="return-btn">Wróć na główną stronę <i class="fas fa-home"></i></button>
        `;

        // Dodanie obsługi kliknięcia dla dynamicznie utworzonego przycisku
        const returnButton = resultDiv.querySelector('.return-btn');
        if (returnButton) {
            console.log('Przycisk .return-btn znaleziony, dodaję obsługę zdarzenia click.');
            returnButton.addEventListener('click', function (event) {
                event.preventDefault(); // Zapobiega domyślnej akcji submit
                console.log('Kliknięto przycisk .return-btn, wywołuję goToMain().');
                goToMain();
            });
        } else {
            console.error('Przycisk .return-btn nie został znaleziony po dynamicznym dodaniu!');
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
    }
