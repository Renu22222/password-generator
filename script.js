document.getElementById('generate').addEventListener('click', generatePassword);
document.getElementById('copy').addEventListener('click', copyPassword);
document.getElementById('theme-switcher').addEventListener('click', switchTheme);

function generatePassword() {
    const length = document.getElementById('length').value;
    const includeUppercase = document.getElementById('uppercase').checked;
    const includeLowercase = document.getElementById('lowercase').checked;
    const includeNumbers = document.getElementById('numbers').checked;
    const includeSymbols = document.getElementById('symbols').checked;

    const upperCharset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCharset = "abcdefghijklmnopqrstuvwxyz";
    const numberCharset = "0123456789";
    const symbolCharset = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    let charset = "";
    if (includeUppercase) charset += upperCharset;
    if (includeLowercase) charset += lowerCharset;
    if (includeNumbers) charset += numberCharset;
    if (includeSymbols) charset += symbolCharset;

    if (charset === "") {
        alert("Please select at least one character type.");
        return;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    document.getElementById('password').value = password;
}

function copyPassword() {
    const passwordField = document.getElementById('password');
    passwordField.select();
    passwordField.setSelectionRange(0, 99999); // For mobile devices

    document.execCommand("copy");

    alert("Password copied to clipboard: " + passwordField.value);
}

function switchTheme() {
    document.body.classList.toggle('dark');
}
