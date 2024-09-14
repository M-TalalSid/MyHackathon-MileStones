// Getting References For The Form & Display Area
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
// Handle Form Submission 
form.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent page reload 
    // Collecting Input Values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value;
    var experience = document.getElementById('experience').value;
    // Generating The Resume Content Dynamically
    var resumeHTML = "\n        <h2><b>Editable Resume</b></h2>\n        <h3>Personal Information</h3>\n        <p><b><strong>Name:</strong></b><span contenteditable=\"true\"> ".concat(name, " </span></p>\n        <p><b><strong>Email:</strong></b><span contenteditable=\"true\"> ").concat(email, " </span></p>\n        <p><b><strong>Phone:</strong></b><span contenteditable=\"true\"> ").concat(phone, " </span></p>\n\n        <h3>Education</h3>\n        <p contenteditable=\"true\"> ").concat(education, " </p>\n\n        <h3>Skills</h3>\n        <p contenteditable=\"true\"> ").concat(skills, " </p>\n\n        <h3>Experience</h3>\n        <p contenteditable=\"true\"> ").concat(experience, " </p>\n        ");
    // Display The Generated Resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The Resume Display Element Is Missing.');
    }
});
