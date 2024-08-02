const inputFields = Array.from(document.getElementsByTagName("input"));
const submitBtn = document.getElementById("submit-btn");
const errorMsg = document.querySelectorAll(".error-msg");
const errorMsg2 = document.querySelectorAll(".error-msg2");
const errorIcon = document.querySelectorAll("#error-img");
const tooltip = document.querySelector(".tooltip a");
const social = document.querySelector("social-media");
const regName = /^[a-zA-Z\s-]+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function formValidation() {
  let isValid = true;

  if (inputFields[0].value !== "") {
    if (!regName.test(inputFields[0].value.trim())) {
      errorMsg2[0].classList.add("display");
      errorIcon[0].classList.add("display");
      inputFields[0].classList.add("border-color");
      isValid = false;
    } else {
      errorMsg2[0].classList.remove("display");
      errorIcon[0].classList.remove("display");
      inputFields[0].classList.remove("border-color");
    }
  }

  if (inputFields[1].value !== "") {
    if (!regName.test(inputFields[1].value.trim())) {
      errorMsg2[1].classList.add("display");
      errorIcon[1].classList.add("display");
      inputFields[1].classList.add("border-color");
      isValid = false;
    } else {
      errorMsg2[1].classList.remove("display");
      errorIcon[1].classList.remove("display");
      inputFields[1].classList.remove("border-color");
    }
  }

  if (inputFields[2].value !== "") {
    if (!emailRegex.test(inputFields[2].value.trim())) {
      errorMsg2[2].classList.add("display");
      errorIcon[2].classList.add("display");
      inputFields[2].classList.add("border-color");
      isValid = false;
    } else {
      errorMsg2[2].classList.remove("display");
      errorIcon[2].classList.remove("display");
      inputFields[2].classList.remove("border-color");
    }
  }

  if (inputFields[3].value !== "") {
    if (inputFields[3].value.length < 8) {
      errorMsg2[3].classList.add("display");
      errorIcon[3].classList.add("display");
      inputFields[3].classList.add("border-color");
      isValid = false;
    } else {
      errorMsg2[3].classList.remove("display");
      errorIcon[3].classList.remove("display");
      inputFields[3].classList.remove("border-color");
    }
  }

  return isValid;
}

function emptyFormValidation() {
  let isValid = true;

  if (inputFields[0].value.trim() === "") {
    errorMsg[0].classList.add("display");
    errorIcon[0].classList.add("display");
    inputFields[0].classList.add("border-color");
    isValid = false;
  } else {
    errorMsg[0].classList.remove("display");
    errorIcon[0].classList.remove("display");
    inputFields[0].classList.remove("border-color");
  }

  if (inputFields[1].value.trim() === "") {
    errorMsg[1].classList.add("display");
    errorIcon[1].classList.add("display");
    inputFields[1].classList.add("border-color");
    isValid = false;
  } else {
    errorMsg[1].classList.remove("display");
    errorIcon[1].classList.remove("display");
    inputFields[1].classList.remove("border-color");
  }

  if (inputFields[2].value.trim() === "") {
    errorMsg[2].classList.add("display");
    errorIcon[2].classList.add("display");
    inputFields[2].classList.add("border-color");
    isValid = false;
  } else {
    errorMsg[2].classList.remove("display");
    errorIcon[2].classList.remove("display");
    inputFields[2].classList.remove("border-color");
  }

  if (inputFields[3].value.trim() === "") {
    errorMsg[3].classList.add("display");
    errorIcon[3].classList.add("display");
    inputFields[3].classList.add("border-color");
    isValid = false;
  } else {
    errorMsg[3].classList.remove("display");
    errorIcon[3].classList.remove("display");
    inputFields[3].classList.remove("border-color");
  }

  return isValid;
}

function addHover() {
  submitBtn.classList.add("hover-effect");
}

function removeHover() {
  submitBtn.classList.remove("hover-effect");
}

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  emptyFormValidation();
  formValidation();

  inputFields.forEach((inputField) => {
    inputField.addEventListener("input", () => {
      if (inputField.id === "f-name") {
        errorMsg[0].classList.remove("display");
        errorMsg2[0].classList.remove("display");
        errorIcon[0].classList.remove("display");
        inputFields[0].classList.remove("border-color");
      }

      if (inputField.id === "l-name") {
        errorMsg[1].classList.remove("display");
        errorIcon[1].classList.remove("display");
        inputFields[1].classList.remove("border-color");
      }

      if (inputField.id === "email") {
        errorMsg[2].classList.remove("display");
        errorIcon[2].classList.remove("display");
        inputFields[2].classList.remove("border-color");
      }

      if (inputField.id === "password") {
        errorMsg[3].classList.remove("display");
        errorIcon[3].classList.remove("display");
        inputFields[3].classList.remove("border-color");
      }
    });
  });
});

submitBtn.addEventListener("mouseenter", () => {
  addHover();
});

submitBtn.addEventListener("touchstart", () => {
  addHover();
});

submitBtn.addEventListener("touchend", () => {
  removeHover();
});
