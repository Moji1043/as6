window.onload = pageLoad;
function pageLoad(){
	var form = document.getElementById("myForm");
    form.onsubmit = validateForm;
}

function validateForm() {
    var x = document.forms ["myForm"]["password"].value;
    var y = document.forms ["myForm"]["password"].value;

    if (x != y){
        document.getElementById('errormsg').innerHTML = "กรอกไม่ตรง";
        alert ("กรอกไม่ตรง");
        return false;
    }
    alert ("come on");
}