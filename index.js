const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const result = document.getElementById("result");

let age;

mySubmit.onclick = () => {
  age = myText.value;
  age = Number(age);

  if (age >= 100) {
    result.textContent = `You are too old to enter this site!`;
  }
};
