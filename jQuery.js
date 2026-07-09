$(document).ready(function(){
    $("#country-select").select2({
        placeholder: "Select your country",
        allowClear: true
    })
    $("#showData").DataTable();

})