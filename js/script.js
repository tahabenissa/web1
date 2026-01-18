document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    const quizForm = document.getElementById('quiz-form');
    if (quizForm) {
        quizForm.addEventListener('submit', calculateScore);
    }
});

function calculateScore(e) {
    e.preventDefault();

    const answers = {
        q1: 'd',
        q2: 'b',
        q3: 'c',
        q4: 'a',
        q5: 'b',
        q6: 'a',
        q7: 'c',
        q8: 'b',
        q9: 'a',
        q10: 'd'
    };

    let score = 0;
    const total = Object.keys(answers).length;
    const resultDiv = document.getElementById('quiz-result');

    const labels = document.querySelectorAll('.options label');
    labels.forEach(label => {
        label.style.backgroundColor = '#f8fafc';
        label.style.color = 'inherit';
    });

    for (let i = 1; i <= total; i++) {
        const qName = 'q' + i;
        const selected = document.querySelector(`input[name="${qName}"]:checked`);

        if (selected) {
            if (selected.value === answers[qName]) {
                score++;
                selected.parentElement.style.backgroundColor = '#dcfce7';
                selected.parentElement.style.color = '#15803d';
            } else {
                selected.parentElement.style.backgroundColor = '#fee2e2';
                selected.parentElement.style.color = '#b91c1c';
            }
        }
    }

    resultDiv.innerHTML = `Votre Note: ${score} / ${total}`;

    if (score > 5) {
        resultDiv.style.backgroundColor = '#dcfce7';
        resultDiv.style.color = '#15803d';
    } else {
        resultDiv.style.backgroundColor = '#fee2e2';
        resultDiv.style.color = '#b91c1c';
    }

    resultDiv.style.display = 'block';
}
