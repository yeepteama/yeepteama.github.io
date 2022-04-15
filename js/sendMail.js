function sendMail() {
    var firstName = document.getElementById("firstName").value;
    var body = "New Order \n First Name: " + firstName;
    window.location.href = "mailto:mail@example.org?subject=3D-Print Order&body="+body;
}