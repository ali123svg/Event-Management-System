
  let events = JSON.parse(localStorage.getItem('events')) || [];

// Add event
document.getElementById('eventForm').onsubmit = (e) => {
    e.preventDefault();
    events.push({
        id: Date.now(),
        title: document.getElementById('eventTitle').value,
        date: document.getElementById('eventDate').value,
        description: document.getElementById('eventDescription').value  // Added this line
    });
    localStorage.setItem('events', JSON.stringify(events));
    e.target.reset();
    loadEvents();
};

// Show events
function loadEvents() {
    document.getElementById('eventsContainer').innerHTML = events.map(event => `
        <div class="event-card">
            <h3>${event.title}</h3>
            <p>Date: ${event.date}</p>
            <p>${event.description}</p>  <!-- Added this line to show description -->
            <button onclick="deleteEvent(${event.id})">Delete</button>
        </div>
    `).join('');
}

// Delete event
function deleteEvent(id) {
    if (confirm('Delete?')) {
        events = events.filter(e => e.id !== id);
        localStorage.setItem('events', JSON.stringify(events));
        loadEvents();
    }
}

