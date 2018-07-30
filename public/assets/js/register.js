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
  fetch('../../../data/employees.json')
    .then(response => response.json())
    .then(data => {
      employees = data;
      console.log(employees);      
    });
};

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

registerUser.addEventListener('click', () => {
  const newUserKey = firebase.database().ref().child('visitors').push().key;
  firebase.database().ref(`visitors/${newUserKey}`).set({
    name: visitorName.value,
    rut: visitorRut.value,
    email: visitorEmail.value,
    company: visitorCompany.value,
    licensePlate: visitorLicensePlate.value,
    companyToVisit: inputCompany.value,
    employeeToVisit: inputEmployee.value,
    reason: inputReason.value,
    photo: profilePic.src
  });
});

firebase.database().ref('visitors')
  .limitToLast(10)
  .on('child_added', (newVisitor) => {
    console.log(newVisitor.val());  
  });
