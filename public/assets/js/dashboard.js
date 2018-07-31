firebase.database().ref('visitors')
  .limitToLast(100)
  .on('child_added', (newVisitor) => {
    const month = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    const time = new Date(newVisitor.val().time);
    bodyDashboard.innerHTML += `
      <tr>
        <td>
          <img class="avatar-pic" id="avatarPic" src="${newVisitor.val().photo}"></img>
          <p>${newVisitor.val().name}/</p>
          <p>${newVisitor.val().company.toUpperCase()}</p>
        </td>
        <td>
          <p>${time.getDate()}/${month[time.getMonth()]}</p> 
          <p>0${time.getHours()}:${time.getMinutes()}</p>
        </td>
        <td>
          <p>${newVisitor.val().companyToVisit}</p>
        </td>
        <td>${newVisitor.val().reason}</td>
       </tr>
    `;
  });

function addResident () {

};

function removeResident () {

};

function drawChart() {
  var dataTable = new google.visualization.DataTable();
  dataTable.addColumn({ type: 'date', id: 'Date' });
  dataTable.addColumn({ type: 'number', id: 'Won/Loss' });
  dataTable.addRows([
    [time.getDate(), newVisitor.val().name]
   ]);

  var chart = new google.visualization.Calendar(document.getElementById('calendar_basic'));

  var options = {
    title: "Red Sox Attendance",
    height: 350,
  };

  chart.draw(dataTable, options);
}