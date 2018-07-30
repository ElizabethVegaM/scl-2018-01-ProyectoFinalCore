// function inicialize() {  
//   firebase.auth().onAuthStateChanged((user) => {
//     if (user) {
//     } else {
//     }
//   });
// }

function login() {
  const emailValue = email.value;
  const passwordValue = password.value;
  firebase.auth().signInWithEmailAndPassword(emailValue, passwordValue)
    .then(() => {
      console.log('Usuario con login exitoso');
    })
    .catch((error) => {
      console.log('Error de firebase > ' + error.code);
      console.log('Error de firebase, mensaje > ' + error.message);
      alert('Email o contraseña incorrecta');
    });
}