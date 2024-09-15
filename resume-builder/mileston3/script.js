var resumeDisplay = document.getElementById('resumeDisplay');
var resumeForm = document.getElementById('resumeForm');
// Handle Form Submission
resumeForm.addEventListener('submit', function (event) {
    event.preventDefault(); //prevent page reload
    //collect input value
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phoneNum = document.getElementById('phone').value;
    var education = document.getElementById('edu').value;
    var skills = document.getElementById('skills').value;
    var experience = document.getElementById('exp').value;
    // Generate resume content dynamically
    var resumeHTML = "\n    <h2><b>resume</h2></b>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b>".concat(name, "</p>\n    <p><b>Email:</b>").concat(email, "</p>\n    <p><b>Phone Number:</b>").concat(phoneNum, "</p>\n\n    <h3>Education</h3>\n    <p>").concat(education, "</P>\n\n    <h3>Experience</h3>\n    <p>").concat(experience, "</P>\n    \n    <h3>Skills</h3>\n    <p>").concat(skills, "</P>\n   ");
    //    display resume
    if (resumeDisplay) {
        resumeDisplay.innerHTML = resumeHTML;
    }
    else {
        console.error("The resume display element is missing.");
    }
});
