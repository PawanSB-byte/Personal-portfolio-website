// Smooth scroll highlight
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", function() {
        navLinks.forEach(l => l.classList.remove("active"));
        this.classList.add("active");
    });
});

// Welcome Button Alert
document.getElementById("welcomeBtn").addEventListener("click", function() {
    alert("Thank you for visiting my portfolio!");
});

// Contact Form Validation + Confirmation
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = this.querySelector("input[type='text']").value;
    const email = this.querySelector("input[type='email']").value;
    const message = this.querySelector("textarea").value;

    if(name === "" || email === "" || message === "") {
        document.getElementById("formMessage").innerText = 
        "Please fill all fields!";
        document.getElementById("formMessage").style.color = "red";
    } else {
        document.getElementById("formMessage").innerText = 
        "Thank you, " + name + "! Your message has been submitted successfully.";
        document.getElementById("formMessage").style.color = "green";
        this.reset();
    }
});
