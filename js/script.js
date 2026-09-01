// 1. Tell JavaScript to look for the form using the ID we just created
const form = document.getElementById("admissionForm");

// 2. Add an "Event Listener" that waits for the user to click Submit
form.addEventListener("submit", function(event) {
    
    // 3. Stop the form from doing its default action (refreshing the page)
    event.preventDefault();
    
    // 4. Show a success popup to the user
    alert("Success! Your application has been submitted.");
    
    // 5. Clear out the input fields for the next person
    form.reset();
});