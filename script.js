// adding functionality to the gender dropdown
const selectGender = document.querySelector('.select-gender');
const arrowIcon = document.querySelector('.select-gender img');
const dropdownContainer = document.querySelector('.gender-dropdown-container');

selectGender.onclick = displayGender;
function displayGender() {
    dropdownContainer.classList.toggle('active');
    arrowIcon.classList.toggle('active');
}

// ensuring the gender selected is displayed in the input field
const dropdownContent = document.querySelectorAll('.gender');
const selectGenderPlaceholder = document.querySelector('.select-gender span');
dropdownContent.forEach(genderEl => {
    genderEl.addEventListener('click', function(event) {
        selectGenderPlaceholder.textContent = event.target.textContent;
        dropdownContainer.classList.remove('active');
    });
});

// adding space between two columns in the register form
const parentField = document.querySelectorAll('.parent-field');
parentField.forEach(parentEl => {
    let leftElements = parentEl.firstElementChild;
    leftElements.style.marginRight = '1.3rem';

    let rightElements = parentEl.lastElementChild;
    rightElements.style.marginLeft = '1.3rem'
});