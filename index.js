
function readMore(button) {

    let box = button.parentElement;
    let text = box.querySelector(".text-content");

    if (text.classList.contains("short-text")) {

        text.classList.remove("short-text");
        button.innerHTML = "Read Less";

    } else {

        text.classList.add("short-text");
        button.innerHTML = "Read More";

    }
}


function alertbtn(){

    let user = document.getElementById("username");
    let email = document.getElementById("email");
    let psw = document.getElementById("password");

    document.getElementById("userError").innerHTML = "";
    document.getElementById("mailError").innerHTML = "";
    document.getElementById("passwordError").innerHTML = "";

    if(user.value.trim() === ""){
        document.getElementById("userError").innerHTML = "Please Enter Your Username";
        return false;
    }

    if(email.value.trim() === ""){
        document.getElementById("mailError").innerHTML = "Please Enter Your Mail ID";
        return false;
    }

    if(psw.value.trim() === ""){
        document.getElementById("passwordError").innerHTML = "Please Enter Your Password";
        return false;
    }

    alert("Login Successfully!");
 return true;


}