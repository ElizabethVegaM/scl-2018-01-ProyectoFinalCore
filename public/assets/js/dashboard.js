window.dataVisit = () => { 
firebase.database().ref('visitors')
  .limitToLast(100)
  .on('child_added', (newVisitor) => {
    console.log(newVisitor.val().name);  
  });
  return drawVisit();
}  

function drawVisit() {
  dashboardList.innerHTML += `
  <li>${newVisitor.val().photo}</li>
  <li>${newVisitor.val().name}</li>
  <li>${newVisitor.val().company}</li>
  <li>${newVisitor.val().email}</li>
  <li>${newVisitor.val().employeeToVisit}</li>
  <li>${newVisitor.val().reason}</li>
  <li>hora</li>
  `;
  console.log(drawVisit())
}
