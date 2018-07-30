firebase.database().ref('visitors')
  .limitToLast(100)
  .on('child_added', (newVisitor) => {
  dashboardList.innerHTML += `
  <h5>${newVisitor.val().time.getDate()}/${newVisitor.val().time.getMonth()}${newVisitor.val().time.getHours()}:${newVisitor.val().time.getMinutes()}</h5>
  <li>${newVisitor.val().photo}</li>
  <li>${newVisitor.val().name}</li>
  <li>${newVisitor.val().company}</li>
  <li>${newVisitor.val().email}</li>
  <li>${newVisitor.val().employeeToVisit}</li>
  <li>${newVisitor.val().reason}</li>
  <li>${newVisitor.val().companyToVisit}</li>
  <li>${newVisitor.val().licensePlate}</li>  
  `;
  });




