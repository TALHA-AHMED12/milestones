const resumeDisplay = document.getElementById('resumeDisplay') as HTMLDivElement
const resumeForm = document.getElementById('resumeForm') as HTMLFormElement
// Handle Form Submission
resumeForm.addEventListener('submit',(event:Event)=>{
    event.preventDefault(); //prevent page reload

    //collect input value
    const name = (document.getElementById('name') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const phoneNum = (document.getElementById('phone') as HTMLInputElement).value
    const education = (document.getElementById('edu') as HTMLInputElement).value
    const skills = (document.getElementById('skills') as HTMLInputElement).value
    const experience = (document.getElementById('exp') as HTMLInputElement).value
    
    // Generate resume content dynamically
    const resumeHTML = `
    <h2><b>Editable Resume</b></h2> 
    <h3>Personal Information</h3>
    <p><b>Name:</b><span contenteditable = 'true'>${name}</span></p>
    <p><b>Email:</b><span contenteditable = 'true'>${email}</span></p>
    <p><b>Phone Number:</b><span contenteditable = 'true'>${phoneNum}</span></p>

    <h3>Education</h3>
    <p contenteditable = 'true'>${education}</P>

    <h3>Experience</h3>
    <p contenteditable = 'true'>${experience}</P>
    
    <h3>Skills</h3>
    <p contenteditable = 'true'>${skills}</P>
   `;
//    display resume
if(resumeDisplay){
    resumeDisplay.innerHTML = resumeHTML
}else{
    console.error(`The resume display element is missing.`)
}
})