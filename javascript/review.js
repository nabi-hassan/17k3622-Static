function searchcompany() {
   var s = document.getElementById('add').value;
   s.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
     event.preventDefault();
     document.getElementById("btn").click();
    }
  });
   document.getElementById("company").innerHTML = s;
}


function prompterr(){
    alert("Blog Not available yet! Stay Tuned...");
}

function gotohome(){
    location.replace("index.html")
}
function gotoreview(){
    location.replace("review.html")
}
function gotobrowsecategories(){
    location.replace("browsecategories.html")
}
function gotoblog(){
    location.replace("blog.html")
}
function gotologin(){
    location.replace("login.html")
}
function gotosignup(){
    location.replace("signup.html")
}
function gotocontact(){
    location.replace("contact.html")
}
function gotoforpass(){
    location.replace("forpass.html")
}
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}