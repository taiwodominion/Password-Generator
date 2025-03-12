const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const specialChars = "!@=#$^&*-_+()[{]}|:,%.?<>";

function generatePassword() {
    const length = document.getElementById('length').value;
    const includeUppercase = document.getElementById('uppercase').checked;
    const includeLowercase = document.getElementById('lowercase').checked;
    const includeNumbers = document.getElementById('numbers').checked;
    const includeSpecial = document.getElementById('special').checked;

    if (!includeUppercase && !includeLowercase && !includeNumbers && !includeSpecial) {
        alert("Please select at least one character set.");
        return;
    }

    let characters = "";
    if (includeUppercase) characters += upperCaseChars;
    if (includeLowercase) characters += lowerCaseChars;
    if (includeNumbers) characters += numberChars;
    if (includeSpecial) characters += specialChars;

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    document.getElementById('password').value = password;
}
