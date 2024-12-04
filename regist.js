document.getElementById('studentForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const fatherName = document.getElementById('fatherName').value;
    const dob = document.getElementById('dob').value;
    const cnic = document.getElementById('cnic').value;
    const phone = document.getElementById('phone').value;
    const guardianPhone = document.getElementById('guardianPhone').value;

    const table = document.getElementById('studentTable').getElementsByTagName('tbody')[0];

    const row = table.insertRow();
    row.innerHTML = `
        <td>${name}</td>
        <td>${fatherName}</td>
        <td>${dob}</td>
        <td>${cnic}</td>
        <td>${phone}</td>
        <td>${guardianPhone}</td>
        <td>
            <i class="fas fa-edit edit-icon" onclick="editRow(this)"></i>
            <i class="fas fa-trash delete-icon" onclick="deleteRow(this)"></i>
        </td>
    `;

    this.reset();
});

function deleteRow(button) {
    button.parentElement.parentElement.remove();
}

function editRow(button) {
    const row = button.parentElement.parentElement;
    document.getElementById('name').value = row.cells[0].textContent;
    document.getElementById('fatherName').value = row.cells[1].textContent;
    document.getElementById('dob').value = row.cells[2].textContent;
    document.getElementById('cnic').value = row.cells[3].textContent;
    document.getElementById('phone').value = row.cells[4].textContent;
    document.getElementById('guardianPhone').value = row.cells[5].textContent;
    
    row.remove();
}