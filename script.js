function submitData() {

    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let number = document.getElementById("phone").value;
    let msg = document.getElementById("msg").value;

    if (username == "" || email == "" || number == "" || msg == "") {
        alert("please fill the required field")
    }
    else {
        let userdata = {
            myusername: username,
            myemail: email,
            mynumber: number,
            mymsg: msg
        }
        console.log(userdata);




        username = document.getElementById("username").value = "";
        email = document.getElementById("email").value = "";
        number = document.getElementById("phone").value = "";
        msg = document.getElementById("msg").value = "";
    }

}


