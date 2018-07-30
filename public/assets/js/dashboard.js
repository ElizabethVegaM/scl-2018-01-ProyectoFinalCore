firebase.database().ref('visitors')
  .limitToLast(100)
  .on('child_added', (newVisitor) => {
  const time = new Date(newVisitor.val().time);
    if(newVisitor.val().email === null){
      newVisitor.val().email = "sin información";
    }
    dashboardList.innerHTML += `
      <h5>${time.getDate()}/${time.getMonth()} ${time.getHours()}:${time.getMinutes()}</h5>
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
