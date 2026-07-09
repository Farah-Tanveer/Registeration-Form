var form = document.getElementById("register");
    form.addEventListener("submit",function(event){
        event.preventDefault();
    let isValid = true;
    // firstname
    const firstName = document.getElementById("firstName").value;
    const firstNameError = document.getElementById("firstNameError");
    if (firstName === "") {
        firstNameError.textContent = "Firstname is Required"
        isValid = false;
    }
    else{
        firstNameError.textContent = "";
    }
    // lastname
    const lastName = document.getElementById("lastName").value;
    const lastNameError = document.getElementById("lastNameError");
    if(lastName === ""){
        lastNameError.textContent = "lastname is required"
        isValid = false;
    }
    else lastNameError.textContent = ""
    // email
    const email = document.getElementById("email").value;
    const emailError = document.getElementById("emailError");
    if(email === ""){
        emailError.textContent = "Email is required"
        isValid = false;
    }
    else    emailError.textContent = ""
    // phone number
    const tel = document.getElementById("tel").value;
    const telError = document.getElementById("telError");
    if(tel === ""){
        telError.textContent = "Phone Number is required"
        isValid = false;
    }
    else    telError.textContent = ""
    // passsword
    const password = document.getElementById("password").value;
    const passwordError = document.getElementById("passwordError");
    if(password === ""){
        passwordError.textContent = "Password is required"
        isValid = false;
    }
    else passwordError.textContent =""
    // confirm password
    const confirmPassword = document.getElementById("confirmPassword").value;
    const confirmPasswordError = document.getElementById("confirmPasswordError");
    if(confirmPassword === ""){
        confirmPasswordError.textContent = "Password confirmation is required"
        isValid = false;
    }
    else    confirmPasswordError.textContent =""
    //password confirmation
    if(password != confirmPassword){
        confirmPasswordError.textContent = "Passwords must match"
        isValid = false;
    }
    else    confirmPasswordError.textContent =""
    // gender
const selectedGender = document.querySelector('input[name="gender"]:checked');
const genderError = document.getElementById("genderError");

if (selectedGender === null) {
    genderError.textContent = "Please select your gender";
    isValid = false;
} else {
    genderError.textContent = "";
}
const Gender = selectedGender ? selectedGender.value : "";

//country
const country = document.getElementById("country-select").value;
const countryError = document.getElementById("countryError");
if (country === "") {
    countryError.textContent = "Please select your country";
    isValid = false
} else {
    countryError.textContent = "";
}
//terms
const terms = document.getElementById("terms");
const termsError = document.getElementById("termsError");
if (!terms.checked) {
    termsError.textContent = "You must accept the terms and conditions";
    isValid = false
} else {
    termsError.textContent = "";
}
    if(isValid){
        const actionButtons = `
        <div class="d-flex gap-2">
            <button class="btn view-btn btn-primary">View</button>
            <button class="btn edit-btn btn-secondary">Edit</button>
            <button class="btn delete-btn btn-danger">Delete</button>
        </div>`
        const dataTable = $("#showData").DataTable()
        const rowIndex = dataTable.row.add([
            firstName,
            lastName,
            email,
            tel,
            "••••••••", 
            "••••••••",
            Gender,
            country,
            actionButtons
        ]).draw(false).index();

        const rowNode = dataTable.row(rowIndex).node();
        rowNode.querySelector(".delete-btn").addEventListener("click",function(){
        dataTable.row(rowNode).remove().draw();
    })
    rowNode.querySelector(".view-btn").addEventListener("click",function(){
        document.getElementById("modalfirst").textContent = firstName
        document.getElementById("modallast").textContent = lastName
        document.getElementById("modalEmail").textContent = email
        document.getElementById("modalPhone").textContent = tel
        document.getElementById("modalGender").textContent = Gender
        document.getElementById("modalCountry").textContent = country

        const modal = new bootstrap.Modal(document.getElementById("viewmodal"));
        modal.show();
    })
    rowNode.querySelector(".edit-btn").addEventListener("click",function(){
        document.getElementById("firstName").value=firstName
        document.getElementById("lastName").value=lastName
        document.getElementById("email").value=email
        document.getElementById("tel").value=tel
        document.getElementById("password").value=password
        document.getElementById("confirmPassword").value=confirmPassword

        const radio = document.querySelector(`input[name="gender"][value="${Gender}"]`)
        if(radio) radio.checked = true
        document.getElementById("country-select").value=country
        document.getElementById("terms").checked=true

        dataTable.row(rowNode).remove().draw();
        window.scrollTo({ top: 0, behavior: 'smooth'});
    })
    form.reset();
    }
});
    


//jquery tables use
// show DataTransferedit view as pop up and delete buttons
    