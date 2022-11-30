const chars =
  "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let passwordLength = 12;

const password1El = document.getElementById("password1-el");
const password2El = document.getElementById("password2-el");
const password3El = document.getElementById("password3-el");
const password4El = document.getElementById("password4-el");

function generatePasswords() {
  let password = "";
  for (let j = 0; j < passwordLength; j++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }
  return password;
}

function getGeneratePasswords() {
  password1El.innerHTML = `<input type="text" id="1" value="${generatePasswords()}" onclick="copyToClipboard(1)" readonly>
  `;
  password2El.innerHTML = `<input type="text" id="2" value="${generatePasswords()}" onclick="copyToClipboard(2)" readonly>
  `;
  password3El.innerHTML = `<input type="text" id="3" value="${generatePasswords()}" onclick="copyToClipboard(3)" readonly>
  `;
  password4El.innerHTML = `<input type="text" id="4" value="${generatePasswords()}" onclick="copyToClipboard(4)" readonly>
  `;

  changeColorPasswords();
}

function changeColorPasswords() {
  let allPasswords = document.getElementsByClassName("generatedPassword");
  for (let i = 0; i < allPasswords.length; i++) {
    allPasswords[i].style.color = "var(--clr-bright-green)";
  }
}

function copyToClipboard(index) {
  const copyText = document.getElementById(index).value;
  navigator.clipboard.writeText(copyText).then(() => {
    alert("Copied to clipboard");
  });
}
