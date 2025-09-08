document.addEventListener("DOMContentLoaded", () => {
  const btnLogin = document.querySelector(".btn");

  btnLogin.addEventListener("click", () => {
    const user = document.getElementById("usuario").value;
    const pass = document.getElementById("password").value;

    if (user && pass) {
      alert("Login exitoso ✅");
      // Aquí podrías redirigir a otra pantalla
      // window.location.href = "menu.html";
    } else {
      alert("Por favor completa todos los campos");
    }
  });
});

function irA(pantallaId) {
  document.querySelectorAll(".pantalla").forEach(p => p.classList.remove("activa"));
  document.getElementById(pantallaId).classList.add("activa");
}