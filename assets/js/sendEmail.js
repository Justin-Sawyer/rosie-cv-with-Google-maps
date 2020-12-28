function sendMail(contactForm) {
    emailjs.send("default_service", "contact-form", {
    "from_name": contactForm.name.value,
    "from_email": contactForm.emailaddress.value,
    "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            document.getElementById("successOrFail").innerHTML = `<p>Your message has been sent successfully. Rosie will reply as soon as possible</p>`;
        },
        function(error) {
            console.log("FAILED", error)
            document.getElementById("successOrFail").innerHTML = `<p>Unfortunately, your message has not been sent. Please try agin.</p>`;
        });
        return false;
}