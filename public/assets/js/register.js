window.onload = () => {
  dataEmployee();
};

// Validar rut
jQuery(document).ready(function($) {
  $('#visitorRut').rut();
});


let employees = {};
// Taer archivo de empleados
const dataEmployee = () => {
  fetch('../../../data/employees.json')
    .then(response => response.json())
    .then(data => {
      employees = data;
      console.log(employees);      
    });
};