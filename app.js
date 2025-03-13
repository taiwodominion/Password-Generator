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

    if (length > 20) {
        alert('The max number is 20');
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
    document.getElementById('errorMessage').textContent = errorMessage;

}


  
// document.getElementById('recommendToggle').addEventListener('change', () => {
//     if(this.checked) {
//         document.getElementById('uppercase').checked = true;
//         document.getElementById('lowercase').checked = true;
//         document.getElementById('numbers').checked = true;
//         document.getElementById('special').checked = false;

//     }
// });

document.addEventListener('DOMContentLoaded', () => {
    console.log('Javascript Loaded');
    const recommendToggle = document.querySelector('#recommendToggle');
    const includeUppercase = document.querySelector('#uppercase');
    const includeLowercase = document.querySelector('#lowercase');
    const includeNumbers = document.querySelector('#numbers');
    const includeSpecial = document.querySelector('#special');

    if (!recommendToggle) {
        console.error('Error: Recommend toggle checkbox not found');
        return;
    }

    recommendToggle.addEventListener('change', () => {
        console.log('Toggle changed checked', recommendToggle.checked)
        if (recommendToggle.checked) {
            includeUppercase.checked = true;
            includeLowercase.checked = true;
            includeNumbers.checked = true;
            includeSpecial.checked = false;
        } else {
            includeUppercase.checked = false;
            includeLowercase.checked = false;
            includeNumbers.checked = false;
            includeSpecial.checked = false;
        }

        console.log('uppercase:', includeUppercase.checked);
        console.log('uppercase:', includeLowercase.checked);
        console.log('uppercase:', includeNumbers.checked);
        console.log('uppercase:', includeSpecial.checked);
    });
});