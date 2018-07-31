/* 
window.onload = () => {
  dataEmployee();
};

// Traer archivo de empleados
let employees = {};
const dataEmployee = () => {
  fetch('../data/employees.json')
    .then(response => response.json())
    .then(data => {
      employees = data;
      console.log(employees);
    });
};

inputCompany.addEventListener('click', () => {
  inputEmployee.innerHTML = '';
  for (let i = 0; i < employees.length; i++) {
    if (inputCompany.value === employees[i].empresa) {
      inputEmployee.innerHTML += `<option>${employees[i].empleado}(${employees[i].contacto})</option>`;
    }      
  }
});
*/

// Validar rut
jQuery(document).ready(function($) {
  $('#visitorRut').rut();
});

// Registrar nuevos visitantes
let photoURL;
photo.addEventListener('change', function(event) {
  let storageRef = firebase.storage().ref().child(`visitorsPhoto/${visitorRut.value}.jpeg`);
  let firstFile = event.target.files[0];
  storageRef.put(firstFile);
  storageRef.getDownloadURL().then(function(url) {
    photoMessage.innerHTML = '¡Listo!';
    // profilePic.src = url;
    photoURL = url;
    console.log(photoURL);
  }).catch(function(error) {
    console.log('Ha ocurrido un error' + error);
  });
});

registerUser.addEventListener('submit', () => {
  visitor = visitorName.value;
  rut = visitorRut.value;
  email = visitorEmail.value;
  visitorCompany = visitorCompany.value;
  licensePlate = visitorLicensePlate.value;
  company = inputCompany.value;
  reason = inputReason.value;
  const newUserKey = firebase.database().ref().child('visitors').push().key;
  firebase.database().ref(`visitors/${newUserKey}`).set({
    name: visitor,
    rut: rut,
    email: email,
    company: visitorCompany,
    licensePlate: licensePlate,
    companyToVisit: company,
    reason: reason,
    photo: photoURL,
    time: Date.now()
  });
  welcome.classList.add('d-none');
  succes.classList.remove('d-none');
  register.classList.add('d-none');
});

