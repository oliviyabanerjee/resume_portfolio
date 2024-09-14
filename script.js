document.getElementById('ideaForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('bu').value;
    const age = document.getElementById('age').value;
    const mobile = document.getElementById('mobile').value;
    const email = document.getElementById('email').value;

    document.getElementById('popupMessage').innerHTML = `
        Name: ${name}<br>
        Age: ${age}<br>
        Mobile: ${mobile}<br>
        Email: ${email}<br><br>

        Thank you for your submission !!!
    `;
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('popup').style.display = 'block';
});

document.getElementById('closeBtn').addEventListener('click', function() {
    // Hide the popup and refresh the page
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('popup').style.display = 'none';
    location.reload();
});
