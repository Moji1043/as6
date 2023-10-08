window.onload = loginLoad;
function loginLoad(){
	var form = document.getElementById("myLogin");
    form.onsubmit = checkLogin;
}

function checkLogin(){
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
	const queryString = window.location.search;
	
	const urlParams = new URLSearchParams(queryString);
	const username = urlParams.get('username');
	console.log(username);

	const password = urlParams.get('password');
	console.log(password);

	var user = document.forms ["myLogin"]["username"].value;
	var pass = document.forms ["myLogin"]["password"].value;

	if(user.value != username || pass.value != password){
		alert("ข้อมูลไม่ตรงกัน");
		return false;
	}
	alert("Finish");
}

			