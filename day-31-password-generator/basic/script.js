const clipboardEl = document.getElementById("clipboard");
const generateEl = document.getElementById("generate-btn");
const passLabel = document.getElementById("password-label");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");

async function copyPassword() {
  if (!passLabel.textContent) {
    return;
  }
  await navigator.clipboard.writeText(passLabel.innerText);
  alert("password copied to clipboard!");
}

function getUppercase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getLowercase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getSymbol() {
  const symbols = "!@#$%^&*(){}[]=<>/,.";
  const index = Math.floor(Math.random() * symbols.length);
  return symbols[index];
}

function generatePassword() {
  let passwordContent = "";
  let funcs = [];
  if (uppercaseEl.checked) funcs.push(getUppercase);
  if (lowercaseEl.checked) funcs.push(getLowercase);
  if (numbersEl.checked) funcs.push(getNumber);
  if (symbolsEl.checked) funcs.push(getSymbol);
  if (funcs.length <= 0) return;
  for (let index = 0; index < lengthEl.value; index++) {
    const funcIndex = Math.floor(Math.random() * funcs.length);
    passwordContent += funcs[funcIndex]();
  }
  console.log(passwordContent);
  passLabel.textContent = passwordContent;
}

clipboardEl.addEventListener("click", copyPassword);
generateEl.addEventListener("click", generatePassword);
