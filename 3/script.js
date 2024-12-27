document.body.style.fontFamily = "'Arial', sans-serif";
document.body.style.maxWidth = "600px";
document.body.style.margin = "40px auto";
document.body.style.padding = "20px";
document.body.style.backgroundColor = "#f5f5f5";

// Update label text
document.querySelector('label[for="name"]').textContent = "Full Name:";
document.querySelector('label[for="email"]').textContent = "Email Address:";
document.querySelector('label[for="phone"]').textContent = "Phone Number:";
document.querySelector('label[for="message"]').textContent = "Your Message:";
document.querySelector('label[for="options"]').textContent = "Options:";

// Form
const form = document.querySelector('form');
form.style.backgroundColor = "white";
form.style.padding = "30px";
form.style.borderRadius = "10px";
form.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";

// All labels
const labels = document.querySelectorAll('label');
labels.forEach(label => {
    label.style.display = "block";
    label.style.marginBottom = "5px";
    label.style.color = "black";
    label.style.fontWeight = "500";
});

// Style all inputs
const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
    input.style.width = "100%";
    input.style.padding = "8px";
    input.style.marginBottom = "20px";
    input.style.border = "1px solid lightgray";
    input.style.borderRadius = "4px";
    input.style.boxSizing = "border-box";
});

// Style textarea
const textarea = document.querySelector('textarea');
textarea.style.width = "100%";
textarea.style.padding = "8px";
textarea.style.marginBottom = "20px";
textarea.style.border = "1px solid #ddd";
textarea.style.borderRadius = "4px";
textarea.style.boxSizing = "border-box";

// Style select
const select = document.querySelector('select');
select.style.width = "100%";
select.style.padding = "8px";
select.style.marginBottom = "20px";
select.style.border = "1px solid #ddd";
select.style.borderRadius = "4px";
select.style.backgroundColor = "white";
select.style.cursor = "pointer";


// Style radio
const radioButtons = document.querySelectorAll('input[type="radio"]');
const radioLabels = document.querySelectorAll('label[for^="radio"]');

radioButtons.forEach(radio => {
    radio.style.cursor = 'pointer';
    radio.style.marginRight = '8px';
    radio.style.width = '16px';
    radio.style.height = '16px';
});

radioLabels.forEach(label => {
    label.style.cursor = 'pointer';
    label.style.display = 'inline-block';
    label.style.marginBottom = '8px';
    label.style.color = 'black';
});