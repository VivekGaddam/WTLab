let exams = [];
let currentExamIndex = null;

function nextStep() {
    document.getElementById('step1').style.display = 'none';
    document.getElementById('step2').style.display = 'block';
    addQuestion();
}

function addQuestion() {
    let questionCount = document.querySelectorAll('.question-item').length + 1;
    let questionDiv = document.createElement('div');
    questionDiv.className = 'question-item mb-3';
    questionDiv.innerHTML = `
        <label>Question ${questionCount}:</label>
        <input type="text" class="form-control question-text">
        <label>Options:</label>
        <input type="text" class="form-control option" placeholder="A. Option 1">
        <input type="text" class="form-control option" placeholder="B. Option 2">
        <input type="text" class="form-control option" placeholder="C. Option 3">
        <input type="text" class="form-control option" placeholder="D. Option 4">
        <label>Correct Option (A, B, C, or D):</label>
        <input type="text" class="form-control correct-option">
    `;
    document.getElementById('questions').appendChild(questionDiv);
}

function saveExam() {
    let title = document.getElementById('examTitle').value;
    let topic = document.getElementById('topic').value;
    let questions = [];
    document.querySelectorAll('.question-item').forEach((item) => {
        let text = item.querySelector('.question-text').value;
        let options = [...item.querySelectorAll('.option')].map(opt => opt.value);
        let correct = item.querySelector('.correct-option').value;
        questions.push({ text, options, correct });
    });

    exams.push({ title, topic, questions });
    let index = exams.length - 1;
    let examCard = `<div class='card exam-card'><div class='card-body'>
        <h5>${title}</h5><p>Topic: ${topic}</p>
        <button class='btn btn-primary' data-bs-toggle='modal' data-bs-target='#attemptExamModal' onclick='openExam(${index})'>Attempt Exam</button>
    </div></div>`;
    document.getElementById('upcoming-exams').innerHTML += examCard;
    let modal = bootstrap.Modal.getInstance(document.getElementById('examModal'));
    modal.hide();
}

function openExam(index) {
    currentExamIndex = index;
    let exam = exams[index];
    let content = `<h3>${exam.title}</h3>`;
    exam.questions.forEach((q, i) => {
        content += `<p>${q.text}</p>`;
        q.options.forEach((opt, j) => {
            content += `<input type='radio' name='q${i}' value='${String.fromCharCode(65 + j)}'> ${opt}<br>`;
        });
    });
    document.getElementById('exam-content').innerHTML = content;
}

function submitExam() {
    new bootstrap.Modal(document.getElementById('attemptExamModal')).hide();
}
function openGoogleForm() {
    window.open("https://forms.google.com", "_blank"); // Replace with actual Google Form link
}
