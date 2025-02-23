const subjects = ["DBMS", "web technologies", "COA", "SSP"];
const cieData = subjects.map(sub => ({
    subject: sub,
    attendance: Math.floor(Math.random() * 6),
    midExam: Math.floor(Math.random() * 21),
    assignments: Math.floor(Math.random() * 11),
    slipTest: Math.floor(Math.random() * 6)
}));

function renderSubjects() {
    const container = document.getElementById("subjects");
    cieData.forEach(data => {
        const total = data.attendance + data.midExam + data.assignments + data.slipTest;
        container.innerHTML += `
            <div class="card">
                <h5>${data.subject}</h5>
                <div class="progress mb-2">
                    <div class="progress-bar bg-success" style="width: ${data.attendance * 20}%">Attendance: ${data.attendance}</div>
                </div>
                <div class="progress mb-2">
                    <div class="progress-bar bg-info" style="width: ${data.midExam * 5}%">Mid Exam: ${data.midExam}</div>
                </div>
                <div class="progress mb-2">
                    <div class="progress-bar bg-warning" style="width: ${data.assignments * 10}%">Assignments: ${data.assignments}</div>
                </div>
                <div class="progress mb-2">
                    <div class="progress-bar bg-danger" style="width: ${data.slipTest * 20}%">Slip Test: ${data.slipTest}</div>
                </div>
                <h6>Total: ${total}/40</h6>
            </div>
        `;
    });
}

function renderChart() {
    const ctx = document.getElementById('cieChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: subjects,
            datasets: [
                { label: 'Attendance', data: cieData.map(d => d.attendance), backgroundColor: 'green' },
                { label: 'Mid Exam', data: cieData.map(d => d.midExam), backgroundColor: 'blue' },
                { label: 'Assignments', data: cieData.map(d => d.assignments), backgroundColor: 'yellow' },
                { label: 'Slip Test', data: cieData.map(d => d.slipTest), backgroundColor: 'red' }
            ]
        }
    });
}

document.addEventListener("DOMContentLoaded", function() {
    renderSubjects();
    renderChart();
});
