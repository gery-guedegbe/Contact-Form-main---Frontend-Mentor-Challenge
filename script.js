document.getElementById("submitBtn").addEventListener("click", validateForm);

function validateForm(event) {
  event.preventDefault();
  let isValid = true;

  document.querySelectorAll(".errorMessage").forEach((elem) => {
    elem.style.maxHeight = "0";
    elem.style.visibility = "hidden";
  });

  if (!document.getElementById("firstName").value.trim()) {
    document.getElementById("firstName").nextElementSibling.style.maxHeight =
      "100px";
    document.getElementById("firstName").nextElementSibling.style.visibility =
      "visible";
    isValid = false;
  }

  if (!document.getElementById("lastName").value.trim()) {
    document.getElementById("lastName").nextElementSibling.style.maxHeight =
      "100px";
    document.getElementById("lastName").nextElementSibling.style.visibility =
      "visible";
    isValid = false;
  }

  if (
    !document.getElementById("email").value.trim() ||
    !validateEmail(document.getElementById("email").value)
  ) {
    document.getElementById("email").nextElementSibling.style.maxHeight =
      "100px";
    document.getElementById("email").nextElementSibling.style.visibility =
      "visible";
    isValid = false;
  }

  if (
    !document.getElementById("checkbox1").checked &&
    !document.getElementById("checkbox2").checked
  ) {
    document.querySelector(".line2 .errorMessage").style.maxHeight = "100px";
    document.querySelector(".line2 .errorMessage").style.visibility = "visible";
    isValid = false;
  }

  if (!document.getElementById("message").value.trim()) {
    document.getElementById("message").nextElementSibling.style.maxHeight =
      "100px";
    document.getElementById("message").nextElementSibling.style.visibility =
      "visible";
    isValid = false;
  }

  if (!document.getElementById("consetement").checked) {
    document.querySelector(".consentBloc .errorMessage").style.maxHeight =
      "100px";
    document.querySelector(".consentBloc .errorMessage").style.visibility =
      "visible";
    isValid = false;
  }

  if (isValid) {
    document.getElementById("validMessage").style.display = "flex";
    document.forms["myName"].reset();
    setTimeout(() => {
      document.querySelector(".validMessage").style.display = "none";
    }, 5000);
  }
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
