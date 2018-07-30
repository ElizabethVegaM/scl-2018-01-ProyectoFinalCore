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

// registrar usuarios
registerUser.addEventListener('click', () => {
  const newUserKey = firebase.database().ref().child('visitors').push().key;
  firebase.database().ref(`visitors/${newUserKey}`).set({
    name: visitorName.value,
    rut: visitorRut.value,
    email: visitorEmail.value,
    company: inputCompany.value,
    employeeToVisit: inputEmployee.value,
    reason: inputReason.value,
    photo: 'hay que poner algo mientras',
    time: Date.now()
  });    
});


