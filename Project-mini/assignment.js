let assignments = [];
let currentAssignmentIndex = null;

function saveAssignment() {
    let title = document.getElementById('assignmentTitle').value;
    let instructions = document.getElementById('assignmentInstructions').value;
    let dueDate = document.getElementById('assignmentDueDate').value;
    
    assignments.push({ title, instructions, dueDate, submitted: false });
    let index = assignments.length - 1;
    let assignmentCard = `<div class='card assignment-card'><div class='card-body'>
        <h5>${title}</h5>
        <p>${instructions}</p>
        <p><strong>Due Date:</strong> ${dueDate}</p>
        <button class='btn btn-primary' data-bs-toggle='modal' data-bs-target='#submitAssignmentModal' onclick='openAssignment(${index})'>Submit Assignment</button>
    </div></div>`;
    document.getElementById('upcoming-assignments').innerHTML += assignmentCard;
    let modal = bootstrap.Modal.getInstance(document.getElementById('assignmentModal'));
    modal.hide();
}

function openAssignment(index) {
    currentAssignmentIndex = index;
}

function submitAssignment() {
    if (currentAssignmentIndex !== null) {
        assignments[currentAssignmentIndex].submitted = true;
        let previousAssignments = document.getElementById('previous-assignments');
        let assignment = assignments[currentAssignmentIndex];
        previousAssignments.innerHTML += `<div class='card assignment-card passed'><div class='card-body'>
            <h5>${assignment.title}</h5>
            <p>${assignment.instructions}</p>
            <p><strong>Due Date:</strong> ${assignment.dueDate}</p>
            <p><strong>Status:</strong> Submitted ✅</p>
        </div></div>`;
        document.getElementById('upcoming-assignments').innerHTML = '';
        assignments = assignments.filter((_, i) => i !== currentAssignmentIndex);
        currentAssignmentIndex = null;
        let modal = bootstrap.Modal.getInstance(document.getElementById('submitAssignmentModal'));
        modal.hide();
    }
}
