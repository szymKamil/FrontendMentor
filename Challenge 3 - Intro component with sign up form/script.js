const inputsForm = document.querySelectorAll(".form_input");
const submitButton = document.querySelector(".btn_sumbit");
const emailFormVal = document.querySelector(".form_email");
const formName = document.querySelector(".form_name");

const regxEmailTest = /.+@.*[com, pl]/;

const regTest = function (val) {
  if (!regxEmailTest.test(val)) error(emailFormVal);
};

const error = function (e) {
  e.classList.add("error__img");
  e.style.borderColor = "red";
  e.nextElementSibling.style.visibility = "visible";
};

submitButton.addEventListener("click", function (e) {
  e.preventDefault();
  regTest(emailFormVal.value);
  inputsForm.forEach((e) => {
    if (e.value.length < 2) error(e);
  });
});

const fixError = function () {
  inputsForm.forEach((e) => {
    e.addEventListener("focus", function () {
      e.classList.remove("error__img");
      e.style.borderColor = "black";
      e.nextElementSibling.style.visibility = "hidden";
    });
  });
};
fixError();
