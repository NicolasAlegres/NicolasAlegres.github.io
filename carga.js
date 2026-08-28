async function loadTranslations(language) {
  try {
    const response = await fetch(`${language}.json`);
    if (!response.ok) throw new Error("Error al cargar el archivo JSON");
    const translations = await response.json();
// Recorremos todos los elementos con el atributo data-key y actualizamos su contenido con la traducción correspondiente
    document.querySelectorAll('[data-key]').forEach((element) => {
      const key = element.getAttribute('data-key');
      if (translations[key]){
        element.textContent = translations[key];
      }
    });

    
  } catch (error) {
    console.error("Error durante la carga de traducciones:", error);
  }
}

// Función para cambiar el idioma al hacer clic en el botón
function changeLanguage(language) {
  localStorage.setItem("language", language);
  loadTranslations(language);

  
}
// declaramos la variable savedLanguage para almacenar el idioma guardado en localStorage o el idioma predeterminado "es"
const savedLanguage = localStorage.getItem("language") || "es";
changeLanguage(savedLanguage);

// Obtenemos el elemento del interruptor de idioma y configuramos su estado según el idioma guardado
const switchElement = document.getElementById("toggleSwitch");
if (switchElement){
  switchElement.checked = savedLanguage === "en";

  switchElement.addEventListener("change", function (){
    if (this.checked){
      changeLanguage("en");
    } else {
      changeLanguage("es");
    }
  })  
};