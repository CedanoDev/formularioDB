const firebaseConfig = {
    apiKey: "AIzaSyBf55tJ9qnoKSSFP6NeRkH3UrVTGJ-Yn48",
    authDomain: "formulariocontacto-68f30.firebaseapp.com",
    databaseURL: "https://formulariocontacto-68f30-default-rtdb.firebaseio.com",
    projectId: "formulariocontacto-68f30",
    storageBucket: "formulariocontacto-68f30.firebasestorage.app",
    messagingSenderId: "912951674032",
    appId: "1:912951674032:web:86267568181385c645a775",
    measurementId: "G-NPM9LL9PVQ"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  const form = document.getElementById('contactForm');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Crear un objeto con los datos del formulario
    const data = {
        name: name,
        email: email,
        message: message
    };

    // Guardar los datos en Firebase
    firebase.database().ref('contact').push(data)
        .then(() => {
            alert('Mensaje guardado');
            form.reset(); // Limpiar el formulario
        })
        .catch((error) => {
            alert('Error al guardar el mensaje: ' + error.message);
        });
});