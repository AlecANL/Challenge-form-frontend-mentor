const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const btn = document.querySelector('#btn');
const formGroup = document.querySelector('#form-group');
const arrInputs = [firstName, lastName, password, email];
const iconError = document.querySelector('.icon-error');

class validForms {
  constructor() {
    this.init();
  }

  validIsError(input) {
    const el = input.parentElement.childNodes[3];
    input.classList.add('is-invalid');
    el.style.display = 'block';
  }
  validIsSuccess(input) {
    const el = input.parentElement.childNodes[3];
    input.classList.remove('is-invalid');
    el.style.display = 'none';
  }
  checkLength(input, min, max) {
    if (input.value.length < min) {
      this.validIsError(input);
    } else if (input.value.length > max) {
      this.validIsError(input);
    } else {
      this.validIsSuccess(input);
    }
  }

  validEmail(input) {
    let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regex.test(input.value.trim().toLowerCase())) {
      this.validIsSuccess(input);
    } else {
      this.validIsError(input);
    }
  }

  validForm(inputsArr) {
    inputsArr.forEach((input) => {
      if (input.value.trim() === '') {
        this.validIsError(input);
      } else {
        this.validIsSuccess(input);
      }
    });
  }

  init() {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      this.validForm(arrInputs);
      this.validEmail(email);
      this.checkLength(firstName, 3, 15);
      this.checkLength(lastName, 3, 15);
      this.checkLength(password, 6, 10);
    });
  }
}

const valid = new validForms();
