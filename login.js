let signUpButton = document.getElementById("signUp");
let signInButton = document.getElementById("signIn");
let container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});
// for login 

let un1 = "watch@123";
let pwd1 = "watch@123";

function submitForm() {
  let un2 = document.getElementById("un").value;
  let pwd2 = document.getElementById("pwd").value;

  if (un1 == un2 && pwd1 == pwd2) {
    open("WatchNew.html");

  } else {
    alert("Incorrect Credintials");
  }
}