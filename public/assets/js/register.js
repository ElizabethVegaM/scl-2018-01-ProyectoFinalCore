window.onload = () => {
  dataEmployee();
};

// Validar rut
jQuery(document).ready(function($) {
  $('#visitorRut').rut();
});

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
/*
inputCompany.addEventListener('click', () => {
  inputEmployee.innerHTML = '';
  for (let i = 0; i < employees.length; i++) {
    if (inputCompany.value === employees[i].empresa) {
      inputEmployee.innerHTML += `<option>${employees[i].empleado}(${employees[i].contacto})</option>`;
    }      
  }
});
*/

// Registrar nuevos visitantes
photo.addEventListener('change', function(event) {
  let storageRef = firebase.storage().ref().child(`visitorsPhoto/${visitorRut.value}.jpeg`);
  let firstFile = event.target.files[0];
  storageRef.put(firstFile);
  storageRef.getDownloadURL().then(function(url) {
    profilePic.src = url;
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
  employee = inputEmployee.value;
  reason = inputReason.value;
  photo = profilePic.src;
  const newUserKey = firebase.database().ref().child('visitors').push().key;
  firebase.database().ref(`visitors/${newUserKey}`).set({
    name: visitor,
    rut: rut,
    email: email,
    company: visitorCompany,
    licensePlate: licensePlate,
    companyToVisit: company,
    employeeToVisit: employee,
    reason: reason,
    photo: photo
  });
});

firebase.database().ref('visitors')
  .limitToLast(10)
  .on('child_added', (newVisitor) => {
    console.log(newVisitor.val());
  });

