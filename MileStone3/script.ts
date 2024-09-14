// Getting References For The Form & Display Area

    const form = document.getElementById('resume-form') as HTMLFormElement;

    const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

    // Handle Form Submission 

    form.addEventListener('submit', (event : Event) => {
        event.preventDefault(); // prevent page reload 

        // Collecting Input Values

        const name = (document.getElementById('name') as HTMLInputElement).value
        const email = (document.getElementById('email') as HTMLInputElement).value
        const phone = (document.getElementById('phone') as HTMLInputElement).value
        const education = (document.getElementById('education') as HTMLInputElement).value
        const skills = (document.getElementById('skills') as HTMLInputElement).value
        const experience = (document.getElementById('experience') as HTMLInputElement).value

        // Generating The Resume Content Dynamically
        const resumeHTML = `
        <h2><b<Resume</b></h2>
        <h3>Personal Information</h3>
        <p><b><strong>Name:</strong></b> ${name} </p>
        <p><b><strong>Email:</strong></b> ${email} </p>
        <p><b><strong>Phone:</strong></b> ${phone} </p>

        <h3>Education</h3>
        <p>${education}</p>

        <h3>Skills</h3>
        <p>${skills}</p>

        <h3>Experience</h3>
        <p>${experience}</p>
        `;

        // Display The Generated Resume

        if(resumeDisplayElement){
            resumeDisplayElement.innerHTML = resumeHTML;
        } else {
            console.error('The Resume Display Element Is Missing.');
        }
    });