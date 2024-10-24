document.getElementById('add-bus-form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const busNumber = document.getElementById('bus-number').value;
    const busRoute = document.getElementById('bus-route').value;
    const departureTime = document.getElementById('departure-time').value;

    // Create a new row in the bus timings table
    const newRow = document.createElement('tr');
    newRow.innerHTML = `<td>${busNumber}</td>
                        <td>${busRoute}</td>
                        <td>${departureTime}</td>
                        <td><button class="remove-btn"><i class="fas fa-trash-alt"></i> Remove</button></td>`;
    
    // Add the new row to the bus timings table
    document.querySelector('#bus-timings tbody').appendChild(newRow);

    // Clear the input fields
    document.getElementById('bus-number').value = '';
    document.getElementById('bus-route').value = '';
    document.getElementById('departure-time').value = '';
});

// Event delegation for removing buses
document.querySelector('#bus-timings tbody').addEventListener('click', function (e) {
    if (e.target.classList.contains('remove-btn') || e.target.closest('button').classList.contains('remove-btn')) {
        e.target.closest('tr').remove(); // Remove the corresponding row
    }
});

// Lost and Found functionality
document.getElementById('lost-found-form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const item = document.getElementById('item').value;
    const contact = document.getElementById('contact').value;
    
    const lostFoundItemsDiv = document.getElementById('lost-found-items');
    lostFoundItemsDiv.innerHTML += `<p><i class="fas fa-box-open"></i> <strong>${item}</strong> - Contact: ${contact}</p>`;
    
    // Clear the input fields
    document.getElementById('item').value = '';
    document.getElementById('contact').value = '';
});

function searchRoutes() {
    // Get the search query
    let input = document.getElementById('search-bar').value.toLowerCase();
    
    // Get the list of bus routes
    let routes = document.getElementById('bus-routes-list').getElementsByTagName('li');
    
    // Loop through the routes and hide those that don't match the search query
    for (let i = 0; i < routes.length; i++) {
        let route = routes[i].textContent || routes[i].innerText;
        
        if (route.toLowerCase().indexOf(input) > -1) {
            routes[i].style.display = ""; // Show matching routes
        } else {
            routes[i].style.display = "none"; // Hide non-matching routes
        }
    }
}

// Crew Management functionality
document.getElementById('add-crew-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const crewName = document.getElementById('crew-name').value;
    const crewRole = document.getElementById('crew-role').value;
    const crewBusNumber = document.getElementById('crew-bus-number').value;

    // Create a new row in the crew list table
    const newRow = document.createElement('tr');
    newRow.innerHTML = `<td>${crewName}</td>
                        <td>${crewRole}</td>
                        <td>${crewBusNumber}</td>
                        <td><button class="remove-crew-btn"><i class="fas fa-user-minus"></i> Remove</button></td>`;

    // Add the new row to the crew list table
    document.querySelector('#crew-list tbody').appendChild(newRow);

    // Clear the input fields
    document.getElementById('crew-name').value = '';
    document.getElementById('crew-role').value = '';
    document.getElementById('crew-bus-number').value = '';
});

// Event delegation for removing crew members
document.querySelector('#crew-list tbody').addEventListener('click', function (e) {
    if (e.target.classList.contains('remove-crew-btn') || e.target.closest('button').classList.contains('remove-crew-btn')) {
        e.target.closest('tr').remove(); // Remove the corresponding row
    }
});

// Emergency Section functionality
document.getElementById('emergency-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const emergencyDescription = document.getElementById('emergency-description').value;
    const emergencyContact = document.getElementById('emergency-contact').value;

    const emergencyReportsDiv = document.getElementById('emergency-reports');
    const newReport = document.createElement('p');
    newReport.innerHTML = `<i class="fas fa-exclamation-triangle"></i> <strong>Emergency:</strong> ${emergencyDescription} - <strong>Contact:</strong> ${emergencyContact}`;

    // Add the new emergency report
    emergencyReportsDiv.appendChild(newReport);

    // Clear the input fields
    document.getElementById('emergency-description').value = '';
    document.getElementById('emergency-contact').value = '';
});

// User Feedback functionality
document.getElementById('feedback-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const userName = document.getElementById('user-name').value;
    const feedbackMessage = document.getElementById('feedback-message').value;

    // Create a new feedback entry
    const feedbackList = document.getElementById('feedback-list');
    const newFeedback = document.createElement('div');
    newFeedback.classList.add('feedback-entry');
    newFeedback.innerHTML = `<i class="fas fa-comments"></i> <p><strong>${userName}</strong> says:</p><p>${feedbackMessage}</p>`;

    // Add the new feedback entry to the feedback list
    feedbackList.appendChild(newFeedback);

    // Clear the input fields
    document.getElementById('user-name').value = '';
    document.getElementById('feedback-message').value = '';
});


window.onscroll = function() {
    if (document.documentElement.scrollTop > 200) {
        document.getElementById('back-to-top').style.display = 'block';
    } else {
        document.getElementById('back-to-top').style.display = 'none';
    }
};
function toggleRoutes() {
    const routesList = document.getElementById('bus-routes-list');
    if (routesList.style.display === 'none') {
        routesList.style.display = 'block';
    } else {
        routesList.style.display = 'none';
    }
}
