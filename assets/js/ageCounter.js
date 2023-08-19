
// Function to calculate and update the age
function updateAge() {
    // Enter your birth year here
    var birthYear = 1999;

    var currentYear = new Date().getFullYear();
    var age = currentYear - birthYear;

    document.getElementById("age").textContent = age;
}