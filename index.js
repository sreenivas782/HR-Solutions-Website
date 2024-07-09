

/* To handel number count in about page */

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
    let initial_count = 0;
    const final_count = parseInt(counter.dataset.count);
    
    const updateCounting = () => {
        initial_count++;
        counter.innerText = initial_count + "+";

        if (initial_count >= final_count) {
            clearInterval(counting);
            setTimeout(() => {
                initial_count = 0; // Reset the count
                counting = setInterval(updateCounting, 10);
            }, 2000); // Wait for 1 second before restarting
        }
    };

    let counting = setInterval(updateCounting, 10);
});

                  /*To handel Candidates page search filter */

document.addEventListener('DOMContentLoaded', function() {
    const nameFilter = document.getElementById('name-filter');
    const locationFilter = document.getElementById('location-filter');
    const jobFilter = document.getElementById('job-filter');
    const candidateTable = document.getElementById('candidate-table');

    function filterCandidates() {
        const name = nameFilter.value.toLowerCase();
        const location = locationFilter.value.toLowerCase();
        const job = jobFilter.value.toLowerCase();

        const rows = candidateTable.getElementsByTagName('tr');
        
        for (let i = 1; i < rows.length; i++) { // this start from 1 to skip header row because header row index is 0
            const nameCell = rows[i].cells[0].textContent.toLowerCase();
            const jobCell = rows[i].cells[2].textContent.toLowerCase();
            const locationCell = rows[i].cells[3].textContent.toLowerCase();

            const matchesName = !name || nameCell.includes(name);
            const matchesLocation = !location || locationCell.includes(location);
            const matchesJob = !job || jobCell.includes(job);

            rows[i].style.display = matchesName && matchesLocation && matchesJob ? '' : 'none';
        }
    }

    nameFilter.addEventListener('input', filterCandidates);
    locationFilter.addEventListener('input', filterCandidates);
    jobFilter.addEventListener('input', filterCandidates);
});


/*For Sign-in page to login securely with 
 user name :admin
 password :12345

 */

 document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting directly
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        console.log('Username:', username);
        console.log('Password:', password);
        
        if (username === 'admin' && password === '12345') {
            window.location.href = 'index.html'; // this will redirect to index.html if credentials are correct
        } else {
           alert("Invalid-Credentials") // this will message in alert box
        }
    });
});






// Function to add a candidate to the selected candidates table

function addCandidate(button) {
    var row = button.parentNode.parentNode; // to get the row of the clicked button
    var name = row.cells[0].textContent;    //  to get candidate name
    var skills = row.cells[1].textContent;  // to get candidate skills
    var jobRole = row.cells[2].textContent;// to getcandidate job role
    var location = row.cells[3].textContent;// to get candidate location
    
    // rhis will reate a new row in the selected candidates table with ranking input
    var newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${name}</td>
        <td>${skills}</td>
        <td>${jobRole}</td>
        <td>${location}</td>
        <td><input type="number" class="rank-input" placeholder="Rank"></td>
    `;
    
    // this will add  the new row to the selected candidates table body
    var selectedTableBody = document.getElementById('selected-candidate-body');
    selectedTableBody.appendChild(newRow);
}
