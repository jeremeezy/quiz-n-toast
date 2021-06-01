function toggleMenu () {  
    const navbar = document.querySelector('.navbar');
    const burger = document.querySelector('.burger');
    burger.addEventListener('click', (e) => {    
      navbar.classList.toggle('show-nav');
    });    
  }
  toggleMenu();

document.getElementById("inscription").addEventListener("submit",function(e){
  
  let erreur;
  let pseudo = document.getElementById("pseudo");
  let email = document.getElementById("email");
  let email2 = document.getElementById("email2");
  let mdp = document.getElementById("mdp");

  if (!mdp.value) {
      erreur = "Veuillez renseigner un mot de passe"
  }
  if (!email2.value) {
    erreur = "Veuillez renseigner la meme adresse mail"
}
if (!email.value) {
  erreur = "Veuillez renseigner un Email"
}
if (!pseudo.value) {
  erreur = "Veuillez renseigner un Pseudo"
}
if(erreur){
  e.preventDefault();
  document.getElementById("erreur").innerHTML = erreur ; 
  return false;
} else{
  alert("inscription validée !");
}

  
})