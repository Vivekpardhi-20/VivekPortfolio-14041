$(document).ready(function () {
  // Sticky Header
  $(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
      $(".header-area").addClass("sticky");
    } else {
      $(".header-area").removeClass("sticky");
    }

    updateActiveSection();
  });

  // Smooth Scroll
  $(".header ul li a").click(function (e) {
    e.preventDefault();
    const target = $(this).attr("href");

    if (target === "#home") {
      $("html, body").animate({ scrollTop: 0 }, 500);
    } else {
      const offset = $(target).offset().top - 40;
      $("html, body").animate({ scrollTop: offset }, 500);
    }

    $(".header ul li a").removeClass("active");
    $(this).addClass("active");
  });

  // ScrollReveal animations
  ScrollReveal({ distance: "100px", duration: 2000, delay: 200 });
  ScrollReveal().reveal(".header a, .profile-photo, .about-content, .education", { origin: "left" });
  ScrollReveal().reveal(".header ul, .profile-text, .about-skills, .internship", { origin: "right" });
  ScrollReveal().reveal(".project-title, .contact-title", { origin: "top" });
  ScrollReveal().reveal(".projects, .contact", { origin: "bottom" });

  // Contact Form Validation
  const name = document.querySelector("input[name='name']");
  const email = document.querySelector("input[name='email']");
  const message = document.querySelector("textarea[name='message']");

  function validateName() {
    if (!name.value.trim()) {
      name.setCustomValidity("Name is required.");
      return false;
    }
    name.setCustomValidity("");
    return true;
  }

  function validateEmail() {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email.value.trim()) {
      email.setCustomValidity("Email is required.");
      return false;
    } else if (!emailPattern.test(email.value)) {
      email.setCustomValidity("Enter a valid email address.");
      return false;
    }
    email.setCustomValidity("");
    return true;
  }

  function validateMessage() {
    if (!message.value.trim()) {
      message.setCustomValidity("Message is required.");
      return false;
    } else if (message.value.trim().length < 5) {
      message.setCustomValidity("Message must be at least 5 characters.");
      return false;
    }
    message.setCustomValidity("");
    return true;
  }

  document.querySelector("#contactForm").addEventListener("submit", function (event) {
    if (!(validateName() & validateEmail() & validateMessage())) {
      event.preventDefault();
    }
  });

  // Update active section in header
  function updateActiveSection() {
    const scrollPosition = $(window).scrollTop();
    if (scrollPosition === 0) {
      $(".header ul li a").removeClass("active");
      $(".header ul li a[href='#home']").addClass("active");
      return;
    }

    $("section").each(function () {
      const target = $(this).attr("id");
      const offset = $(this).offset().top;
      const height = $(this).outerHeight();

      if (scrollPosition >= offset - 40 && scrollPosition < offset + height - 40) {
        $(".header ul li a").removeClass("active");
        $(".header ul li a[href='#" + target + "']").addClass("active");
      }
    });
  }

  





  // Certificate Slider
  const certSlides = document.querySelectorAll(".certificate-slide");
  const certPrevBtn = document.querySelector(".cert-prev");
  const certNextBtn = document.querySelector(".cert-next");
  let certCurrent = 0;

  function showCertificateSlide(index) {
    certSlides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
  }

  certPrevBtn?.addEventListener("click", () => {
    certCurrent = (certCurrent === 0) ? certSlides.length - 1 : certCurrent - 1;
    showCertificateSlide(certCurrent);
  });

  certNextBtn?.addEventListener("click", () => {
    certCurrent = (certCurrent === certSlides.length - 1) ? 0 : certCurrent + 1;
    showCertificateSlide(certCurrent);
  });

  // Optional auto-slide for certificates
  // setInterval(() => certNextBtn?.click(), 5000);
});

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const companyEmail = document.getElementById("companyEmail");
const contactNumber = document.getElementById("contactNumber");
const purpose = document.getElementById("purpose");
 
const fnameError = document.getElementById("fnameError");
const lnameError = document.getElementById("lnameError");
const emailError = document.getElementById("emailError");
const NumError = document.getElementById("NumError");
const purposeError = document.getElementById("purposeError");
 
const namePattern = /^[A-Za-z ]{2,50}$/;
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const numberPattern = /^[0-9]{7,15}$/; // Allows digits only, length 7-15
 
// Validate first name
function validateFirstName() {
  if (!firstName.value.trim()) {
    fnameError.textContent = "First name is required.";
    return false;
  } else if (!namePattern.test(firstName.value.trim())) {
    fnameError.textContent = "First name must be 2-50 letters and spaces only.";
    return false;
  } else {
    fnameError.textContent = "";
    return true;
  }
}
 
// Validate last name
function validateLastName() {
  if (!lastName.value.trim()) {
    lnameError.textContent = "Last name is required.";
    return false;
  } else if (!namePattern.test(lastName.value.trim())) {
    lnameError.textContent = "Last name must be 2-50 letters and spaces only.";
    return false;
  } else {
    lnameError.textContent = "";
    return true;
  }
}
 
// Validate company email
function validateEmail() {
  if (!companyEmail.value.trim()) {
    emailError.textContent = "Email is required.";
    return false;
  } else if (!emailPattern.test(companyEmail.value.trim())) {
    emailError.textContent = "Enter a valid email address.";
    return false;
  } else {
    emailError.textContent = "";
    return true;
  }
}
 
// Validate contact number
function validateNumber() {
  if (!contactNumber.value.trim()) {
    NumError.textContent = "Contact number is required.";
    return false;
  } else if (!numberPattern.test(contactNumber.value.trim())) {
    NumError.textContent = "Contact number must be 7-15 digits only.";
    return false;
  } else {
    NumError.textContent = "";
    return true;
  }
}
 
// Validate purpose
function validatePurpose() {
  if (!purpose.value.trim()) {
    purposeError.textContent = "Purpose is required.";
    return false;
  } else if (purpose.value.trim().length < 5) {
    purposeError.textContent = "Purpose must be at least 5 characters.";
    return false;
  } else {
    purposeError.textContent = "";
    return true;
  }
}
 
// Add event listeners
firstName.addEventListener("input", validateFirstName);
lastName.addEventListener("input", validateLastName);
companyEmail.addEventListener("input", validateEmail);
contactNumber.addEventListener("input", validateNumber);
purpose.addEventListener("input", validatePurpose);
 
// Optional: validate all fields on form submit
function validateAll() {
  const isFirstNameValid = validateFirstName();
  const isLastNameValid = validateLastName();
  const isEmailValid = validateEmail();
  const isNumberValid = validateNumber();
  const isPurposeValid = validatePurpose();
 
  return isFirstNameValid && isLastNameValid && isEmailValid && isNumberValid && isPurposeValid;
}
 
document.querySelector("form").addEventListener("submit", function(event) {
  if (!validateAll()) {
    event.preventDefault(); // Stop the form from submitting and reloading
    // The errors are already shown inside validate functions via error message elements
  }
});
 
