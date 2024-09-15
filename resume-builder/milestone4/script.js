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
    var resumeHTML = "\n    <h2><b>Editable Resume</b></h2> \n    <h3>Personal Information</h3>\n    <p><b>Name:</b><span contenteditable = 'true'>".concat(name, "</span></p>\n    <p><b>Email:</b><span contenteditable = 'true'>").concat(email, "</span></p>\n    <p><b>Phone Number:</b><span contenteditable = 'true'>").concat(phoneNum, "</span></p>\n\n    <h3>Education</h3>\n    <p contenteditable = 'true'>").concat(education, "</P>\n\n    <h3>Experience</h3>\n    <p contenteditable = 'true'>").concat(experience, "</P>\n    \n    <h3>Skills</h3>\n    <p contenteditable = 'true'>").concat(skills, "</P>\n   ");
    //    display resume
    if (resumeDisplay) {
        resumeDisplay.innerHTML = resumeHTML;
    }
    else {
        console.error("The resume display element is missing.");
    }
});
