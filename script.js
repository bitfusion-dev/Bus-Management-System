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
                        <td><button class="remove-btn">Remove</button></td>`;
    
    // Add the new row to the bus timings table
    document.querySelector('#bus-timings tbody').appendChild(newRow);

    // Clear the input fields
    document.getElementById('bus-number').value = '';
    document.getElementById('bus-route').value = '';
    document.getElementById('departure-time').value = '';
});

// Event delegation for removing buses
document.querySelector('#bus-timings tbody').addEventListener('click', function (e) {
    if (e.target.classList.contains('remove-btn')) {
        e.target.closest('tr').remove(); // Remove the corresponding row
    }
});

// Lost and Found functionality
document.getElementById('lost-found-form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const item = document.getElementById('item').value;
    const contact = document.getElementById('contact').value;
    
    const lostFoundItemsDiv = document.getElementById('lost-found-items');
    lostFoundItemsDiv.innerHTML += `<p><strong>${item}</strong> - Contact: ${contact}</p>`;
    
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
                        <td><button class="remove-crew-btn">Remove</button></td>`;

    // Add the new row to the crew list table
    document.querySelector('#crew-list tbody').appendChild(newRow);

    // Clear the input fields
    document.getElementById('crew-name').value = '';
    document.getElementById('crew-role').value = '';
    document.getElementById('crew-bus-number').value = '';
});

// Event delegation for removing crew members
document.querySelector('#crew-list tbody').addEventListener('click', function (e) {
    if (e.target.classList.contains('remove-crew-btn')) {
        e.target.closest('tr').remove(); // Remove the corresponding row
    }
});

