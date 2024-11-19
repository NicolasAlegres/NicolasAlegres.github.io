async function cargarTraducciones(idioma) {
  try {
    const response = await fetch(`${idioma}.json`);
    if (!response.ok) throw new Error("Error al cargar el archivo JSON");
    const traducciones = await response.json();

    // Asignar las traducciones
    document.title = traducciones.title; // Clave corregida
    document.getElementById("home").textContent = traducciones.home;
    document.getElementById("about").textContent = traducciones.about;
    document.getElementById("portfolio").textContent = traducciones.portfolio;
    document.getElementById("description").textContent =
      traducciones.description; // Clave corregida
    document.getElementById("skills").textContent = traducciones.skills;
    document.getElementById("my_data").textContent = traducciones.my_data;
    document.getElementById("contact").textContent = traducciones.contact;
    document.getElementById("enter_name").placeholder =
      traducciones.enter_your_name_here;
    document.getElementById("enter_mail").placeholder =
      traducciones.enter_your_email_here;
    document.getElementById("enter_message").placeholder =
      traducciones.enter_your_message_here;
    document.getElementById("send_form").textContent = traducciones.send_form;
  } catch (error) {
    console.error("Error durante la carga de traducciones:", error);
  }
}

// Función para cambiar el idioma al hacer clic en el botón
function cambiarIdioma() {
  const nuevoIdioma = document.getElementById("selector-idioma").value; // Suponiendo que tienes un selector de idioma con este ID
  cargarTraducciones(nuevoIdioma);
}

// Obtener el botón y asignarle el evento click
const botonCambiarIdioma = document.getElementById("boton-cambiar-idioma");
botonCambiarIdioma.addEventListener("click", cambiarIdioma);

// Carga inicial de traducciones (por ejemplo, español)
cargarTraducciones("es");
