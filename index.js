const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const result = document.getElementById("result");

let age;

mySubmit.onclick = () => {
  age = myText.value;
  age = Number(age);

  if (age >= 100) {
    result.textContent = `You are too old to enter this site!`;
  } else if (age < 0) {
    result.textContent = `You are not born Yet!`;
  } else if (age > 18 && age < 100) {
    result.textContent = `You are old enough to enter this site!`;
  } else if (age < 18 || age >= 0) {
    result.textContent = `You are not allowed!`;
  } else {
    result.textContent = `Please provide your exact age in number!`;
  }
};
